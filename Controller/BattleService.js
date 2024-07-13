const CalculateDamage = require('../utils/calculateDamage')

class BattleService{

    constructor(){
        this.calculateDamage = new CalculateDamage();
    }

    fight(playerA, playerB){
        let first=playerA;
        let second=playerB;
        console.log(`${first.name}`)

        while(!first.isAlive()  && !second.isAlive()){
            const curr_pos=first.pos;
            const turn = this.calculateDamage.calculate(first);
            console.log(`${turn.name} goes from ${curr_pos} to  ${turn.pos}`);
            
            
            [first,second]=[second,first];
        }
        return first.isAlive() ? first : second;
    }
}

module.exports = BattleService;