playerList = []

window.onload = () => {
    if (localStorage.getItem("playerList") == undefined){   
        localStorage.setItem("playerList",JSON.stringify([]))
    }
    else{
        playerList = JSON.parse(localStorage.getItem("playerList"))
    }
    renderPlayers();
}

function renderPlayers(){
    var htmlDiv = "<div class='row justify-content-center'>";
    var playersContainers = document.getElementById("allPlayers");
    playerList.forEach((player) => {
        htmlDiv += getPlayerHtml(player)
    });
    htmlDiv += "</div>"
    playersContainers.innerHTML = htmlDiv;
}

function getPlayerHtml(player){
    var newplayer = playerFactory(player.type,weaponFactory(player.baseWeapon.type),player.name,player.gender);
    var htmlDiv = ""
    htmlDiv += "<div class='col-md-3  text-center w-200'>"
    htmlDiv += "<div class='card h-100'>"
    htmlDiv += "<div class='card-body'>"
    htmlDiv += "<h1> name : "+newplayer.name+"</h1>"
    htmlDiv += "<h1> gender : "+newplayer.gender+"</h1>"
    htmlDiv += "<h1> type : "+newplayer.type+"</h1>"
    htmlDiv +=`<input type="button" value="create player" onClick="playerAttack('${newplayer.Attack()}')" />`
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    return htmlDiv;
}


function playerAttack(str){
    alert(str)
}