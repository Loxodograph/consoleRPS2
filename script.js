
let humanScore = 0;
let computerScore = 0;
let rpsChoices = ["rock", "paper", "scissor"];


function getComputerChoice() {
  let computerChoiceIndex = Math.floor(Math.random() * 3);
  return rpsChoices[computerChoiceIndex]
};

function getHumanChoice() {
  let humanChoicePrompt = prompt("Enter 'Rock', 'Paper', or 'Scissors'")
  let humanChoice;
  if (humanChoicePrompt === null) {
    return console.log("Don't quit now!")
  } 
  if (humanChoicePrompt.toLowerCase() === "rock") {
    humanChoice = "rock";
  } else if (humanChoicePrompt.toLowerCase() === "paper") {
    humanChoice = "paper";
  } else if (humanChoicePrompt.toLowerCase() === "scissor" || humanChoicePrompt.toLowerCase() === "scissors") {
    humanChoice = "scissor";
  }
  return humanChoice;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === undefined || humanChoice === null) {
    console.log("Why didn't you choose anything?")
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log(`You win. ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if ( humanChoice === 'scissor' && computerChoice === "paper"){
      console.log(`You win. ${humanChoice} beats ${computerChoice}`);
      humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log(`You win. ${humanChoice} beats ${computerChoice}`);
      humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Tie")
  } else {
    console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
    computerScore++;
  }
  return;
};


function playGame() {
  let humanSelection;
  let computerSelection;
  let continueGame;
  while (humanScore < 5 && computerScore < 5) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  }
  if (humanScore === 5){
    console.log("You've Won The Game!");
    continueGame = prompt("Would you like to play again? Please enter y/n");
  } else if (computerScore === 5) {
    console.log("Computer Wins!");
    continueGame = prompt("Would you like to play again? Please enter y/n");
  }
  if (continueGame === "y" || continueGame === "Y") {
    computerScore = 0;
    humanScore = 0;
    return playGame();
  }
  return;
};

playGame();

