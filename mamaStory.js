
// weapons

class BaseWeapon{
    demage;
    type;
    constructor(demage , type){
        this.demage = demage;
        this.type = type
    }

    Attack(){
        return "Hit";
    }
}




class Wand extends BaseWeapon{
    
    constructor(demage){
        super(demage,"Wand")
    }

    Attack(){
        return "Fshhhh";
    }
}

class TwoHandedSword extends BaseWeapon{
   
    constructor(demage){
        super(demage,"TwoHandedSword")
    }

    Attack(){
        return "Swinggg";
    }
}

class TwoHandedAxe extends BaseWeapon{
   
    constructor(demage){
        super(demage,"TwoHandedAxe")
    }

    Attack(){
        return "Achtshhhh";
    }
}
class TwoHandedBluntWeapon extends BaseWeapon{
    
    constructor(demage){
        super(demage,"TwoHandedBluntWeapon")
    }

    Attack(){
        return "Boomm";
    }
}

class Bow extends BaseWeapon{
    
    constructor(demage){
        super(demage,"Bow")
    }

    Attack(){
        return "Shboinggg";
    }
}


class Player{
    baseWeapon;
    gender;
    name;
    constructor(baseWeapon,gender,name){
        this.name = name;
        this.baseWeapon = baseWeapon;
        this.gender = gender;
    }

    Attack(){
        return "Name " + this.name + " Attacked with " + this.baseWeapon.demage + " Demage! " + this.baseWeapon.Attack();
    }
}


class Fighter extends Player{

    constructor(baseWeapon,gender,name){
        super(baseWeapon,gender,name)
    }
    Attack(){
        return "The Fighter " + super.Attack();
    }
}

class Magican extends Player{
    constructor(baseWeapon,gender,name){
        super(baseWeapon,gender,name)
    }
    Attack(){
        return "The Magican " + super.Attack();
    }
}

class Rainbow extends Player{
    constructor(baseWeapon,gender,name){
        super(baseWeapon,gender,name)
    }
    Attack(){
        return "The Rainbow " + super.Attack();
    }
}

playerList = []

function addPlayer(player){
    playerList.push(player)
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
        renderPlayers();
        if (player == null){
            throw "player type is not found : " + playerType
        }
        console.log(playerList)
        
}

function playerFactory(playerType ,weapon, name ,gender){
    switch(playerType){
        case "Fighter":
            console.log("1")
            return new Fighter(weapon,gender,name);
        case "Magican":
            console.log("2")
            return new Magican(weapon,gender,name);
        case "Rainbow":
            console.log("3")
            return new Rainbow(weapon,gender,name);
        default:
            return null;
    }
}

function weaponFactory(weapnType){
    switch(weapnType){
        case "Wand":
            return new Wand(30);
        case "TwoHandedSword":
            return new TwoHandedSword(30);
        case "TwoHandedAxe":
            return new TwoHandedAxe(30);
        case "TwoHandedBluntWeapon":
            return new TwoHandedBluntWeapon(30);
        case "Bow":
            return new Bow(30);
        default:
            return null;
    }
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

   var htmlDiv = ""
    htmlDiv += "<div class='col-md-4  text-center w-200'>"
    htmlDiv += "<div class='card h-100'>"
    htmlDiv += "<div class='card-body'>"
    htmlDiv += "<h1> name : "+player.name+"</h1>"
    htmlDiv += "<h1> gender : "+player.gender+"</h1>"
    htmlDiv +=`<input type="button" value="create player" onClick="playerAttack('${player.Attack()}')" />`
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    return htmlDiv;
}


function playerAttack(str){
    alert(str)
}