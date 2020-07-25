//We’re going to create a promise representing ordering sunglasses from an online store. 

const inventory = {
    sunglasses: 190,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:

  //1) create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) 
        {
            resolve ('Sunglasses order processed.');
        }else{
            reject('That item is sold out.');
        }
    }; 
  
// 2) Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.
 const orderSunglasses =() =>{return new Promise(myExecutor)};
 
// 3) Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.
 let orderPromise = orderSunglasses();

// 4)  log orderPromise to the console.
 console.log(orderPromise);