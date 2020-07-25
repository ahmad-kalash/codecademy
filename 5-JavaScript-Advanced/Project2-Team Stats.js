/*
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players:[
    {firstName: 'Pablo', lastName: 'Sanchez', age:25}, 
    {firstName: 'Neymar', lastName: 'Junior', age:28},
    {firstName: 'Lionel', lastName: 'Messi', age:32}
  ],
  _games:[
    {opponent: 'Broncos', teamPoints: 44,opponentPoints: 27},
    {opponent: 'Melan', teamPoints: 52,opponentPoints: 17},
    {opponent: 'Barcalona', teamPoints: 32,opponentPoints: 25}
  ],

get players() {
  return this._players ;
},

get games(){
  return this._games;
},

addPlayer (firstName, lastName, age) {
  let player = {
    firstName: firstName,
      lastName: lastName,
      age: age
  };
  this._players.push(player);
},

addGame (opponent, teamPoints, opponentPoints) {
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  this._games.push(game);
}
}

team.addPlayer ('Steph', 'Curry', 28);
team.addPlayer ('Lisa', 'Leslie', 44);
team.addPlayer ('Bugs', 'Bunny', 76)

console.log (team.players);

team.addGame('photball', 54, 12);
team.addGame('dsfsdf', 34, 32);
team.addGame('phosdfsdhgtball', 29, 72);

console.log (team.games);

