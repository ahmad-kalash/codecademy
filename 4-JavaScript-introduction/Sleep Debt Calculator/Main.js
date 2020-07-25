const getSleepHours = day =>
{
    switch (day) 
    {
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 6;
            break;    
        case 'monday':
            return 4;
            break;
        case 'tuesday':
            return 8;
            break;
        case 'wednesday':
            return 9;
            break;    
        case 'thursday':
            return 10;
            break;
        case 'friday':
            return 5;
            break;
    }
}

//console.log(getSleepHours('thursday'));

const getActualSleepHours = () => getSleepHours('saturday') + getSleepHours('sunday')+ getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday'); 

const getIdealSleepHours = (idealHours) => idealHours*7;

console.log(getActualSleepHours());
console.log(getIdealSleepHours(8));

const calculateSleepDebt = () => {
  const actualSleepHours=getActualSleepHours();
  const idealSleepHours=getIdealSleepHours(8);

  if (actualSleepHours===idealSleepHours){console.log('the user got the perfect amount of sleep.')
  }else if (actualSleepHours > idealSleepHours)
  {console.log('You got ' + (actualSleepHours- idealSleepHours ) + ' hour(s)  more sleep than you needed this week.')
  }else{console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')}
}

calculateSleepDebt();