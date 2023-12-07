let clearButton = document.querySelector('.clear')
let numberButtons = document.querySelectorAll('.number')
let screen = document.querySelector('.screen');
let clicked = 0
let num1 = 0;
let num2 = 0;
let result = 0;
let operators = document.querySelectorAll('.operator')
let operator = ''
let equalButton = document.querySelector('.equal');

// Clearing the screen
clearButton.addEventListener('click', () => {
    screen.textContent = ""
    num1 = 0;
    num2 = 0;
    result = 0;
})

// Getting the clicked button
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        clicked = event.target.textContent;
        screen.textContent += clicked;
        if (operator === '') {
            num1 = parseFloat(screen.textContent);
        } else {
            num2 = parseFloat(screen.textContent);
        }
    })
})

// Creating the arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function mult(number1, number2) {
    return number1 * number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function operate(operator, num1, num2) {
    if (operator === '+')
        return add(num1, num2);
    else if (operator === '-')
        return sub(num1, num2);
    else if (operator === '*')
        return mult(num1, num2);
    else if (operator === '/')
        return divide(num1, num2);
}

// Handling operator button click
operators.forEach((button) => {
    button.addEventListener('click', (button) => {
        operator = button.target.textContent;
        num1 = parseFloat(screen.textContent);
        screen.textContent = "";
    })
})

// Handling equal button click
equalButton.addEventListener('click', () => {
    num2 = parseFloat(screen.textContent);
    result = operate(operator, num1, num2);
    screen.textContent = result;
    num1 = result;
    num2 = 0;
    operator = '';
})
