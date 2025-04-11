function openPopUp(){
    let newPopUpBg = document.createElement("div");
    newPopUpBg.setAttribute("id", "pop-up-bg");
    newPopUpBg.setAttribute("onclick", "timedClosePopUp()");

    let newPopUp = document.createElement("div");
    newPopUp.setAttribute("class", "pop-up");
    newPopUpBg.appendChild(newPopUp);

    document.getElementsByTagName('body')[0].appendChild(newPopUpBg);
    
    console.log("Pop up open!")
}
function closePopUp(){
    console.log("Pop up closed")
    let popUp = document.getElementById("pop-up-bg");
    popUp.remove();

    return null;
}
function timedClosePopUp(){
    let popUp = document.getElementById("pop-up-bg")
    popUp.style.animation = "fadeOut ease 0.5s";
    setTimeout(closePopUp, 500);
}

// Individual posts

// vp videos
function ktok(){
    openPopUp();
    
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Kaunos Tomb of Kings:</h1>
        <video controls loop autoplay poster="images/thumbnails/ktok-thumbnail.png" aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/MA2807_KaunosTombOfKings.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unreal Engine, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            <strong>I achieved a First</strong> for this project.
            This was my term 1 final project I made for university for my <strong>Virtual Production</strong> module.<br><br>
            I had to recreate a place that I'd been to using Unreal Engine, so I picked the Dalyan Tomb of Kings in Turkey.<br><br>
            This project required me to use my landscaping skills in combination with ultra dynamic sky and megascans from Quixel Bridge (now FAB) to create the landscape.<br><br>
            My knowledge on landscape texturing, foliage and optimisation (e.g. with LODs) improved here.<br><br>
            I also achieved a better understanding of rendering and how the camera works in Unreal Engine.<br><br>
            Blender was used for the tomb faces, in combination with layering some assets in Unreal.<br><br>
            DaVinci Resolve was used to add in royalty free ambient sounds and cut the clips together.
        </div>
    `;

}
function battleland(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>BATTLELAND:</h1>
        <video controls loop autoplay poster="images/thumbnails/battleland-thumbnail.png" aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/BATTLELAND showcase video.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unreal Engine, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            This was a smaller project I made for my university <strong>Virtual Production</strong> module.<br><br>
            The brief was to create an island and I wanted to go for a fantastical look.<br><br>
            I learnt about painting textures onto the landscape and using the experimental water plug-in.
            All the assets were free from Quixel Bridge (now FAB) megascans, foliage was used to create the scattered weapons.<br><br>
            Inspiration was taken from <em>One Piece</em>.<br><br>
            DaVinci Resolve was used to add in royalty free ambient sounds and cut the clips together.
        </div>
    `;
}

