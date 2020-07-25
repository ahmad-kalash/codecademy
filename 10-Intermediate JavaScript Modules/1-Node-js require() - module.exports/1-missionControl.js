//In 1-missionControl.js use the require() function to import the Airplane module from 1-airplane.js.

const Airplane = require('./1-airplane.js');

//In 1-missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console.
function displayAirplane() {
  console.log(Airplane.myAirplane);
}

// /Call the displayAirplane() function. In the console, you should see the name of the airplane you defined in the module.
displayAirplane();