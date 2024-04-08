const first_message = document.getElementById('first_message');
const tasks = document.getElementById('tasks');
const solution = document.getElementById('solution');

const button_new = document.getElementById('new');
const button_send = document.getElementById('send');


button_new.addEventListener('click', function () {
    first_message.classList.add('visually-hidden');
    button_new.classList.add('visually-hidden');
    button_send.classList.remove('visually-hidden');
    solution.classList.remove('visually-hidden');

    newTask()
})

button_send.addEventListener('click', function () {
    checkResult();
})


function newTask() {
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; 

    tasks.textContent = `${num1} ${operator} ${num2} =`;
    switch (operator) {
        case '+':
            currentTaskResult = num1 + num2;
            break;
        case '-':
            currentTaskResult = num1 - num2;
            break;
        case '*':
            currentTaskResult = num1 * num2;
            break;
        case '/':
            currentTaskResult = num1 / num2;
            break;
    }

    setTimeout(function () {
        checkResult(); 
    }, 8000);
}

function checkResult() {
    const userResult = parseFloat(solution.value);
    if (!isNaN(userResult)) {
        if (userResult === currentTaskResult) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    } else {
        alert('Please enter a valid number!');
    }
    solution.value = ''; 
    newTask(); 
}