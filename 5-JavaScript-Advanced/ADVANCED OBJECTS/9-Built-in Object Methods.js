const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys

const robotKeys = Object.keys(robot);

console.log(robotKeys);

//Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);

//Now what if we want another object that has the properties of robot but with a few additional properties.
//Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

// Declare newRobot below this line:
const newRobot = Object.assign( {laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
console.log(robot);