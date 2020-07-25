// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () =>{   // (1)
  const wordQuery = inputField.value;   // (2)
  const endPoint = `${url}${queryParams}${wordQuery}`;    // (3)
  try{                                                    // (4)
  const response = await fetch(endPoint);                 // (6)
  if (response.ok){                                       // (7)
    const jsonResponse = await response.json();           // (8)
    // renderRawResponse(jsonResponse); // this will let you can see the body of response, next step you should clean it up to display on the webpage.
    renderResponse(jsonResponse);
  }
}catch(error){                                          // (5)
  console.log(error)
};
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
