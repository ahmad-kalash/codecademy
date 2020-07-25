const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:

//Fill in the body of the announceDinner() function so that it has the same functionality as nativePromiseDinner(). It should wait for the promise returned from brainstormDinner() to resolve, and then log a string to the console in the same format as did nativePromiseDinner(). You’ll need to use the await operator inside your function.
async function announceDinner() {
  // Write your code below:
  const meal = await brainstormDinner();   //the await keyword halts the execution of an async function until a promise is no longer pending. 
  console.log(`I'm going to make ${meal} for dinner.`);
  
}

announceDinner();
