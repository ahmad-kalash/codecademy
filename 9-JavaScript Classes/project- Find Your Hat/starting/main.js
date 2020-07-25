const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this._field = field;
        this._horiLocation = 0;
        this._virtLocation = 0;
    }
    get field(){
        return this._field;
    }
    get horiLocation(){
        return this._horiLocation;
    }
    get virtLocation(){
        return this._virtLocation;
    }

    set horiLocation(horizental){
        this._horiLocation = horizental;
    }
    set virtLocation(vertical){
        this._virtLocation = vertical;
    }
    
    static generateField(height, width, percentage){
        const newArray = [];

        for(let x=0; x< height; x++){
            let rowArray = [];
            for(let y=0; y<width; y++)
            {
                
                rowArray.push(fieldCharacter);
            }
            newArray.push(rowArray);
        }

        do{
        newArray[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = hat;
        } while (newArray[0][0] === hat)

       
        let noHoles = Math.floor((height*width)*(percentage/100));
        for (let n=0; n < noHoles ; n++){
            newArray[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = hole;
        }
        return newArray;
    }

    print(){
      for (let i=0; i< this.field.length ; i++)
        console.log(this.field[i].join(''));
      }

    //Methods to test whether the current location results in win (user is on the hat) or a loss (user is on a hole or out-of-bounds).

    score() {
        if (this.horiLocation <0 || this.virtLocation<0)
        {           
            console.log('you lost out of scope.');
            return false; 
        }

        const currValue= this.field[this.virtLocation][this.horiLocation];
        if (currValue === hat)
        {
            console.log('you found your hat.');
            return true;
        }
        else if (currValue=== hole || currValue === undefined) {
            console.log('you lost falling in a hole or out of scope.');
            return false;
        }else {
            this.field[this.virtLocation][this.horiLocation]= pathCharacter;
            return undefined
        }
    }

    //A method to handle asking and accepting user input, and updating the current location.
    location(){
        let input = prompt('Which Way?: ');
        
        if (input === 'u')
        {
            this.virtLocation--;
        }else if (input === 'd')
        {
            this.virtLocation++; 
        }else if (input === 'l')
        {
            this.horiLocation--; 
        }else if (input === 'r')
        {
            this.horiLocation++; 
        }


    }

    //A method to run the main game loop until the game is won or lost.

    
  }

  
  function play(){
  /*  const myField = new Field([
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
      ]);
    */
   const myArray = Field.generateField(14,10,25);
   const myField = new Field(myArray)  
      while ( myField.score() === undefined){
        myField.print();
        myField.location();
    
    }

}

play();



  