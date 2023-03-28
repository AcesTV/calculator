function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function modulo(x, y) {
    return x % y;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return substract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
        case "%":
            return modulo(firstNumber, secondNumber);
            break;
    }
}

let screen = document.querySelector('.screen');

function render(text) {
    screen.innerText = text;
}