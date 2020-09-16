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



