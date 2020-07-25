//a function capAllElements() takes an array of elements and capitalizes each element.

function capAllElements(arr){
    try{
      arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  }catch(e){
  console.log(e); //if the code inside the try block throw any error, it will be logged to the console
  }
  }
capAllElements('Incorrect argument'); //the argument isn’t an array, an error is thrown and our program stops running in-case we don't have try....catch.