const first_message = document.getElementById('first_message');
const second_message = document.getElementById('second_message');
const card_footer = document.getElementById('card_footer');

const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

const button = document.getElementById('button');

function calculate() {
    button.addEventListener('click', function(){
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const calculatedBMI = weight / (height * height) *10000;
        console.log("Height:", height);
        console.log("Weight:", weight);
        console.log("Calculated BMI:", calculatedBMI);
        if (calculatedBMI < 16) {
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Severe thinness!';
            console.log('Severe thinness');
        }else if(calculatedBMI < 17){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Moderate thinness!';
            console.log('Moderate thinness');
        }
        else if(calculatedBMI < 18.5){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Mild thinness!';
            console.log('Mild thinness');
        }
        else if(calculatedBMI < 25){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Normal weight!';
            console.log(' Normal weight');
        }
        else if(calculatedBMI < 30){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Overweight!';
            console.log('Overweight');
        }
        else if(calculatedBMI < 35){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Obesity class I (Moderate obesity)!';
            console.log('Obesity class I (Moderate obesity)');
        }
        else if(calculatedBMI < 40){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Obesity class II (Severe obesity)!';
            console.log('Obesity class II (Severe obesity)');
        }else if(calculatedBMI >= 40){
            first_message.classList.add('d-none');
            second_message.innerHTML = 'You are Obesity class III (Very severe obesity)!';
            console.log(' Obesity class III (Very severe obesity)');
        }

        
    });
}

calculate();
