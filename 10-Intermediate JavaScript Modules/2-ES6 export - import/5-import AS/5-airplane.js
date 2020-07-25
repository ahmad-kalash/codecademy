//Export as
//Named exports also conveniently offer a way to change the name of variables when we export 
//or import them. We can do this with the as keyword.

let availableAirplanes = [
    {name: 'AeroJet',
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
    
    let flightRequirements = {
      requiredStaff: 4,
      requiredSpeedRange: 700
    };
    
    function meetsStaffRequirements(availableStaff, requiredStaff) {
      if (availableStaff.length >= requiredStaff) {
        return true;
      } else {
        return false;
      }
    };
    
    function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
      let range = maxSpeed - minSpeed;
      if (range > requiredSpeedRange) {
        return true;
        } else {
        return false;
      }
    };
    

    //Export as
    export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };