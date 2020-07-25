//We are going to reconstruct XHR POST request boilerplate code step-by-step until we have written a complete POST request.

// 1) we need to create the XMLHttpRequest object
const xhr = new XMLHttpRequest(); //While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.

// 2) Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
const url = 'https://api-to-call.com/endpoint';

// 3) the data to be sent to a server.
const data = JSON.stringify({id: '200'}); //JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.

// 4) Set the responseType property of the xhr object to equal 'json'.
//JSON is JavaScript Object Notation, which is how the response is going to be formatted.
xhr.responseType = 'json';

// 5) Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. 
xhr.onreadystatechange = () => {

// 6) The purpose of this conditional statement checks to see if the request has finished.
    if (xhr.readyState === XMLHttpRequest.DONE) {

// 7) return the response property of xhr
        return xhr.response;  // This response will contain the data that we’re getting back from the POST request.
    } 
}

// 8) call the .open() method on the xhr object and pass it 'POST' and url as arguments.
xhr.open('POST', url); //.open() creates a new request and the arguments passed in Set the type and URL of the request.

// 9) call the .send() method on the xhr object. Do not pass it any arguments.
xhr.send(data);  //Then, the send() request is used to send the PSOT XMLHttpRequest to the specified URL.

//Nice work! You’ve written the boilerplate code for an AJAX POST request using an XMLHttpRequest object.