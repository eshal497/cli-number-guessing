#! /usr/bin/env node
import inquirer from "inquirer";

// 1)computer will generate a random no

//2) User input for guessing no 

//3) compare user input with computer generate no to show result


const randomNumber =Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
       message: "Please guess a number between 1-6:",
   },
]);


// IF statement

if (answers.userGuessedNumber === randomNumber ) {
    console.log("Congralutions! you guess the right number.") 
} else {
    console.log("you guess the wrong number.")
}





