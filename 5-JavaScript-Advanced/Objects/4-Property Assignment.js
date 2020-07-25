let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
//Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = 'glorious gold';

//add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines =5;

//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];