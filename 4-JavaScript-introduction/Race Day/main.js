let raceNumber = Math.floor(Math.random() * 1000);
let startTime = "12:30 pm";
let registeredEarly  = false;
const age =18;

if (age===18)
{
  if (registeredEarly){ console.log('Runners who are 18 years old and registered early should see the registration desk.');}
  else {console.log('Runners who are 18 years old and registered late should see the registration desk.');}
}
else
{ if (age>18)
  {
    if (registeredEarly)
    {
      raceNumber+= 1000;
      startTime= "9:30 am";
    }
    else
    {
      startTime= "11:00 am";
    }
  } 
    console.log(`Your race number is ${raceNumber} and your race will start at ${startTime}`);
}