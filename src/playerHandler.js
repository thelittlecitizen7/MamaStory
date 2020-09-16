playerList = []


if (localStorage.getItem("playerList") == undefined){
    console.log("hey1")
    localStorage.setItem("playerList",JSON.stringify([]))
     //localStorage.setItem("playerList",[])
}
else{
    console.log(playerList)
    playerList = JSON.parse(localStorage.getItem("playerList"))
    console.log(playerList)
}




function addPlayer(player){
    playerList.push(player)
    localStorage.setItem("playerList",JSON.stringify(playerList))
    // localStorage.setItem("playerList",playerList)
}

function createPlayer(){
        var name = document.getElementById("name");
        var genderSelect = document.getElementById("gender");
        var weaponTypeSelect = document.getElementById("weaponType");
        var playerTypeSelect = document.getElementById("playerType");

        var genderType = genderSelect.options[genderSelect.selectedIndex].value;
        var weaponType = weaponTypeSelect.options[weaponTypeSelect.selectedIndex].value;
        var playerType = playerTypeSelect.options[playerTypeSelect.selectedIndex].value;


        var player = playerFactory(playerType,weaponFactory(weaponType),name.value,genderType);
        addPlayer(player);
        console.log(playerList)
        //renderPlayers();
        if (player == null){
            throw "player type is not found : " + playerType
        }
        console.log(playerList)
}

