const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:

//you’ll create an async function that handles the three dependent promises we just have in library. It will simulate shopping for, soaking, and then cooking the beans. To get started, declare an async function, makeBeans()

async function makeBeans() {  //The true beauty of async...await is when we have a series of asynchronous actions which depend on one another.
    const type = await shopForBeans();
    const isSoft = await soakTheBeans(type);  
    const dinner = await cookTheBeans(isSoft);  //The async...await syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax.
    console.log(dinner);
 }
 
 //async VS .then() chain
 //With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:
 
 makeBeans();

 //the output 
/*
$ node app.js 
I bought fava beans because they were on sale.
Time to soak the beans.
... The fava beans are softened.
Time to cook the beans.
... The beans are cooked!


Dinner is served!
$ 
*/
