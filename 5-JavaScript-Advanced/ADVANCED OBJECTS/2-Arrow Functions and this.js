const robot = {
    energyLevel: 100,
    //checkEnergy: () => {
    //  console.log(`Energy is currently at ${this.energyLevel}%.`)
   // }
   checkEnergy() {
     console.log(`Energy is currently at ${this.energyLevel}%.`)
   }
  
  }
  
  robot.checkEnergy();
  
  //the old  .checkEnergy() method is not producing the correct output because it is using arrow function syntax.
  
  /*
  New .checkEnergy method use a function expression. 
  notice now that .checkEnergy() has access to the other internal properties of the robot object.
  */
  
  
  