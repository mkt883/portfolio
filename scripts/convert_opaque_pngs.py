from __future__ import annotations

import argparse
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parent.parent
IMAGE_ROOT = ROOT / "images"
SOURCE_SUFFIXES = {".html", ".css", ".js"}


def encode_jpeg(png_path: Path) -> bytes | None:
    with Image.open(png_path) as image:
        alpha = image.convert("RGBA").getchannel("A")
        if alpha.getextrema()[0] < 255:
            return None

        image = ImageOps.exif_transpose(image).convert("RGB")
        output = BytesIO()
        options = {"quality": 88, "optimize": True, "progressive": True}
        if "icc_profile" in image.info:
            options["icc_profile"] = image.info["icc_profile"]
        image.save(output, format="JPEG", **options)
        return output.getvalue()


def source_files() -> list[Path]:
    return [
        path
        for path in ROOT.rglob("*")
        if path.is_file()
        and path.suffix.lower() in SOURCE_SUFFIXES
        and not any(part.startswith(".") for part in path.relative_to(ROOT).parts)
        and "images" not in path.relative_to(ROOT).parts
    ]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Convert opaque PNGs to smaller JPGs and update site references."
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Write JPGs and update references. Without this, only preview changes.",
    )
    args = parser.parse_args()

    if not IMAGE_ROOT.is_dir():
        raise SystemExit(f"Image folder not found: {IMAGE_ROOT}")

    replacements: dict[bytes, bytes] = {}
    converted = 0
    skipped_transparent = 0
    skipped_not_smaller = 0
    skipped_existing = 0

    png_files = sorted(
        path for path in IMAGE_ROOT.rglob("*") if path.is_file() and path.suffix.lower() == ".png"
    )

    for png_path in png_files:
        jpg_path = png_path.with_suffix(".jpg")
        relative_png = png_path.relative_to(ROOT).as_posix()
        relative_jpg = jpg_path.relative_to(ROOT).as_posix()

        if jpg_path.exists():
            print(f"SKIP existing JPG: {relative_png}")
            skipped_existing += 1
            continue

        jpeg_data = encode_jpeg(png_path)
        if jpeg_data is None:
            print(f"KEEP transparent PNG: {relative_png}")
            skipped_transparent += 1
            continue

        original_size = png_path.stat().st_size
        if len(jpeg_data) >= original_size:
            print(f"KEEP JPG would be larger: {relative_png}")
            skipped_not_smaller += 1
            continue

        saved_bytes = original_size - len(jpeg_data)
        action = "CONVERT" if args.apply else "WOULD CONVERT"
        print(f"{action} {relative_png} ({saved_bytes:,} bytes saved)")

        if args.apply:
            jpg_path.write_bytes(jpeg_data)
            replacements[relative_png.encode("utf-8")] = relative_jpg.encode("utf-8")
            converted += 1

    updated_sources = 0
    if args.apply and replacements:
        for source_path in source_files():
            original = source_path.read_bytes()
            updated = original
            for old_path, new_path in replacements.items():
                updated = updated.replace(old_path, new_path)
            if updated != original:
                source_path.write_bytes(updated)
                updated_sources += 1

    mode = "Applied" if args.apply else "Preview"
    result = str(converted) if args.apply else "run with --apply to convert"
    print(
        f"{mode}: {result}. Transparent: {skipped_transparent}; "
        f"larger JPG: {skipped_not_smaller}; existing JPG: {skipped_existing}; "
        f"source files updated: {updated_sources}."
    )


if __name__ == "__main__":
    main()