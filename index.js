const BattleService = require('./Controller/BattleService')
const Player = require('./models/Player')


const players = [
    new Player('PlayerA',0),
    new Player('PlayerB',0),
    new Player('PlayerC',0),
    new Player('PlayerD',0),

]

const battleservice = new BattleService();
let ultimateWinner=players[0];

for(let i=1;i<players.length;i++){
    const current_result = battleservice.fight(players[i],ultimateWinner);
    if(current_result!=ultimateWinner){
        ultimateWinner=current_result;
    }
    
    ultimateWinner.pos=0;
}



console.log(`Winner- : ${ultimateWinner.name}`);