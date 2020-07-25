//We are going to reconstruct the boilerplate code necessary to create a GET request using the fetch() function step-by-step.

// 1) call the fetch() function and pass it this URL as a string
fetch('https://api-to-call.com/endpoint')

// 2) Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument.
.then(response =>{
// 3) check the ok property of response
  if (response.ok){return response.json();} //If there were no errors response.ok will be true and then your code will return response.json().

// 4) create a new error
  throw new Error('Request failed!'); //Your code will throw this error when response.ok is falsy.
}

// 5) Add a second argument to .then(), it will be an arrow function that will handle our failures.
, networkError => {console.log(networkError.message)}) //If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError

//end of first .then()

// 6) Chain another .then() method to the end of the first .then() method.
.then(jsonResponse=> jsonResponse) //The second .then()‘s success callback won’t run until the previous .then() method has finished running. It will also not run if there was an error was thrown previously.




//Your complete code will look like:

fetch('https://api-to-call.com/endpoint').then(response => {
  // Code to handle a successful response
}, networkError => {
  // Code to handle a network error
}).then(jsonResponse => {
  // code to execute with jsonResponse;
})
