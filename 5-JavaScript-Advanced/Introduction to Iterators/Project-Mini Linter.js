let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
const storyWords = story.split(' ');
//Log how many words there are in this story to the console.
console.log ('The word count in the story = ' + storyWords.length);

//There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

const betterWords = storyWords.filter(word => 
  {
    let result = true;
  for (let i=0; i< unnecessaryWords.length; i++)
    {
     let result = word != unnecessaryWords[i];
     if (result===false) {return result;}
    }
    return true;
  });
console.log('The word count in the story after removing the unnecessary Words = ' + betterWords.length);

// use .includes() to prove last function is working fine. 
//for (let i=0; i< unnecessaryWords.length; i++)
//    {
//      console.log(betterWords.includes(unnecessaryWords[i]));
//    };


//There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.

let totalUsed=0;
overusedWords.forEach(usedWord=>{
  const noOfTimes = storyWords.reduce((acc, currVal) => 
  {
    if (currVal===usedWord)
    {
      acc++;
    }
    return acc;
  }, 0);
  totalUsed += noOfTimes;
  console.log('you overused "' + usedWord + '" ' + noOfTimes + ' times'
)
});
console.log('The counts of all three overused words ' + totalUsed);

/*Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.
*/

let sentences = 0;
storyWords.forEach(word => 
  {
    if (word[word.length-1] === '.' || word[word.length-1] === '!')
    {sentences ++;}
  }
);
console.log('The sentence count is ' + sentences )
  

//The outPut is 
/*
The word count in the story = 188
The word count in the story after removing the unnecessary Words = 182
you overused "really" 2 times
you overused "very" 5 times
you overused "basically" 1 times
The counts of all three overused words 8
The sentence count is 12
*/


//log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));


/*
Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest number of times.

Replaced overused words with something else.
*/
