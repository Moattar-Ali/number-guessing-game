#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    { message: "Please Guess a number between 1 to 10: ", type: "number", name: "userGuessnumber", },
]);
if (answer.userGuessnumber == randomNum) {
    console.log("Well Done!");
}
else {
    console.log("Try Another Number!");
}
