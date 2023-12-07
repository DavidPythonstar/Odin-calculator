let clearButton = document.querySelector('.clear')
let numberButtons = document.querySelectorAll('.number')
let screen = document.querySelector('.screen');
let clicked = 0
let num1 = 0;
let num2 = 0;
let result = 0;
let operators = document.querySelectorAll('.operator')
let operator = ''
let equal = 

// Clearing the screen
clearButton.addEventListener('click', ()=>
{
    screen.textContent = ""
})

// Getting the clicked button
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        clicked = event.target.textContent;
        screen.textContent += clicked
        num1 = 0
        num2 = 0;
        result = 0;

    })
})

//creating the arithmetic functions
function add(number1, number2)
{
    sum = number1 + number2;
    return sum
}

function divide(number1,number2)
{
    result = number1/number2;
    return result;
}


function mult(number1,number2)
{
    result = number1*number2;
    return result;
}

function sub(number1,number2)
{
    result = number1-number2;
    return result;
}


function operate(operator,num1,num2)
{
    if (operator === '+')
        result = add(num1,num2);
    else if (operator === '-')
        result = sub(num1, num2);
    else if (operator === '*')
        result = mult(num1, num2);
    else if (operator === '/')
        result = divide(num1,num2);
}


operators.forEach((button) =>
{
    button.addEventListener('click', (button)=>
    {
        operator = button.target.textContent
        

    })

})




