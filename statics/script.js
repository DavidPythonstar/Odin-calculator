let clearButton = document.querySelector('.clear')
let numberButtons = document.querySelectorAll('.number')
let screen = document.querySelector('.screen');
let clicked = 0
let num1 = 0;
let num2 = 0;
let result = 0;
console.log(numberButtons)//
//Getthe clecked button value
clearButton.addEventListener('click', ()=>
{
    screen.textContent = ""
})
numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        clicked = event.target.textContent;
        screen.textContent += clicked
        num1 = 0
        num2 = 0;
        result = 0;

    })
})
console.log(clicked)

//creating the arithmetic functions
function add(number1, number2)
{
    sum = number1 + number2;
    return sum
}

console.log(add(1,1));
console.log(result)
function divide(number1,number2)
{
    result = number1/number2;
    return result;
}

console.log(divide(10,2));

function mult(number1,number2)
{
    result = number1*number2;
    return result;
}
console.log(mult(10,2));

function sub(number1,number2)
{
    result = number1-number2;
    return result;
}
console.log(sub(10,2));

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
operate('*',2,2);
console.log(result)


