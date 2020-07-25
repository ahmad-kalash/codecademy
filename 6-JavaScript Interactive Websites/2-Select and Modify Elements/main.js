document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016';
document.getElementById('fourth').innerHTML = 'Fourth element';
document.querySelector('body').style.backgroundColor ='#eefe2E';


//Create and Insert Elements
//The following code creates a new paragraph element, gives it an id, adds text to the new element’s .innerHTML, and appends it to the body of the document:
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text is added by javascript appendChild ';
document.body.appendChild(paragraph);

let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
newDestination.innerHTML = 'this item is added by Javascript';
document.getElementById('items').appendChild(newDestination);

//Remove an Element (first li)
let ft= document.getElementById ('first');
document.getElementById('items').removeChild(ft)

//Interactivity with onclick
let element = document.querySelector("button");
function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button"; 
}
element.onclick = turnButtonRed;

//Traversing the DOM
let first = document.body.firstChild;
first.innerHTML = 'I am the child!';

//first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!'