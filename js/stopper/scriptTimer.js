function Stopper() {
    const display = document.getElementById('display')
    const startBTN = document.getElementById('start')
    const stopBTN = document.getElementById('stop')
    const resetBTN = document.getElementById('reset')
    const inputNumber = document.getElementById('number');

    let timerInterval;
    let countDownTime = 0;

    function startTimer() {
        if (countDownTime > 0) {
            display.innerHTML = displayTime(countDownTime)
            timerInterval = setInterval(function () {
                countDownTime--;
                display.innerHTML = displayTime(countDownTime)
                if (countDownTime <= 0) {
                    console.log('mukodik')
                    clearInterval(timerInterval)
                }
            }, 1000)
        }
    }



    function displayTime(seconds) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remaindSeconds = seconds % 60
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remaindSeconds).padStart(2, '0')}`;
    }

    function pressStart() {
        startBTN.addEventListener('click', function () {
            countDownTime = parseInt(inputNumber.value);
            startTimer();
        })
    }

    pressStart()

    function pressStop() {
        stopBTN.addEventListener('click', function () {
            clearInterval(timerInterval);
        })
    }
    pressStop()

    function pressReset() {
        resetBTN.addEventListener('click', function () {
            clearInterval(timerInterval);
            countDownTime = 0;
            display.textContent = displayTime(countDownTime);
        })
    }
    pressReset()
}
Stopper()
