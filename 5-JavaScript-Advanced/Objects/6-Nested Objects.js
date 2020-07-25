let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
  
  //Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
  const capFave = spaceship.crew.captain['favorite foods'][0];
  
  
  //Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
  spaceship.passengers = [{
      name: 'ahmad',
      age: 40
    }
    ,{
      name: 'joud',
      age: 12
    }];
  
  let firstPassenger = spaceship.passengers[0];
  console.log(firstPassenger.name);
  