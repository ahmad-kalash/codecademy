const shopForBeans = require('./library.js');

function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// the output is 
/* 
$ node app.js 
1. Heading to the store to buy beans...
3. Great! I'm making [object Promise] beans for dinner tonight!
2. I bought garbanzo beans because they were on sale.
*/

//Uh oh, getBeans() is logging '3. Great! I'm making [object Promise] beans for dinner tonight!' to the console. Take a moment to understand why this is happening, and then refactor getBeans() so it works as intended. Check your work when you’re ready to move on to the next step.

async function newGetBeans() { // we added async keyword
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();  //we added await keyword
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
newGetBeans();

//the output is:
/* 
$ node app.js 
1. Heading to the store to buy beans...
2. I bought garbanzo beans because they were on sale.
3. Great! I'm making garbanzo beans for dinner tonight!
*/