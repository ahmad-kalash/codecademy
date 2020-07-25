// Information to reach API
const apiKey = 'edd0bd65cdac4498a0ce16f0cc01900b';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});  //the reason for creating data is to prepare the information needed to send in the body.
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-type': 'application/json',
    'apikey': apiKey
    },
    body: data
  }).then( //The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status
    response => {
      if (response.ok) {
        //renderJsonResponse(response); //Now, if you post a URL, you should see the raw object that was sent back!
        return response.json();      
      }
      throw new Error('Request failed!');
    }
    , networkError => {console.log(networkError.message)}
  ) 
  .then (//you’ll add another .then() to the chain to finally make the information available to your webpage!
    jsonResponse => {
      //renderRawResponse (jsonResponse); //You’ll see the JSON of the response sent back from the API.
      renderResponse (jsonResponse); // you will see the shortin URL
    }
  )
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
