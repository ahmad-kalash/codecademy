//ES6 introduced a second common approach to export modules. In addition to export default, named exports allow us to export data through the use of variables.

// /In airplane.js, let’s again create an Airplane module from scratch, this time exporting the module with export default. Create an object to represent the module called Airplane.
let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
    },
    {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
    }
    ];

  let flightRequirements = {
    requiredStaff: 4
  };

  function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff){return true;}
    else {return false;}
  };

//Using the export keyword, export the variables availableAirplanes, flightRequirements and meetsStaffRequirements.

export {availableAirplanes, flightRequirements, meetsStaffRequirements};



