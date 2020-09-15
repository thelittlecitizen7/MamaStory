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
        return "Name" + name + " Attacked with " + this.baseWeapon.demage + " Demage! " + this.baseWeapon.Attack();
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


        var player = playerFactory(playerType,weaponFactory(weaponType),name,genderType);
        addPlayer(player);
        if (player == null){
            throw "player type is not found : " + playerType
        }
        console.log(playerList)
        
}

function playerFactory(playerType ,weapon, name ,gender){
    switch(playerType){
        case "Fighter":
            return new Fighter(weapon,gender,name);
        case "Magican":
            return new Magican(weapon,gender,name);
        case "Rainbow":
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

}