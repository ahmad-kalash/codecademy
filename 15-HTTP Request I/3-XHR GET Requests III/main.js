//in this exercize we make a GET request to the Datamuse API to find words that rhyme. 

// Information to reach API
const url = 'https://api.datamuse.com/words?'; //we'll be using this URL to direct our api request.
const queryParams = 'rel_rhy='; //'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme. check Datamuse API Documentation



// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value ; //grabs what is in the inputField and assigns it to the variable wordQuery
const endpoint = url + queryParams + wordQuery; //endpoint will store the value of the entire URL and query string.

const xhr = new XMLHttpRequest(); // create the XMLHttpRequest object
xhr.responseType = 'json'; //When data is sent back, it will be in JSON format.

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {  
      //renderRawResponse(xhr.response);  // The renderRawResponse() helper function can be viewed at public/helperFunctions.js. (it will will display the raw response from the API! in the responseField on the webpage)
      renderResponse(xhr.response);
  } 
}
xhr.open('GET', endpoint); //'GET' sets the method and url sets the destination.
xhr.send();

}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


