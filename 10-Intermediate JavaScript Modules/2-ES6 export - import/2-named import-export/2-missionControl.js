//In missionControl.js we’ll use the module Airplane to display the fuel capacity of both our airplanes.

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './2-airplane';

function displayFuelCapacity(){
 availableAirplanes.forEach(function(element){
   console.log(`Fuel Capacity of ${element.name} :  ${element.fuelCapacity}`)
 });
};

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));

  });
}

displayFuelCapacity();
displayStaffStatus();