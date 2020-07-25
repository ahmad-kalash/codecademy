let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

//Event Object Properties
// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = 'Name of the event is : ' + event.type + '\ number of milliseconds that passed since the document loaded and the event was triggered:  ' + event.timeStamp;
};

share.onmouseover = sharePhoto;