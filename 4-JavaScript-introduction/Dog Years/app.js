/*//this is the value of my age
const myAge=39;
let earlyYears=2;
let laterYears=myAge-2;
//The first two years of a dog’s life count as 10.5 dog years each.
earlyYears *=10.5;
//Each year following equates to 4 dog years.
laterYears *=4;
//this is my age in Dog years
let myAgeInDogYears=earlyYears+laterYears;
let myName = "mahmoud".toUpperCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);*/

let myAgeInDogYears =26;
let earlyYears =24;
let laterYears;
let myAge;
let myName = "mahmoud".toUpperCase();

if (myAgeInDogYears > 21)
{
  earlyYears=2;
  laterYears = (myAgeInDogYears - 21)/4;
  let myAgeInMonths=((earlyYears+laterYears)*12)%12;
  myAge=Math.floor(earlyYears+laterYears) + "years and " + myAgeInMonths + "months";
}
else {
  myAge = Math.ceil((myAgeInDogYears/10.5)*12) +" months";
  }
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old if i was a dog i should be Almost ${myAge} old`);