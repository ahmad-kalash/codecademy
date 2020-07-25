// In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser.
// Datamuse API.
// If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field.


// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';  //queryParams will be the start of your query string and will narrow your search to words that sounds like your word.


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value; //You’ll need wordQuery to store the value of what is being typed into the input field.
const endpoint = `${url}${queryParams}${wordQuery}`; //assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

fetch(endpoint,{cache: 'no-cache'}) // For this API to work within the provided browser, add {cache: 'no-cache'} as the second argument.

.then (response => {
  if (response.ok){return response.json();} //By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.
  throw new Error ('Request failed!');
}, networkError => console.log(networkError.message))

//until now you called the fetch() function and passed it the query URL and a settings object. Then, you chained a .then() method and passed it two functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

//you’ll now take the information that was returned with the promise and manipulate the webpage!
.then(jsonResponse => {
  //renderRawResponse(jsonResponse) //If all went well, you should see an array of words that the Datamuse API responded with!
  renderResponse(jsonResponse); // to clean up that response a bit
} )

}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
