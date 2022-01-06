# Rock, Paper, Scissors Bot 
## 0A Introduction
This is a simple code that the user can play Rock, Paper, Scissors with. This code is fully random - ie. it will select one of the three options at random, and then tell the user whether they have won or lost the game based on what they choose.

I made this code while working on the Codecademy JavaScript course - and came up with several ideas on how to expand it into a more interesting project while building the basic code.

At the moment, only the basic code exists - but I have outlined the ideas I have for building the future project, if I choose to work on it further.

## 0B Contents
- 0A Introduction
- OB Contents
- 01 Base Code Walkthrough
- - 01A Valid Response Verification
- - 01B Determining the Computer Choice
- - 01C Compare Two Rock/Paper/Scissor Choices
- - 01D Play Game Function
- 0X Future Project Tasks
- - 0XA Score Recording
- - OXB Interactive Webpage
- - OXC Changing Layout Behaviours
- - OXD Strategy Identification Gameplay

## 01 Basic Script Walkthrough
### 01A Valid Response Verifiation
The first code block (2-15) of the base code check to see whether the user has entered Rock, Paper or Scissors. This is converted to lowercase so that and variation of lowercase/uppercase characters is picked up, with the function '.toLowerCase()'. I used / revised the syntax for an arrow function when writing this code; and I learned that to use the || operator I needed to include the entire condition again. Ie. this works:
         if (userInput === "rock"|| userInput === "paper"|| userInput === "scissors") {}
But this does not:
        if (userInput === "rock" || "paper" || "scissors) {}

### 01B Determining the Computer Choice
The second block of the base code select a choice for the computer. I used the functions Math.random() and Math.floor() to generate a random number between 0 and 2, and then assigned each whole number one of the three possible choices. 

### 01C Compare Two Rock/Paper/Scissor Choices
This block of code (30-53) compares two arguments. It returns a string value that states what the result of the competition is - first checking to see if it is a tie. Then, if not, checking for each instance to see whether or not the computer has won. It will only run if the options are rock, paper or scissors - otherwise it will return nothing / an undefined value.

### 01D Play Game Function
This final function will play through the game - taking one parameter as an input, which is the 'userInput' / whatever the player chooses. I have left it in the code selecting "Rock". 



## 0X Future Goals
### 0XA Score Recording
I would like page to record the scores - so that the user knows how many times the computer has beaten the machine, and lost to the machine.

### OXB Interative Webpage
I would like to embed the project in a web page - preferably one with simple rock / paper / scissor buttons, rather than the input-based dialogue box that the script I developed with the codecademy tutorial suggests. 

### 0XC Changing Layout Behaviours
I think it would be nice to not just randomise the computer's choice, but the display on the webpage - I might work with JavaScript and CSS to create a page that changes each time; ie. rock, paper and scissor graphics that change colour each time, and change their location / position on the page.

### 0XD Strategy Identification Gameplay
I think it would be especially cool to have the code 'recognise' patterns of behaviour by the player: ie:
 - Repeating the same selection multiple times
 - Moving through a cycle of the three items
 - Same item twice then change
 - Always using the same item / never repeating
 - Make choice based on computer's previous choice (ie. pick the item that would beat, lose to or match what the computer last picked)
I think the first challenge would be to get the code to recognise these patterns, then learn how to 'compete' / beat the player if they do use one of these strategies.