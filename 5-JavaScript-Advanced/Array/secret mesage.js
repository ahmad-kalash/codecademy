let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(`the originl length of secretMessage\'array is ${secretMessage.length}`)

secretMessage.pop();

console.log(`the new length of secretMessage\'array is ${secretMessage.length}`)

secretMessage.push('to');
secretMessage.push('Program');

let easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex]= 'right';
secretMessage.shift();
secretMessage.unshift('Programming'); 

secretMessage.splice(6,5,'know');

console.log(secretMessage.join(' '));
