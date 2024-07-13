const Dice = require('../models/Dice');

class CalculateDamage{

    constructor(){
        this.newDice = new Dice();
        this.map = new Map();

        this.map.set(1, 38);
        this.map.set(4, 14);
        this.map.set(8, 10);
        this.map.set(21, 42);
        this.map.set(28, 76);
        this.map.set(32, 9);
        this.map.set(36, 6);
        this.map.set(44, 26);
        this.map.set(50, 67);
        this.map.set(62, 18);
        this.map.set(71, 92);
        this.map.set(80, 99);
        this.map.set(95, 56);
        this.map.set(97, 78);
       
    }

    

    calculate(Player){
        const diceRoll = this.newDice.roll();
        const new_pos = diceRoll + Player.pos;
        console.log(diceRoll);

        if (this.map.has(new_pos)) { 
            Player.pos = this.map.get(new_pos);
        } else {
            Player.pos = new_pos;
        }

        return Player;
    }
}

module.exports = CalculateDamage;