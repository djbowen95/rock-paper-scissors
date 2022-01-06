const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock"|| userInput === "paper"|| userInput === "scissors") {
      console.log("Good choice.");
      return userInput;
    } else {
      console.log(`You can't fight with a ${userInput}, it's too dangerous!`);
      console.log("Please choose something more appropriate.");
    }
  }