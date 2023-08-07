// business logic
function add(number1, number2) {
    return number1 + number2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

// UI logic
const num1 = parseInt(prompt("enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));

// Individual messages for each function, combine into one large message
const addResult = num1 + " + " + num2 + " = " + add(num1, num2) + "\n";
const subResult = num1 + " - " + num2 + " = " + sub(num1, num2) + "\n";
const multResult = num1 + " * " + num2 + " = " + mult(num1, num2) + "\n";
const divResult = num1 + " / " + num2 + " = " + div(num1, num2);
const message = addResult + subResult + multResult + divResult;

// Present results
window.alert(message);

// window.alert("The addition of your numbers equal " + add(num1, num2)  + "\nThe subtraction of your numbers equal " + sub(num1, num2) + "\nThe multiplication of your numbers equal " + mult(num1, num2) + "\nThe division of your numbers equal " + div(num1, num2));