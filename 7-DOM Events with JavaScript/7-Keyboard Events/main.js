//Now it’s time to create a game! Program this code to dribble the ball on the platform using any key on a keyboard. When a user presses a key down, it should lift the ball up. When the user releases the key, the ball should drop.

let ball = document.getElementById('float-circle');

let h1 = document.getElementById('h1');

// Write your code below

//make a function named up that will raise the bottom position of the ball to '250px' above the platform element.

const up = function() {
  ball.style.bottom = '100px';
};

const down = function(){
  ball.style.bottom = '50px';
};

const changeHeader = function(event) {
  h1.innerHTML = 'the key pressed is: '+ event.key;
};

document.addEventListener ('keyup', changeHeader);
document.onkeydown = up;
document.onkeyup = down;