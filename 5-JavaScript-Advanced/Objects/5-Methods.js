let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

//create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.

//Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.

const alienShip = {
retreat () { 
     console.log(retreatMessage)
    } ,
takeOff () {
    console.log("Spim... Borp... Glix... Blastoff!")
    }
};

//Invoke your two methods
alienShip.retreat();
alienShip.takeOff();
