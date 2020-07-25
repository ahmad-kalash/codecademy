// Our business is doing so well that we’re running low on inventory. 
// We want to reach out to some distributors to see if they have the items we need. 
// We only want to make one restocking order, so we’ll only want to place the order if all of 
// the items are available.

const {checkAvailability} = require('./library.js');

//success handlers.
const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

//and failure handlers.
const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

const promiseArray = [checkSunglasses, checkPants, checkBags]

Promise.all(promiseArray).then(onFulfill).catch(onReject);