# PORTFOLIO WEBSITE
This is my portfolio, find my creative and coding projects here

## Optimize PNG images

Install the image converter dependency once:

```powershell
python -m pip install -r requirements.txt
```

Preview which opaque PNGs in `images/` can become smaller JPGs:

```powershell
python scripts/convert_opaque_pngs.py
```

Apply the conversions and update matching image paths in the site's HTML, CSS, and JavaScript:

```powershell
python scripts/convert_opaque_pngs.py --apply
```

The script keeps the original PNGs, skips images with transparent pixels, skips JPGs that would be larger, and does not overwrite existing JPGs.
