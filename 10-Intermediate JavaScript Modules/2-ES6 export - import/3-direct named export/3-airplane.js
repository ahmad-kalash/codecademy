// /Named exports are also distinct in that they can be exported as soon as they are declared, 
//by placing the keyword export in front of variable declarations.


//To import variables that are declared, we simply use the original syntax that describes the variable name. 
//In other words, exporting upon declaration does not have an impact on how we import the variables.

export let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
      maxSpeed: 1200,
      minSpeed: 300
    },
    {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
    }
    ];

  export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };

 export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff){return true;}
    else {return false;}
  };


export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
let range = maxSpeed - minSpeed;
if (range > requiredSpeedRange){
  return true;
}else {return false;}
};





