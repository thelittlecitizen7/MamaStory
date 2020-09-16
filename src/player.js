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
    type;
    constructor(baseWeapon,gender,name){
        
        super(baseWeapon,gender,name)
        this.type = "Fighter"
    }
    Attack = () => {
        return `The ${this.type} ` + super.Attack();
    }
}

class Magican extends Player{
    type;
    constructor(baseWeapon,gender,name){
        
        super(baseWeapon,gender,name)
        this.type = "Magican"
    }
    Attack = () => {        return `The ${this.type} ` + super.Attack();
    }
}

class Rainbow extends Player{
    type;
    constructor(baseWeapon,gender,name){
        
        super(baseWeapon,gender,name)
        this.type = "Rainbow"
    }
    Attack = () => {
        return `The ${this.type} ` + super.Attack();
    }
}
