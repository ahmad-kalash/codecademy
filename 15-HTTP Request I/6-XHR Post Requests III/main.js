// Information to reach API
const apiKey = 'edd0bd65cdac4498a0ce16f0cc01900b';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten, "domain": { "fullName": "link.oscartextile.com"}}); //We’re including this information because the API expects to see an object with a key destination that has a value of a URL, and a key domain that have a value of your domain.
// 

  xhr.onreadystatechange = () => {
    if ( xhr.readyState=== XMLHttpRequest.DONE){
      renderResponse(xhr.response);
    }
  }

  xhr.open('POST', url);

//To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  
  xhr.send(data);
  
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
