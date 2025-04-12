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
            Virtual production project.<br><br>
            Recreation of the <a href="https://www.villaplusturkey.com/blog/kaunos-tombs-of-the-kings" target="_blank">Kaunos Tomb of Kings in Dalyan Turkey</a>.<br><br>
            Landscaping, foliage, Ultra Dynamic Sky plug in and Quixel Bridge (FAB) megascan assets all used to put this together.<br><br>
            Optimization and use of cameras done in Unreal Engine.<br><br>
            Blender used for the tomb faces.<br><br>
            DaVinci Resolve used to for the sounds.
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
            Virtual production island project.<br><br>
            Texture painting, fantastical landscape design and use of plug-ins donein Unreal Engine.<br><br>
            Using megascans from Quixel Bridge.<br><br>
            DaVinci Resolve used for the sounds.<br><br>
            Inspired by <em>One Piece</em>.
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
            Created as secret santa project for my friend.<br><br>
            Used as an album cover and t-shirt back graphic.<br><br>
            Drawn by me in Clip Studio Paint using a <strong>Huion drawing tablet</strong>.<br><br>
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
            Movie teaser poster practice.<br><br>
            All images used (apart from brand icons) had to be generated and taken myself.<br><br>
            Generative features in Photoshop and Photopea used to create effects, such as in the background.
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
            A clothing graphic created for and sold to <strong>ZocietyEU</strong>.<br><br>
            <strong>You can buy here:</strong><br>
            T-Shirt: <a href="https://zocietyeu.com/products/fairlady-350z" target="_blank">here</a><br>
            Hoodie: <a href="https://zocietyeu.com/products/fairlady-350z-hoodie" target="_blank">here</a><br><br>
            Photoshop/Photopea used to bring together AI generated images from <strong>Dall-E</strong> and <strong>Playground AI</strong>.
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
            Personal platformer game project.<br><br>
            Using Unity game engine and C#.<br><br>
            Also working on tilemap creation and level design.<br><br>
            Photoshop used to create the visual assets for the game.
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
            Rhythm game project.<br><br>
            Clip Studio Paint used to draw all of the artwork for the game using digital Huion drawing tablet.<br><br>
            Coded with C# in Unity game engine.<br><br>
            Inspired by <a href="https://africa.si.edu/exhibits/shonibare/odette.html">Yinka Shonibare's <em>Odile Odette</em> pieces.</a>
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
            Small game project<br><br>
            Coding outside of a game engine.<br><br>
            Photoshop/Photopea used to create all the artwork for the game.<br><br>
            Music created using an online beat maker.<br><br>
            Coded using the JavaScript library: <em>p5.js</em>.
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
            <strong>Group game project</strong> for university.<br><br>
            <strong>My Role:</strong> Coding the player movement, combining everyones code, designing the main character, enemy sprite and the 2nd level assets, level design for all but the 3rd level.<br><br>
            Practicing tile mapping and leading group coding work.<br><br>
            Used Photoshop/Photopea to create all the artwork for the game.<br><br>
            Coded using the JavaScript library: <em>p5.js</em>.
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
            Personal project during lockdown, to teach myself After Effects and Premiere Pro.<br><br>
            Exploring After Effects e.g. creating the water object, particle systems and the mercury effect.
            Premiere Pro was used to compile the sound.<br><br>
            Inspired by <a href="https://www.youtube.com/watch?v=qCUVwTcx7TE" target="_blank"><em>Avatar: the Last Airbender</em></a>.
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
            Another project during lockdown.<br><br>
            Creating <a href="https://youtu.be/vhrL7jRRcKM?si=VIEo3ezY9T2eVqwW" target="_blank"><em>the rasengan</em></a> effect using particle systems and keyframing done in After Effects.<br><br>
            Premiere Pro was used to mask in my clone, green screen the smoke and compose the sound.<br><br>
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
            Lockdown project.<br><br>
            After Effects particle systems used to create the tornado and flame effect.<br><br>
            Working with the lightning effect.<br><br>
            Masking and key framing in DaVinci Resolve.<br><br>
            Also using DaVinci Resolve <emProto</em> plug-in and put together the sounds.
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
            Another lockdown project.<br><br>
            Blender used to animate the pencil.<br><br>
            DaVinci Resolve used for the sound and to further edit the video.<br><br>
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
            <em>To experience this project fully, please click <a target="_blank" href="https://mkt883.github.io/ma2013-mobile-control/">here</a>.</em><br><br>
            Project investigating control as an interface and how the phone controls.<br><br>
        </div>
    `;
}