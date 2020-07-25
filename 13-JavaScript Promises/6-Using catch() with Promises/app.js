const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
 //Remember, this function checkInventory(order), will return a promise. (first promise)

//.then() will return a promise (secound promise) with the same settled value as the promise (first promise) it was called on.

//The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

checkInventory(order).then(handleSuccess).catch(handleFailure);