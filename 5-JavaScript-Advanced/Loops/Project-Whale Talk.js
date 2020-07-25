const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let x=0; x< input.length; x++)
{
  for (let y=0; y < vowels.length; y++)
  {
    if (input[x]=== vowels[y])
    { 
      resultArray.push(vowels[y])
      if (vowels[y]==='u' || vowels[y]==='e')
      {resultArray.push(vowels[y]);}
      break;
    }
  }
}
console.log(resultArray.join(''));