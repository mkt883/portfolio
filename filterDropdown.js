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
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><video onclick="ktok()" class="main-body-post vp" loop autoplay muted aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/MA2807_KaunosTombOfKings.mp4" width="800px" poster="images/thumbnails/ktok-thumbnail.png"></video><p>Unreal Engine, DaVinci Resolve</p></div>
            <div class="main-body-post"><img onclick="questOfPatrick()" class="main-body-post gd" alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.png" width="300px"><p>Clip Studio Paint, Photoshop/Photopea</p></div>
            <div class="main-body-post"><img onclick="mayhemTeaser()" class="main-body-post gd" alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg" width="400px"><p>Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="battleland()" class="main-body-post vp" loop autoplay muted aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/BATTLELAND showcase video.mp4" width="700px" poster="images/thumbnails/battleland-thumbnail.png"></video><p>Unreal Engine, DaVinci Resolve</p></div>
            <div class="main-body-post"><img onclick="fairlady()" class="main-body-post gd" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked.jpg" width="400px"><p>Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="quickdraw()" loop autoplay aria-label="A game called 'QUICKDRAW' showcasing a cowboy standoff" muted class="main-body-post game" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/QUICKDRAW SHOWCASE.mp4" width="580px" poster="images/thumbnails/qd-thumbnail.png"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="waterBend()" loop autoplay aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" muted class="main-body-post vfx" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Water bending my drink.mp4" width="600px" poster="images/thumbnails/wb-thumbnail.png"></video><p>After Effects, Premiere Pro</p></div>
            <div class="main-body-post"><video onclick="stc()" loop autoplay muted class="main-body-post game" aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/stc.mp4" width="450px" poster="images/thumbnails/stc-thumbnail.png"></video><p>Unity, Photoshop</p></div>
            <div class="main-body-post"><video onclick="odileOddete()" loop autoplay muted class="main-body-post game" aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/OdileOdette Game showcase.mp4" width="550px" poster="images/thumbnails/odt-thumbnail.png"></video><p>Unity, Clip Studio Paint, Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="umbrellaWarrior()" loop autoplay muted aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" class="main-body-post game" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/UMBRELLA-WARRIOR-showcase-video.mp4" width="500px" poster="images/thumbnails/uw-thumbnail.png"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
            <div class="main-body-post"><video onclick="rasenganCatch()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Rasengan Catch with Shadow Clone.mp4" width="450px" poster="images/thumbnails/rsc-thumbnail.png"></video><p>After Effects, Premiere Pro</p></div>
            <div class="main-body-post"><video onclick="roomTornado()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video of myslf creating a tornado in my room" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tornado in room.mp4" width="500px" poster="images/thumbnails/trndo-thumbnail.png"></video><p>After Effects, DaVinci Resolve</p></div>
            <div class="main-body-post"><video onclick="tenetPencil()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tenet pencil.mp4" width="450px" poster="images/thumbnails/tnt-thumbnail.png"></video><p>DaVinci Resolve, Blender</p></div>
            <div class="main-body-post"><video onclick="mobileControl()" loop autoplay muted class="main-body-post misc" aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/misc/mobileControlProj.mp4" width="550px" poster="images/thumbnails/mobile-thumbnail.png"></video><p>HTML, CSS, JavaScript</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function vpContent(){
  let main = document.getElementById("main");
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><video onclick="ktok()" class="main-body-post vp" loop autoplay muted aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/MA2807_KaunosTombOfKings.mp4" width="800px" poster="images/thumbnails/ktok-thumbnail.png"></video><p>Unreal Engine, DaVinci Resolve</p></div>
<div class="main-body-post"><video onclick="battleland()" class="main-body-post vp" loop autoplay muted aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/BATTLELAND showcase video.mp4" width="700px" poster="images/thumbnails/battleland-thumbnail.png"></video><p>Unreal Engine, DaVinci Resolve</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function gdContent(){
  let main = document.getElementById("main");
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><img onclick="questOfPatrick()" class="main-body-post gd" alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.png" width="300px"><p>Clip Studio Paint, Photoshop/Photopea</p></div>
<div class="main-body-post"><img onclick="mayhemTeaser()" class="main-body-post gd" alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg" width="400px"><p>Photoshop/Photopea</p></div>
<div class="main-body-post"><img onclick="fairlady()" class="main-body-post gd" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked.jpg" width="400px"><p>Photoshop/Photopea</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function gamContent(){
  let main = document.getElementById("main");
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><video onclick="stc()" loop autoplay muted class="main-body-post game" aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/stc.mp4" width="450px" poster="images/thumbnails/stc-thumbnail.png"></video><p>Unity, Photoshop</p></div>
<div class="main-body-post"><video onclick="odileOddete()" loop autoplay muted class="main-body-post game" aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/OdileOdette Game showcase.mp4" width="550px" poster="images/thumbnails/odt-thumbnail.png"></video><p>Unity, Clip Studio Paint, Photoshop/Photopea</p></div>
<div class="main-body-post"><video onclick="umbrellaWarrior()" loop autoplay muted aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" class="main-body-post game" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/UMBRELLA-WARRIOR-showcase-video.mp4" width="500px" poster="images/thumbnails/uw-thumbnail.png"></video><p>JavaScript (p5.js), Photoshop/Photopea</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function vidContent(){
  let main = document.getElementById("main");
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><video onclick="waterBend()" loop autoplay aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" muted class="main-body-post vfx" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Water bending my drink.mp4" width="600px" poster="images/thumbnails/wb-thumbnail.png"></video><p>After Effects, Premiere Pro</p></div>
<div class="main-body-post"><video onclick="rasenganCatch()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Rasengan Catch with Shadow Clone.mp4" width="450px" poster="images/thumbnails/rsc-thumbnail.png"></video><p>After Effects, Premiere Pro</p></div>
<div class="main-body-post"><video onclick="roomTornado()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video of myslf creating a tornado in my room" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tornado in room.mp4" width="500px" poster="images/thumbnails/trndo-thumbnail.png"></video><p>After Effects, DaVinci Resolve</p></div>
<div class="main-body-post"><video onclick="tenetPencil()" loop autoplay muted class="main-body-post vfx" aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tenet pencil.mp4" width="450px" poster="images/thumbnails/tnt-thumbnail.png"></video><p>DaVinci Resolve, Blender</p></div>
`
document.querySelector('footer').style = 'margin-top: auto;'
}
function miscContent(){
  let main = document.getElementById("main");
    main.innerHTML = `<div id="top-bar">
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
<div class="main-body-post"><video onclick="mobileControl()" loop autoplay muted class="main-body-post misc" aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/misc/mobileControlProj.mp4" width="550px" poster="images/thumbnails/mobile-thumbnail.png"></video><p>HTML, CSS, JavaScript</p></div>
`
  document.querySelector('footer').style = 'position: absolute'
}
