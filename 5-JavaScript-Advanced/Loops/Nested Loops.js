// Write your code below

const bobsFollowers = ['ahmad', 'joud', 'nour', 'mais'];

const tinasFollowers = ['joud', 'nour', 'mahmoud'];

let mutualFollowers = [];

 for (let i=0; i < bobsFollowers.length ; i++)
 {
   for (let x=0; x < tinasFollowers.length ; x++)
   {
     if (bobsFollowers[i]===tinasFollowers[x])
      {
        mutualFollowers.push(tinasFollowers[x]);
      }
   }
 }