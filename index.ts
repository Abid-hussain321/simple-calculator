#! usr/bin/env node
//SHA_BANG 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter  first number....", type: "number", name: "num1" },
  { message: "enter  second number....", type: "number", name: "num2" },
  {
    message: "select one of the operator to perform operation....",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  //let add:number =answer.num1 + answer.num2
  console.log(answer.num1 + answer.num2);
} else if (answer.operator === "Subtraction") {
  console.log(answer.num1 - answer.num2);
} else if (answer.operator  === "Multiplication") {
  console.log (answer.num1 * answer.num2);
// } else if (answer.operator === "Division") {
//   console.log (answer.num1 / answer.num2 );
}else {
  console.log("please enter valid operator")
}