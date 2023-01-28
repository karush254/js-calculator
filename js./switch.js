// let animal = prompt("direction")
// switch(animal){
//     case"left":
//     alert("Go  to left")
//     break
// case "right":
//     alert("Go to RIght");
//     break
// case "up":
//     case "top":
//     alert("Go to top or Up")
//     break
// case "buttom":
//     alert("Go to Buttom")
//     break
// default:
//     alert("Not yot type")
// }
//////////////////////////////////////////////

//Training
// alert ("use Only these tools +,-,*,/: ")
// let first_num = +prompt("ENter a your first number: ")
// let symb = prompt("Your Tools: ")
// let second_num = +prompt("Enter a your second number: ")
// //let tools = ["-","+","/","*","**"]
// let result = undefined;
// if (symb === "+"){
//     result = first_num+second_num
//     alert(result)
// }
// else if (symb === "-"){
//     result = first_num-second_num
//     alert(result)
// }
// else if (symb === "/"){
//     result = first_num/second_num
//     alert(result)
// }
// else if (symb === "*"){
//     result = first_num*second_num
//     alert(result)
// }
// else if (symb === "**"){
//     result = first_num**second_num
//     alert(result)
// }
/////////////////

// alert("Please use only these symbols (+,-,/,*): ");
// let geom = ["+", "-", "/", "*", "**"];
// let first_num = +prompt("Enter a your first number: ");
// let symb = prompt("Enter a your symblo: (+,-,*,/)");
// let second_num = +prompt("Enter a your second number");
// let result = 0;


// switch (symb) {
//   case "+":
//     result = first_num + second_num;
//     alert(result)
//     break;
//   case "-":
//     result = first_num - second_num;
//     alert(result)
//     break;
//   case "/":
//     result = first_num / second_num;
//     alert(result)
//     break;
//   case "*":
//     result = first_num * second_num;
//     alert(result)
//     break;
// }

alert("Hello this is a calculator: ");
alert("Please use a only these tools (+,-,*,/): ");
let tools = ["+", "-", "/", "*"];
let first_number;
let symbol;
let is_symbol = true;
let second_number;
let result;
do {
  first_number = +prompt("Enter a your first number: ");
} while (isNaN(first_number) || first_number=="");
do {
  symbol = prompt("Enter a arithmetic operation: ");
  for (let i = 0; i < tools.length; i++) {
    if (tools[i] === symbol) {
      is_symbol = false;
    }
  }
} while (is_symbol);

do {
  second_number = +prompt("Enter a your second number: ");
} while (isNaN(second_number)|| second_number=="");

switch (symbol) {
  case "+":
    result = first_number + second_number;
    alert(result);
    break;
  case "-":
    result = first_number - second_number;
    alert(result);
    break;
  case "/":
    result = first_number / second_number;
    alert(result);
    break;
  case "*":
    result = first_number * second_number;
    alert(result);
    break;
    default:
        alert("Invalid Arithmetic Operation: " + symbol);
}






