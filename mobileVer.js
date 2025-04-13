function displaySideBar(){
    let sideBar = document.getElementById("side-bar");
    sideBar.style.display = "block"
    sideBar.style.position = "fixed"

    let exitButton = document.createElement("p");
    exitButton.innerHTML = "×";
    exitButton.setAttribute("onclick", "hideSideBar()");
    exitButton.setAttribute("id", "exitButton");
    exitButton.style.color = "#111"
    exitButton.style.fontSize = "50px"
    exitButton.style.marginTop = "0"

    sideBar.prepend(exitButton)
}  

function hideSideBar(){
    let sideBar = document.getElementById("side-bar");
    sideBar.style.display = "none"
    let exitButton = document.getElementById("exitButton")
    sideBar.removeChild(exitButton)
}

function addFilterOptions(){
    let filterPanel = document.createElement("div");
    filterPanel.setAttribute("id", "filter-sidebar");
    document.body.prepend(filterPanel);

    let inDocFilterPanel = document.getElementById("filter-sidebar")

    let exitButton = document.createElement("p");
    exitButton.innerHTML = "×";
    exitButton.setAttribute("onclick", "hideSideBar2()");
    exitButton.setAttribute("id", "exitButton");
    exitButton.style.color = "#111"
    exitButton.style.fontSize = "50px"
    exitButton.style.marginTop = "0"
    exitButton.style.paddingLeft = "30px"

    inDocFilterPanel.prepend(exitButton);

    let addLinks = document.createElement("div");
    addLinks.setAttribute("id", "mobileFilterDivs");
    addLinks.innerHTML = `
        <a onclick="allContent()">All</a><br><br>
        <a onclick="vpContent()">Virtual Production</a><br><br>
        <a onclick="gdContent()">Graphic Design</a><br><br>
        <a onclick="gamContent()">Games</a><br><br>
        <a onclick="vidContent()">Video</a><br><br>
        <a onclick="miscContent()">Misc.</a>
    `
    inDocFilterPanel.append(addLinks);


}

function hideSideBar2(){
    let sideBar = document.getElementById("filter-sidebar");
    // sideBar.style.display = "none"
    // let exitButton = document.getElementById("exitButton")
    document.body.removeChild(sideBar)
}

/*

height: 100%; 
width: 160px; 
position: fixed; 
z-index: 1; 
top: 0; 
right: 0;
background-color: #fff; 
border-left: solid 1px #11111120;
overflow-x: hidden; 
padding-top: 2rem;
filter: drop-shadow(100px 10px 40px rgba(0, 0, 0, 0.082));


height: 100%; 
width: 160px; 
position: fixed; 
z-index: 1; 
top: 0; 
right: 0;
background-color: #fff; 
border-left: solid 1px #11111120;
overflow-x: hidden; 
padding-top: 20px;


#side-bar{
    display: none;
    width: 340px;
    overflow-y: hidden;                
    flex-direction: column;
    padding-left: 4rem;

}

*/ 
