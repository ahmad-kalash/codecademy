//In missionControl.js we’ll use the module Airplane to display the fuel capacity of both our airplanes.

import Airplane from "./1-airplane";

//Within the displayFuelCapacity function, use console.log() to output the element’s name and its fuel capacity. The output should look like this:
function displayFuelCapacity(){
 Airplane.availableAirplanes.forEach(function(element){
   console.log(`Fuel Capacity of ${element.name} :  ${element.fuelCapacity}`)
 });
};


displayFuelCapacity();