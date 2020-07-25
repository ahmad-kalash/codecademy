const {checkInventory} = require('./library.js');  //checkInventory() takes in an array representing an order and returns a promise.

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

// /Write a function, handleSuccess(). You’ll use this function later on as your success handler.
const handleSuccess = (resolvedValue) => {
    //you can add actions here to decrease the stock in the store by the number of the perchased items and ,ake a invoice....
  console.log(resolvedValue);
}

//Write a function, handleFailure(). You’ll use this function later on as your failure handler.

const handleFailure = (rejectionReason) => {
    //you can add action here to give the customer other options for buy or option to remove the missing itema and resume the chickout process.
  console.log(rejectionReason);
}

//let orderPromise = checkInventory(order);
//orderPromise.then(handleSuccess, handleFailure);

checkInventory(order).then(handleSuccess, handleFailure);