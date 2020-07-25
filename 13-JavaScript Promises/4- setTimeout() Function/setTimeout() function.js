/* setTimeout() is a Node API (a comparable API is provided by web browsers) that uses 
callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: 
a callback function and a delay in milliseconds. */

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO =() => {
  console.log('this is anything i want');
}

setTimeout(usingSTO, 1000); 
/* the output on the console will be like below 
This is the first line of code in app.js.
This is the last line of code in app.js.
this is anything i want                    //this will delayed 1 secound before be loged to console.
*/


// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
