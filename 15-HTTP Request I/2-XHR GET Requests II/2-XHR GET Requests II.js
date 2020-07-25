//We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request.

// 1) we need to create the XMLHttpRequest object
const xhr = new XMLHttpRequest(); //While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.

// 2) Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
const url = 'https://api-to-call.com/endpoint';

// 3) Set the responseType property of the xhr object to equal 'json'.
//JSON is JavaScript Object Notation, which is how the response is going to be formatted.
xhr.responseType = 'json';

// 4) Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty.
xhr.onreadystatechange = () => {

// 5) The purpose of this conditional statement checks to see if the request has finished.
    if (xhr.readyState === XMLHttpRequest.DONE) {

// 6) return the response property of xhr
        return xhr.response;  // This response will contain the data that we’re getting back from the request.
    } 
}

// 7) call the .open() method on the xhr object and pass it 'GET' and url as arguments.
xhr.open('GET', url); //.open() creates a new request and the arguments passed in Set the type and URL of the request.

// 8) call the .send() method on the xhr object. Do not pass it any arguments.
xhr.send();  //Then, the send() request is used to send the XMLHttpRequest to the specified URL.

//Nice work! You’ve written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.