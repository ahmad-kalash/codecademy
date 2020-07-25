let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinner(){
    const vegetablePromise = steamBroccoli(); //1) without await keyword operations can be run simultaneously
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();

    //2) We then await each of their resolutions to print them to the console.
    const v1 = await vegetablePromise;
    const v2 = await starchPromise;
    console.log('Dinner is served. We’re having ' + v1 + ', ' + v2 + ', ' +  //One option is to create a second set of variables with assigned values of await-ing the promise variables you made in the last checkpoint and then using string concatenation or string interpolation with those values. 
    `${await proteinPromise}, and ${await sidePromise}`); //Another is to use the await operator directly inside your string construction:

}

serveDinner();

async function serveDinnerAgain() {
    const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    console.log(`Dinner is served. We’re having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}`) ;
};
serveDinnerAgain();