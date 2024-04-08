const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.calculator__key')

let currentNumber = 0;
let result = 0;
let lastAction = null;

buttons.forEach(button => {

    button.addEventListener('click', () => {
        
        if (display.textContent === '0') {
            display.textContent = button.value
        } else {
            display.textContent += button.value
        }

        if (button.dataset.action === "add") {
            performOperation();
            lastAction = "add";
        }
        else if (button.dataset.action === "subtract") {
            performOperation();
            lastAction = "subtract";
        }
        else if (button.dataset.action === "multiply") {
            performOperation();
            lastAction = "multiply";
        }
        else if (button.dataset.action === "clear") {
            clearDisplay();
        }
        else if (button.dataset.action === "divide") {
            performOperation();
            lastAction = "divide";
        }
        else if (button.dataset.action === "calculate") {
            performOperation();
            lastAction = null;
            display.textContent = result;
        }

    })
});

function performOperation() {
    const inputValue = parseFloat(display.textContent);
    switch (lastAction) {
        case "add":
            result += inputValue;
            console.log(result);
            break;
        case "subtract":
            result -= inputValue;
            console.log(result);
            break;
        case "multiply":
            result *= inputValue;
            console.log(result);
            break;
        case "divide":
            if (inputValue !== 0) {
                result /= inputValue;
                console.log(result);
            } else {
                result = "Error";
                console.log(result);
            }
            break;
        default:
            result = inputValue;
            break;
    }
    display.textContent = '0';
}

function clearDisplay() {
    currentNumber = 0;
    result = 0;
    lastAction = null;
    display.textContent = '0';
}
