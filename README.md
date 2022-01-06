# Rock, Paper, Scissors Bot 
## 0A Introduction
This is a simple code that the user can play Rock, Paper, Scissors with. This code is fully random - ie. it will select one of the three options at random, and then tell the user whether they have won or lost the game based on what they choose.

I made this code while working on the Codecademy JavaScript course - and came up with several ideas on how to expand it into a more interesting project while building the basic code.

At the moment, only the basic code exists - but I have outlined the ideas I have for building the future project, if I choose to work on it further.

## 0B Contents
- 0A Introduction
- OB Contents
- 01 Basic Script Walkthrough
- - 01A Valid Response Verification

## 01 Basic Script Walkthrough
### 01A Valid Response Verifiation
The first 10 lines of the base code check to see whether the user has entered Rock, Paper or Scissors. This is converted to lowercase so that and variation of lowercase/uppercase characters is picked up, with the function '.toLowerCase()'. I used / revised the syntax for an arrow function when writing this code; and I learned that to use the || operator I needed to include the entire condition again. Ie. this works:
         if (userInput === "rock"|| userInput === "paper"|| userInput === "scissors") {}
But this does not:
        if (userInput === "rock" || "paper" || "scissors) {}


## XB Future Goals
### XB1 Score Recording
I would like page to record the scores - so that the user knows how many times the computer has beaten the machine, and lost to the machine.

### XB2 Interactive Behaviours
I think it would be nice to not just randomise the computer's choice, but the display on the webpage - I might work with JavaScript and CSS to create a page that changes each time; ie. rock, paper and scissor graphics that change colour each time, and change their location / position on the page.

### XB3 Strategy Identification
I think it would be especially cool to have the code 'recognise' patterns of behaviour by the player: ie:
 - Repeating the same selection multiple times
 - Moving through a cycle of the three items
 - Same item twice then change
 - Always using the same item / never repeating
 - Make choice based on computer's previous choice (ie. pick the item that would beat, lose to or match what the computer last picked)
I think the first challenge would be to get the code to recognise these patterns, then learn how to 'compete' / beat the player if they do use one of these strategies.