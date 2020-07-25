


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue; 
});

console.log(newSum);

//The output is like below
/*The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16*/
