// We are going to walk through and recreate the boilerplate code necessary to create a GET request using the async and await.


// 1) The async keyword will ensure that the function returns a promise.
// 2) Add try/catch statment The code in the try block will send a request and handle the response. The catch statement will then take care of an error if it is thrown.
// 3) Inside the catch code block, log error to the console.
// Since this exercise is an example, we’re using console.log() to view the error. Generally, developers create a more sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment.
// 4) using the await keyword before calling fetch(), We’ll have to save the returned promise in a variable called response
// 5) Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.
// 6) await the resolution of calling the .json() method on response. Save the returned object to a variable called jsonResponse
// 7) Return jsonResponse directly below the code you wrote in the previous step.
// Normally, we’d want to use the information from jsonResponse in a different manner. In this exercise, we’re practicing how to write the boilerplate code.
// 8) Below the conditional statement, throw a new Error


const getData = async () => {  // (1)
    try{  // (2)
        const response = await fetch('https://api-to-call.com/endpoint');  // (4)
        if (response.ok){   // (5)
            const jsonResponse = await response.json();   // (6)
            return jsonResponse;  // (7)
        }
        throw new Error('Request failed!');  // (8)        
    }catch(error){  // (3)
        console.log(error);
    }

}