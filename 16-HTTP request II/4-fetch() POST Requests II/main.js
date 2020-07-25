// //We are going to reconstruct the boilerplate code necessary to create a POST request using the fetch() function step-by-step. 

// 1)
fetch('https://api-to-call.com/endpoint', 
{ //This second argument determines that this request is a POST request and what information will be sent to the API.
  method: 'POST',
  body: JSON.stringify({id: '200'})
}
).then(
  response => {  //pass the success callback function as its first parameter.
    if (response.ok){
      return response.json();  //When returned, this information will be passed on to the next .then() callback function.
    }
    throw new Error('Request failed!');  //This error will be raised if we get back some status error.
  } 
//   , networkError => console.log(networkError.message)  /Create the failure callback function. This function takes a single parameter, networkError. Separate the first callback function from the second with a comma. 

).then ( //Chain another .then() method to the end of the first .then() method.
  jsonResponse => {  //The purpose of this step is to view the JSON that was returned from the previous .then().

  }
)