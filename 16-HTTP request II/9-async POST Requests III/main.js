// information to reach API
const apiKey = 'edd0bd65cdac4498a0ce16f0cc01900b';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () =>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});  //the reason for creating data is to prepare the information needed to send in the body.
  
  try{
  const response = await fetch(url, {
    method: 'POST',
    headers: {
    'Content-type': 'application/json',
    'apikey': apiKey
    },
    body: data
  });
  if (response.ok){
    const jsonResponse = await response.json();
    renderResponse(jsonResponse);
  }
  throw new Error('Request failed!');
  
}catch(error) {
    console.log(error);

}
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
