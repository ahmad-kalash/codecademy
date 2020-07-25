const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};


////checkInventory() takes in an array representing an order and returns a promise.
//If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
//Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};




// check below an more explained code to understand the aboce code 
/*
const myExecutor = (resolve, reject) => {
    setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
};

const checkInventory =(order) =>{return new Promise(myExecutor)};
*/

module.exports = { checkInventory };