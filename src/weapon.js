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
