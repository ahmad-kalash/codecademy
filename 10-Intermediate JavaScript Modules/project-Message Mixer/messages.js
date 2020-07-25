//const MessageMixer = require('./messageMixer.js');
import MessageMixer from './messageMixer.js';

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(MessageMixer.reverseWord("What is the color of the sky?"));
  console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
  console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(MessageMixer.encode("What is the color of the sky?"));
  console.log(MessageMixer.palindrome("What is the color of the sky?"));
  console.log(MessageMixer.pigLatin("What is the color of the sky?", "a"));

  
}

displayMessage();

/* the output is 
3
What Is The Color Of The Sky?
?yks eht fo roloc eht si tahW
tahW si eht roloc fo eht ?yks
What is the color of the water?
Wh@t !$ the c0l0r 0f the $ky?
*/