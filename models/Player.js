class Player {

    constructor(name,pos){
        this.name=name;
        this.pos=pos;
    }

    isAlive(){
        return this.pos > 100;
    }
}

module.exports = Player;