const {DEFAULT_DICE_SIDE} = require('../constants')

class Dice {
    
    constructor(side = DEFAULT_DICE_SIDE){
        this.side = side;
    }

    roll(){
        return Math.floor(Math.random() * this.side) +1;
    }
}

module.exports = Dice;