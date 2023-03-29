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
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
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

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener('click', clickNumber);
})

let operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
    operator.addEventListener('click', clickOperator);
})

let comma = document.querySelector(".comma");
comma.addEventListener('click', clickComma);

let fc = document.querySelectorAll(".fc");
fc.forEach(element => {
    element.addEventListener('click', clickFc);
})


function clickFc(e) {
    let fc = e.target.innerText;
    if (fc == "AC") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
    } else if (fc == "C") {
        secondNumber = secondNumber.slice(0, -1);
    }
    render(secondNumber);

}

function clickComma(e) {
    if (secondNumber.includes(".")) {

    } else {
        secondNumber += ".";
    }
    render(secondNumber);
}

function clickNumber(e) {
    console.log(e.target.innerText);
    secondNumber += e.target.innerText.toString();
    render(secondNumber);
}

function clickOperator(e) {

    if (operator === '=') {
        render(secondNumber);
    }

    if (firstNumber !== '' && secondNumber !== '' && operator !== '' && operator !== '=') {
        let newNumber = operate(firstNumber, secondNumber, operator);
        if (newNumber !== "") {
            firstNumber = newNumber.toFixed(5);
        }

        secondNumber = "";
        render(newNumber);
    }


    if (firstNumber === '') {
        firstNumber = secondNumber
        secondNumber = "";
    }
    operator = e.target.innerText.toString();
}

