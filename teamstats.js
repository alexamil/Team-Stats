const team = {
  _players: [{
  firstName: 'Marin',
  lastName: 'Rajic',
  age: 34
  }, {
   firstName: 'Rima',
  lastName: 'Rajic',
  age: 1
  }, {
firstName: 'Sasha',
  lastName: 'Mileenkova',
  age: 31
  }],

  _games:[
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}, 
  {
  opponent: 'Football',
  teamPoints: 30,
  opponentPoints: 14
}, {
  opponent: 'Polo',
  teamPoints: 47,
  opponentPoints: 22
}],

get players(){
return this._players;
},

get games(){
return this._games;
},

addPlayer(firstName, lastName, age){
let player={
  firstName: firstName,
  lastName: lastName,
  age: age
};
return this._players.push(player);
},

addGame(oppName, teamPoints, oppPoints){
let game={
opponent:oppName,
  teamPoints:teamPoints,
opponentPoints:oppPoints
};
return this._games.push(game);
}

};


team.addPlayer("Steph", "Curry", "Age 28");
team.addPlayer("Bugs ", "Bunny ", "Age 76");
const players = team._players;

for(let players in team.players) {
  console.log(`${team._players[players].firstName}  ${team._players[players].lastName} ${team._players[players].age}`)
};

team.addGame('Titans', 111, 98);
team.addGame('Puki', 111, 98);
const game = team._games;
console.log(game);
/*[ { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
  { opponent: 'Football', teamPoints: 30, opponentPoints: 14 },
  { opponent: 'Polo', teamPoints: 47, opponentPoints: 22 },
  { opponent: 'Titans', teamPoints: 111, opponentPoints: 98 },
  { opponent: 'Puki', teamPoints: 111, opponentPoints: 98 } ]*/

