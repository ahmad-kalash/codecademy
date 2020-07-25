// Information to reach API
const url = 'https://api.datamuse.com/words?';//we'll be using this URL to direct our api request.
const queryParams = 'rel_jjb=';  //the value 'rel_jjb='. This will search for words that describe another word.
const additionalParams = '&topics=' ;


// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery = inputField.value ; //grabs what is in the inputField and assigns it to the variable wordQuery
const topicQuery = topicField.value; //grabs what is in the topicField and assigns it to the variable topicQuery
const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;; //endpoint will store the value of the entire URL and query string. with additional information(key=value) to be sent with a request
  
const xhr = new XMLHttpRequest(); // create the XMLHttpRequest object
xhr.responseType = 'json'; //When data is sent back, it will be in JSON format.

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
