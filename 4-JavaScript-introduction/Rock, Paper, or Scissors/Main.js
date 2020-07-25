const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput==='scissor'|| userInput==='paper')
    {return userInput;
    }else{
    return 'please enter valid choice';
    }
}
//console.log(getUserChoice('scissors'));

const getComputerChoice =() => {
      let computerChoice = Math.floor (Math.random()*3);

      switch (computerChoice)
    {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissor';
            break;
        case 2:
            return 'paper';
            break;
    }
}
//    console.log('computer choice is ' + getComputerChoice());

    function determineWinner(userChoice,computerChoice) 
{
    if (userChoice===computerChoice)
    { return 'the game was a tie.';}
    else 
    {
        if(userChoice==='rock')
        {
            if (computerChoice==='scissor') {return 'You win!';}
            else {return 'the computer win!';}
        }
        else if (userChoice='scissor')
        {
            if (computerChoice==='paper'){return 'you win!';}
            else {return 'the computer win!';}
        }
        else if (userChoice==='paper')
        {
            if (computerChoice==='rock'){return 'you win!';}
            else {return 'computer win!';}
        }

    }
}

//console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
//console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
//console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
const playGame = () => 
{
const userChoice = getUserChoice('paper');
const computerChoice= getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw:' + computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}

playGame();
