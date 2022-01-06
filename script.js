// Check user has input a valid 'Rock', 'Paper' or 'Scissors' response.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    console.log("Good choice.");
    return userInput;
  } else {
    console.log(`You can't fight with a ${userInput}, it's too dangerous!`);
    console.log("Please choose something more appropriate.");
  }
};

// Determine the computer's choice of 'Rock', 'Paper' or 'Scissors'.
const getComputerChoice = () => {
  let computerRandNum = Math.random() * 3;
  computerRandNum = Math.floor(computerRandNum);
  if (computerRandNum === 0) {
    return "rock";
  } else if (computerRandNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Compare two selections of rock, paper or scissors, and determine the winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins.";
    } else {
      return "You win!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins.";
    } else {
      return "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins.";
    } else {
      return "You win!";
    }
  }
};

// Function to determine winner between user and computer, and print to console. 
const playGame = (userInput) => {
    userChoice = getUserChoice(userInput);
    computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice))
  }
  
// Play a single game, where the user input is "rock".
  playGame("rock") 