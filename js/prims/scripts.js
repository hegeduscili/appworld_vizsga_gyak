function isPrime(num) {
    if (num <= 0) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function printFirstThreePrimes() {
    let count = 0;
    let num = 2;
    while (count < 3) {
        if (isPrime(num)) {
            console.log(num);
            count++;
        }
        num++;
    }
}

printFirstThreePrimes();