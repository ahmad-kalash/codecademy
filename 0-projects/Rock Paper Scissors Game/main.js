const userBoard = document.getElementById('user-score');
const computerBoard = document.getElementById('computer-score');
const computerIcon = document.getElementById('computerChoice');
const winner = document.getElementById('winner');

let userScore =0;
let computerScore =0;

const getComputerChoice =() => {
      let computerChoice = Math.floor (Math.random()*3);

      switch (computerChoice)
    {
        case 0:
            computerIcon.className = "far fa-hand-rock";
            return 'rock';
            break;
        case 1:
            computerIcon.className = "far fa-hand-scissors";            
            return 'scissor';
            break;
        case 2:
            computerIcon.className = "far fa-hand-paper";            
            return 'paper';
            break;
    }
}



    function determineWinner(userChoice,computerChoice) 
{
    if (userChoice===computerChoice)
    { return 'the game was a tie.';}
    else 
    {
        if(userChoice==='rock')
        {
            if (computerChoice==='scissor') {
                userScore++;
                return 'You win!';}
            else {
                computerScore++;
                return 'the computer win!';}
        }
        else if (userChoice==='scissor')
        {
            if (computerChoice==='paper'){
                userScore++;
                return 'you win!';}
            else {
                computerScore++;
                return 'the computer win!';}
        }
        else if (userChoice==='paper')
        {
            if (computerChoice==='rock'){
                userScore++;
                return 'you win!';}
            else {
                computerScore++;
                return 'computer win!';}
        }

    }
}

const updatewinner = (win) => {
    winner.innerHTML = win;
    userBoard.innerHTML = userScore;
    computerBoard.innerHTML = computerScore;
}



const game = function (userChoice) {
    let computerChoice = getComputerChoice();
    updatewinner(determineWinner(userChoice,computerChoice));    
    };