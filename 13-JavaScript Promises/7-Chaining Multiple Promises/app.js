const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


checkInventory(order)
.then((resolvedValueArray) => {  //The success handler should return a processPayment() promise.
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => { //The success handler should return a shipOrder() promise.
  // Write the correct return statement here:
 return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


//the code below work fine without error, but it is not best practice, it have a mistake (forgetting to return properly.)

/*
checkInventory(order)
.then(processPayment)
.then(shipOrder)
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
*/