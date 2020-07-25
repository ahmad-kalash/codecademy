// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
// the fuction colorChange is an event handler which will change the background color of the target that the evnt fired on.
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor  = randomColor;
};

//mouse event fired
button.onclick = colorChange;
button.addEventListener ('mouseover', colorChange);
mysteryButton.onwheel = colorChange;
mysteryButton.addEventListener ('mousemove', colorChange);
