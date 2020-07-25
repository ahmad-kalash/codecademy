// /In airplane.js, let’s again create an Airplane module from scratch, this time exporting the module with export default. Create an object to represent the module called Airplane.

const Airplane = {};
  Airplane.availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800
    },
    {name: 'SkyJet',
    fuelCapacity: 500
    }
    ];

  //Use export default to export the Airplane module.
export default Airplane;
