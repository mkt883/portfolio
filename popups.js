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
        <video controls loop autoplay aria-label="A video showcasing the Kaunos Tomb of Kings in Turkey recreated in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/MA2807_KaunosTombOfKings.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unreal Engine, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            This was a project I made for university for my <strong>Virtual Production</strong> module.<br><br>
            I had to recreate a place that I'd been to using Unreal Engine, so I picked the Dalyan Tomb of Kings in Turkey.<br><br>
            All the assets qwere free from Quixel Bridge (now FAB) megascans<br><br>
            DaVinci Resolve was used to add in royalty free ambient sounds and cut the clips together.
        </div>
    `;

}

function battleland(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>BATTLELAND:</h1>
        <video controls loop autoplay aria-label="A video showcasing an supernatural war-torn, abandoned island created in Unreal Engine 5" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/vp/BATTLELAND showcase video.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unreal Engine, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            This was a smaller project I made for my university <strong>Virtual Production</strong> module.<br><br>
            The brief was to create an island<br><br>
            All the assets qwere free from Quixel Bridge (now FAB) megascans<br><br>
            Inspiration was taken from <em>One Piece</em><br><br>
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
            <img alt="An album cover of Patrick Star from SpongeBob falling through a galaxy" src="images/posts/graphics/TheQuestofPatrickStar.png">
        </div>
        <br>
        <strong>Using:</strong> <em>Clip Studio Paint, Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a secret santa project for my friend.<br><br>
            It was drawn by me using my <strong>Huion drawing tablet</strong>.<br><br>
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
            <img alt="A movie teaser poster in black and white showing a hand grabbing a red planet Earth" src="images/posts/graphics/Teaser poster fin media.jpeg">
        </div>
        <br><br>
        <strong>Using:</strong> <em>Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was for my A-Level Media Studies project.<br><br>
            All images used (apart from brand icons) had to be generated and taken by ourselves.<br><br>
        </div>
        
    `;
}

function fairlady(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Fairlady:</h1>
        <div class="centerImg">
            <img alt="A t-shirt graphic print showing a woman leaning on a nissan fairlady 350z in a garage" src="images/posts/graphics/FairladyBackGraphic.png">
        </div>
        <br>
        <strong>Using:</strong> <em>Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a t-shirt backprint design for ZocietyUK.<br><br>
            I used Photoshop/Photopea to manipulate AI generated images from <strong>Dall-E</strong> and <strong>Playground AI</strong>.<br><br>
        </div>
    `;
}

//games
function stc(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Save The City:</h1>
        <video controls loop autoplay aria-label="A sidescroller/platformer game showcase where the protagonist is jumping across a sewer themed level" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/stc.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unity, Photoshop</em><br><br>
        <div class="top-bot-borders">
            This was a personal game project.<br><br>
            I used Photoshop to create all the artwork for the game.
        </div>
    `;
}

function odileOddete(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Odile & Odette:</h1>
        <video controls loop autoplay aria-label="A rhythm game showcase inspired by Yinka Shonibare's Odile Oddete pieces" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/OdileOdette Game showcase.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>Unity, Clip Studio Paint, Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a project for my A-Level Art coursework.<br><br>
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
        <video controls loop autoplay aria-label="A game called 'QUICKDRAW' showcasing a cowboy standoff" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/QUICKDRAW SHOWCASE.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>JavaScript (p5.js), Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a game project I had to do for my university course<br><br>
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
        <video controls loop autoplay aria-label="A video showcase of a ninja running around various levels defeating floating blue monsters" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/games/UMBRELLA-WARRIOR-showcase-video.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>JavaScript (p5.js), Photoshop/Photopea</em><br><br>
        <div class="top-bot-borders">
            This was a group game project for my university course<br><br>
            <strong>My Role:</strong> Coding the player movement, combining everyones code together, designing the main character, enemy sprite and the 2nd level assets, as well as level design
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
        <video controls loop autoplay aria-label="A VFX video of myself manipulating water like in Avatar the Last Airbender" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Water bending my drink.mp4" width="800px"></video>
        <br><br>
        <strong>Using:</strong> <em>After Effects, Premiere Pro</em><br><br>
        <div class="top-bot-borders">
            This was a personal project during lockdown, where I was teaching myself After Effects and Premiere Pro<br><br>
            After Effects was used to create all of the water effects.<br><br>
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
        <video controls loop autoplay aria-label="A VFX video inspired by the anime Naruto where I play catch with my clone" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Rasengan Catch with Shadow Clone.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>After Effects, Premiere Pro</em><br><br>
        <div class="top-bot-borders">
            This was a personal project during lockdown where I was teaching myself After Effects and Premiere Pro<br><br>
            After Effects was used to create <em>the rasengan</em> effect.<br><br>
            Premiere Pro was used to create my clone, green screen the smoke and compile the sound.<br><br>
            Inspired by <em>Naruto</em>.
        </div>
    `;
}

function roomTornado(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Tornado in my room:</h1>
        <video controls loop autoplay aria-label="A VFX video of myslf creating a tornado in my room" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tornado in room.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>After Effects, DaVinci Resolve</em><br><br>
        <div class="top-bot-borders">
            This was another personal project during lockdown<br><br>
            After Effects was used to create the tornado and flame effects using particle systems.<br><br>
            DaVinci Resolve was used to mask out and compile different videos to show the tornado wind affecting the environment and sell the effect better.<br><br>
            It was also used to put together the sounds.
        </div>
    `;
}

function tenetPencil(){
    openPopUp();
    let popUp = document.getElementById("pop-up-bg").firstChild;
    
    popUp.innerHTML =  `
    <h1>Tenet Pencil:</h1>
        <video controls loop autoplay aria-label="A VFX video of a pencil moving in reverse, abstract directions like what is seen in the film Tenet" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/videos/Tenet pencil.mp4" width="800px"></video>
        <br><br><strong>Using:</strong> <em>DaVinci Resolve, Blender</em><br><br>
        <div class="top-bot-borders">
            Another personal project during lockdown<br><br>
            Blender was used to animate some of the obscure pencil movements.<br><br>
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
        <video controls loop autoplay aria-label="A code project showcase of myself going through the apps of a virtual phone I created using HTML, CSS and JavaScript" src="https://media.githubusercontent.com/media/mkt883/portfolio/main/images/posts/misc/mobileControlProject.mov" width="800px"></video>
        <br><br><strong>Using:</strong> <em>HTML, CSS, JavaScript</em><br><br>
        <div class="top-bot-borders">
            <em>Please experience this project fully <a target="_blank" href="https://mkt883.github.io/ma2013-mobile-control/">here</a>.</em>
            This was a university project where we had to investigate different <em>interfaces</em>. I chose control.<br><br>
            This was supposed to be a more artistic project, exploring how the phone controls in various ways<br><br>
            I coded this project and I created all of the visual assets (apart from the face on the phone app)<br><br>
            <strong>I achieved an upper First</strong> for this project
        </div>
    `;
}