//toggle dropdown menu
function dropDown() {
    document.getElementById("worksFilter").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("filter-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// Load content
function allContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><video onclick="ktok()" class="main-body-post vp" muted aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" width="800px" poster="images/thumbnails/ktok-thumbnail.jpg" preload="none"></video><p>Unreal Engine, DaVinci Resolve</p></div>
            <div class="main-body-post"><img loading="lazy" onclick="questOfPatrick()" class="main-body-post gd" alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.jpg" width="300px"><p>Clip Studio Paint, Photoshop/Photopea</p></div>
            <div class="main-body-post"><img loading="lazy" onclick="mayhemTeaser()" class="main-body-post gd" alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg" width="400px"><p>Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="battleland()" class="main-body-post vp" muted aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" width="700px" poster="images/thumbnails/battleland-thumbnail.jpg" preload="none"></video><p>Unreal Engine, DaVinci Resolve</p></div>
            <div class="main-body-post"><img loading="lazy" onclick="fairlady()" class="main-body-post gd" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked.jpg" width="400px"><p>Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="quickdraw()" aria-label="A game called 'QUICKDRAW' showcasing a cowboy standoff" muted class="main-body-post game" width="580px" poster="images/thumbnails/qd-thumbnail.jpg" preload="none"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="waterBend()" aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" muted class="main-body-post vfx" width="600px" poster="images/thumbnails/wb-thumbnail.jpg" preload="none"></video><p>After Effects, Premiere Pro</p></div>
            <div class="main-body-post"><video onclick="stc()" muted class="main-body-post game" aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" width="450px" poster="images/thumbnails/stc-thumbnail.jpg" preload="none"></video><p>Unity, Photoshop</p></div>
            <div class="main-body-post"><video onclick="odileOddete()" muted class="main-body-post game" aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" width="550px" poster="images/thumbnails/odt-thumbnail.jpg" preload="none"></video><p>Unity, Clip Studio Paint, Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="umbrellaWarrior()" muted aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" class="main-body-post game" width="500px" poster="images/thumbnails/uw-thumbnail.jpg" preload="none"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="rasenganCatch()" muted class="main-body-post vfx" aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" width="450px" poster="images/thumbnails/rsc-thumbnail.jpg" preload="none"></video><p>After Effects, Premiere Pro</p></div>
            <div class="main-body-post"><video onclick="roomTornado()" muted class="main-body-post vfx" aria-label="A VFX video of myslf creating a tornado in my room" width="500px" poster="images/thumbnails/trndo-thumbnail.jpg" preload="none"></video><p>After Effects, DaVinci Resolve</p></div>
            <div class="main-body-post"><video onclick="tenetPencil()" muted class="main-body-post vfx" aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" width="450px" poster="images/thumbnails/tnt-thumbnail.jpg" preload="none"></video><p>DaVinci Resolve, Blender</p></div>
            <div class="main-body-post"><video onclick="mobileControl()" muted class="main-body-post misc" aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" width="550px" poster="images/thumbnails/mobile-thumbnail.jpg" preload="none"></video><p>HTML, CSS, JavaScript</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function vpContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><video onclick="ktok()" class="main-body-post vp" muted aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" width="800px" poster="images/thumbnails/ktok-thumbnail.jpg" preload="none"></video><p>Unreal Engine, DaVinci Resolve</p></div>
<div class="main-body-post"><video onclick="battleland()" class="main-body-post vp" muted aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" width="700px" poster="images/thumbnails/battleland-thumbnail.jpg" preload="none"></video><p>Unreal Engine, DaVinci Resolve</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function gdContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><img loading="lazy" onclick="questOfPatrick()" class="main-body-post gd" alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.jpg" width="300px"><p>Clip Studio Paint, Photoshop/Photopea</p></div>
<div class="main-body-post"><img loading="lazy" onclick="mayhemTeaser()" class="main-body-post gd" alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg" width="400px"><p>Photoshop/Photopea</p></div>
<div class="main-body-post"><img loading="lazy" onclick="fairlady()" class="main-body-post gd" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked.jpg" width="400px"><p>Photoshop/Photopea</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function gamContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><video onclick="stc()" muted class="main-body-post game" aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" width="450px" poster="images/thumbnails/stc-thumbnail.jpg" preload="none"></video><p>Unity, Photoshop</p></div>
<div class="main-body-post"><video onclick="odileOddete()" muted class="main-body-post game" aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" width="550px" poster="images/thumbnails/odt-thumbnail.jpg" preload="none"></video><p>Unity, Clip Studio Paint, Photoshop/Photopea</p></div>
<div class="main-body-post"><video onclick="umbrellaWarrior()" muted aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" class="main-body-post game" width="500px" poster="images/thumbnails/uw-thumbnail.jpg" preload="none"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function vidContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><video onclick="waterBend()" aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" muted class="main-body-post vfx" width="600px" poster="images/thumbnails/wb-thumbnail.jpg" preload="none"></video><p>After Effects, Premiere Pro</p></div>
<div class="main-body-post"><video onclick="rasenganCatch()" muted class="main-body-post vfx" aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" width="450px" poster="images/thumbnails/rsc-thumbnail.jpg" preload="none"></video><p>After Effects, Premiere Pro</p></div>
<div class="main-body-post"><video onclick="roomTornado()" muted class="main-body-post vfx" aria-label="A VFX video of myslf creating a tornado in my room" width="500px" poster="images/thumbnails/trndo-thumbnail.jpg" preload="none"></video><p>After Effects, DaVinci Resolve</p></div>
<div class="main-body-post"><video onclick="tenetPencil()" muted class="main-body-post vfx" aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" width="450px" poster="images/thumbnails/tnt-thumbnail.jpg" preload="none"></video><p>DaVinci Resolve, Blender</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function miscContent(){
  let main = document.getElementById("main");
    main.innerHTML = `
    <div id="mobile-ver">
                <img loading="lazy" onclick="displaySideBar()" src="images/logo/portfolioLogo_1.png" height="50px">
                <button onclick="addFilterOptions()" class="mobile-dropbtn">≡</button>
            </div>
    <div id="top-bar">
    <div class="filter">
        <button onclick="dropDown()" class="dropbtn">≡</button>
        <div id="worksFilter" class="filter-content">
          <a onclick="allContent()">All</a>
          <a onclick="vpContent()">Virtual Production</a>
          <a onclick="gdContent()">Graphic Design</a>
          <a onclick="gamContent()">Games</a>
          <a onclick="vidContent()">Video</a>
          <a onclick="miscContent()">Misc.</a>
        </div>
      </div>
</div>
<div class="main-body-post"><video onclick="mobileControl()" muted class="main-body-post misc" aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" width="550px" poster="images/thumbnails/mobile-thumbnail.jpg" preload="none"></video><p>HTML, CSS, JavaScript</p></div>
`
  document.querySelector('footer').style = 'position: absolute'
}
