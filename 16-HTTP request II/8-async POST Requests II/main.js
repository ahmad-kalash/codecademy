// Now we’re going to piece together a POST request using async and await.

// (1) create an async arrow function and save it to a const getData().
// (2) Add the try code block, add a catch statement and pass in error as an argument. Then, in the catch statement code block, log error to the console.
// (3) Since we are making a POST request, we should start by using the await keyword before calling the fetch() function. We will have to save the returned promise in a variable called response 
// (4) pass in the  URL to the function as a string for the first argument
// (5) Let’s now fill in the request options in our second argument.
// (6) create an if statement that checks the ok property of the response object.
// (7) await the resolution of calling the .json() method on response. Save the returned object to a variable called jsonResponse
// (8) Return jsonResponse. we’re practicing writing code. Normally, we would want to do more beyond this step of returning jsonResponse.
// (9) Below the if conditional, throw a new Error() with the message 'Request failed!'

const getData = async () => {                                                       // (1)
    try{                                                                            // (2)
        const response = await fetch(                                               // (3)
            'https://api-to-call.com/endpoint',                                     // (4)
            {                                                                       
                method: 'POST',                                                     // (5)
                body: JSON.stringify({id: 200})
            }   
        );

        if (response.ok){                                                           // (6)
            const jsonResponse = await response.json();                             // (7)
            return jsonResponse;                                                    // (8)
        }                                   

        throw new Error('Request failed!');
        


    }catch(error) {
        console.log(error);
    
    }


}