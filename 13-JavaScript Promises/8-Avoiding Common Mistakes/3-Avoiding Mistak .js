const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};


checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });

//The code above works correctly, but it doesn’t follow best practices.
// Refactor Below, or rewrite, the code to avoid the two common mistakes: 
// (1)nesting and (2)forgetting to return properly.

checkInventory(order)
.then((resolvedValueArray) => {
    return processPayment(resolvedValueArray);})
.then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray);})
.then((successMessage) => {
    console.log(successMessage);
                    });
 

