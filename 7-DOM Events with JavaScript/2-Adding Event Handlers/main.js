// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
const textChange = function() {
  view.innerHTML = 'Hello, World!';
}

const textReturn = function() {
  view.innerHTML = 'View';
}

//Because the view element already has an event handler property, you need to use a .addEventListener() method to add more event handlers.
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);