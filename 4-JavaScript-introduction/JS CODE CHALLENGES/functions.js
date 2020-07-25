 const canIVote = age => (age>=18)? true:false;

const agreeOrDisagree = (strng1, strng2) => strng1===strng2? 'You agree!':'You disagree!';


function lifePhase(age) 
{
switch (true) {
  case age < 0: age = 141;
  case age < 3: return 'baby';
  case age < 13: return 'child';
  case age < 20: return 'teen';
  case age < 65: return 'adult';
  case age < 75: return 'senior';
  case age < 141: return 'elderly';
  default: return "This is not a valid age."
}
}
/*const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}*/

function life_cycle(age) {
    if (age < 0 || age > 140) {
      return "This is not a valid age.";
    }
    return age < 3  ? 'baby' :
           age < 13 ? 'child' :
           age < 20 ? 'teen' :
           age < 65 ? 'adult' :
           age < 75 ? 'senior' : 'elderly';
  }

  function finalGrade(grade1, grade2, grade3)
  {
      if(grade1<0||grade1>100 ||grade2<0||grade2>100||grade3<0||grade3>100) {return 'You have entered an invalid grade.';}
      let avarage= (grade1+grade2+grade3)/3;
      return avarage <60? 'F':
             avarage <70? 'D':
             avarage <80? 'C':
             avarage <90? 'B':
             avarage <100? 'A':'A';
  }

  const reportingForDuty = (rank,lastName) => rank + " "+ lastName + ' reporting for duty!';


  const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1);
      let die2 = Math.floor(Math.random() * 6 + 1);
      return die1 + die2
  }
  
  function calculateWeight(earthWeight ,plant)
  {
      switch (plant) {
          case 'Mercury': return earthWeight * 0.378;
          case 'Venus' :return earthWeight * 0.907;
          case 'Mars': return earthWeight * 0.377;
          case 'Jupiter': return earthWeight * 2.36;
          case 'Saturn': return earthWeight * 0.916
          default: return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
          }
  }

  const truthyOrFalsy= (value)=> value? true:false;

  const numImaginaryFriends= (numberOfFriends) => Math.round(numberOfFriends*0.33);

  const sillySentence= (adjective,verb,noun)=> 'I am so '+ adjective + ' because I ' + verb + ' coding! Time to write some more awesome '+ noun + '!'; 

  function howOld(age,year)
  {
      const currentDate = new Date();
      const currentYear =currentDate.getFullYear();
      const yearsDifferece=year-currentYear;
      const newAge = age + yearsDifferece;
      if (yearsDifferece>=0)
      {
          return 'You will be '+ newAge+ ' in the year ' + year;
      }else if (newAge<0){
          return 'The year '+ year+ ' was ' + Math.abs(newAge) +' years before you were born'
      }else{
          return 'You were '+ newAge + ' in the year '+year;
      }
  }

  const tipCalculator= (quality,total) => 
  {
    switch (quality) {
        case 'bad': return total*0.05;
        case 'ok': return total*0.15;
        case 'good': return total*0.20;
        case 'excellent': return total*0.30;
        default: return total*0.18;
      }
  }

  function toEmoticon(emotion)
  {
      switch (emotion) {
            case 'shrug':return '|_{"}_|';
            case'smiley face':return ':)';
            case'frowny face' : return':(';
            case'winky face' : return ';)';
            case'heart' : return '<3';
            default: return'|_(* ~ *)_|';
         }

  }