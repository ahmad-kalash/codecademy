const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// check if there are words that are fewer than 6 characters long.

console.log(words.some( word => {
  return word.length < 6;
}));

// Use filter to create a new array to save any words longer than 5 characters to a new variable called interestingWords
const interestingWords = words.filter( word => word.length > 5);
console.log (interestingWords);


//Complete the code between the parentheses to check if every element has more than 5 characters
console.log(interestingWords.every(word => word.length > 5));