//graphics
function questOfPatrick(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>The Quest of Patrick Star:</h1>
        <div class="centerImg">
            <img style="max-height: 400px;" alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.png">
        </div>
        <br>
        <strong>Using:</strong> <em>Clip Studio Paint, Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a secret santa project for my friend.<br><br>
            This design was for an album cover and t-shirt back graphic.<br><br>
            It was drawn by me in Clip Studio Paint using my <strong>Huion drawing tablet</strong>.<br><br>
            Photoshop/Photopea was used for manipulating the text.
        </div>
    `;
}
function mayhemTeaser(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>MAYHEM Teaser:</h1>
        <div class="centerImg">
            <img style="max-height: 400px;" alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg">
        </div>
        <br><br>
        <strong>Using:</strong> <em>Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was for my A-Level Media Studies coursework where <strong>I achieved 58/60<strong>.<br><br>
            All images used (apart from brand icons) had to be generated and taken by ourselves.<br><br>
            To create certain effects such as in the background, I used generative features on Photoshop and Photopea.
        </div>
        
    `;
}
function fairlady(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Fairlady:</h1>
        <div class="centerImg">
            <img style="max-height: 400px;" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked.jpg">
            <img style="max-height: 400px;" alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/fairlady_watermarked_2.jpg">
        </div>
        <br>
        <strong>Using:</strong> <em>Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This design was sold to print on t-shirts and hoodies for <strong>ZocietyEU</strong>.<br><br>
            <strong>You can buy:</strong><br>
            T-Shirt: <a href="https://zocietyeu.com/products/fairlady-350z">here</a><br>
            Hoodie: <a href="https://zocietyeu.com/products/fairlady-350z-hoodie">here</a><br><br>
            I used Photoshop/Photopea to bring together AI generated images from <strong>Dall-E</strong> and <strong>Playground AI</strong>.
        </div>
    `;
}

//games
function stc(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Save The City:</h1>
        <video controls loop autoplay poster="images/thumbnails/stc-thumbnail.png" aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/stc.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unity, Photoshop</em><br><br>
        <div class="top-bot-borders">
            This was a personal game project.<br><br>
            I taught myself how to navigate and use Unity and code in C#.<br><br>
            Tile creation, mapping and level design was another important process I'd gained knowledge about here.<br><br>
            I used Photoshop to create all the artwork for the game.
        </div>
    `;
}
function odileOddete(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Odile & Odette:</h1>
        <video controls loop autoplay poster="images/thumbnails/odt-thumbnail.png" aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/OdileOdette Game showcase.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unity, Clip Studio Paint, Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a rhythm game practice project for my A-Level Art coursework.<br><br>
            Here I took the opportunity to improve on my start menu design.<br><br>
            Mapping the steps to the beat also improved my knowledge in level design.<br><br>
            I used Clip Studio Paint to hand draw all of the artwork for the game using my <strong>Huion drawing tablet</strong>.<br><br>
            It was inspired by <a href="https://africa.si.edu/exhibits/shonibare/odette.html">Yinka Shonibare's <em>Odile Odette</em> pieces.</a>
        </div>
    `;
}
function quickdraw(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Quickdraw:</h1>
        <div class="centerImg"><video controls loop autoplay poster="images/thumbnails/qd-thumbnail.png" aria-label="A game called 'QUICKDRAW' showcasing a cowboy standoff" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/QUICKDRAW SHOWCASE.mp4" height="420px"></video></div>
        <br><br>
        <strong>Using:</strong> <em>JavaScript (p5.js), Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            <strong>I achieved a First</strong> for this project.
            This was a game project I had to do for my university course.<br><br>
            Improved my knowledge on Timeout functions and improved my confidence in coding a game from scratch.<br><br>
            I used Photoshop/Photopea to create all the artwork for the game.<br><br>
            The game had to be coded using the JavaScript library: <em>p5.js</em>.
        </div>
    `;
}
function umbrellaWarrior(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Umbrella Warrior:</h1>
        <video controls loop autoplay poster="images/thumbnails/uw-thumbnail.png" aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/UMBRELLA-WARRIOR-showcase-video.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>JavaScript (p5.js), Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a group game project for my university course.<br><br>
            <strong>My Role:</strong> Coding the player movement, combining everyones code together, designing the main character, enemy sprite and the 2nd level assets, as well as level design for all but the 3rd level.<br><br>
            Further improved my ability in tile mapping and leading group coding work.<br><br>
            I used Photoshop/Photopea to create all the artwork for the game.<br><br>
            The game had to be coded using the JavaScript library: <em>p5.js</em>.
        </div>
    `;
}

//videos
function waterBend(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Water Bending my Drink:</h1>
        <video controls loop autoplay poster="images/thumbnails/wb-thumbnail.png" aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Water bending my drink.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>After Effects, Premiere Pro</em><br><br>
        <div class="top-bot-borders">
            This was a personal experiment project during lockdown, where I was teaching myself After Effects and Premiere Pro.<br><br>
            Practice with my knowledge of animation principles (e.g. squash and stretch) to make it as realistic as I could.<br><br>
            Also taught me how to use work with After Effects e.g. creating the water object, particle systems and the mercury effect.
            Premiere Pro was used to compile the sound.<br><br>
            Inspired by <em>Avatar: the Last Airbender</em>.
        </div>
    `;
}
function rasenganCatch(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Rasengan Catch with Shadow Clone:</h1>
        <video controls loop autoplay poster="images/thumbnails/rsc-thumbnail.png" aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Rasengan Catch with Shadow Clone.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>After Effects, Premiere Pro</em><br><br>
        <div class="top-bot-borders">
            Another personal experiment project during lockdown.<br><br>
            Creating <em>the rasengan</em> effect introduced me to particle systems and keyframing in After Effects.<br><br>
            Premiere Pro was used to mask in my clone, green screen the smoke and compile the sound.<br><br>
            Inspired by <em>Naruto</em>.
        </div>
    `;
}
function roomTornado(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Tornado in my room:</h1>
        <video controls loop autoplay poster="images/thumbnails/trndo-thumbnail.png" aria-label="A VFX video of myslf creating a tornado in my room" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tornado in room.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>After Effects, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            This was another personal project during lockdown.<br><br>
            After Effects was used to create the tornado and flame effects using particle systems.<br><br>
            I also learn't about the lightning effect here.<br><br>
            My masking and key framing ability was tested here in DaVinci Resolve, where I compiled different videos to show the tornado wind affecting the environment and sell the effect better.<br><br>
            Also introduced my to the DaVinci Resolve <emProto</em> plug-in.
            It was also used to put together the sounds.
        </div>
    `;
}
function tenetPencil(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Tenet Pencil:</h1>
        <video controls loop autoplay poster="images/thumbnails/tnt-thumbnail.png" aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tenet pencil.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>DaVinci Resolve, Blender</em><br><br>
        <div class="top-bot-borders">
            Another personal project during lockdown.<br><br>
            Introduced me to Blender animations, needed for the obscure pencil movements.<br><br>
            DaVinci Resolve was used to put together the sound and further edit the video.<br><br>
            It was also used to put together the sounds.
        </div>
    `;
}

//misc
function mobileControl(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Mobile Control:</h1>
        <video controls loop autoplay poster="images/thumbnails/mobile-thumbnail.png" aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/misc/mobileControlProj.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>HTML, CSS, JavaScript</em><br><br>
        <div class="top-bot-borders">
            <em>Please experience this project fully <a target="_blank" href="https://mkt883.github.io/ma2013-mobile-control/">here</a>.</em>
            <strong>I achieved an upper First</strong> for this project.<br><br>
            This was a university project where we had to investigate different <em>interfaces</em>. I chose control.<br><br>
            It was supposed to be a more artistic project, exploring how the phone controls in various ways<br><br>
            My JavaScript confidence greatly improved here, understanding how to better utilise it for web development and future projects.<br><br>
            This project also improved my understanding of mobile app design.
        </div>
    `;
}