// business logic
function add(number1, number2) {
    return number1 + number2;
}

// UI logic
const num1 = parseInt(prompt("enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));

window.alert(add(num1, num2));


// const additionResult = add(10,5);
// window.alert(additionResult);