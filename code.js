const fibonacci = (seed1, seed2, limit) => {
    const fib = [seed1, seed2];

    for (let i = 2; i <= (limit + 1); i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

    }

    return fib;
}

const printClock = () => {
    const h1 = document.getElementById("clock");
    if(!h1) return;
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const normalizedMinutes = minutes.toString().padStart(2, '0');
    const seconds = currentTime.getSeconds();
    const normalizedSeconds = seconds.toString().padStart(2, '0');

    const time = hours + ':' + normalizedMinutes + ':'+ normalizedSeconds;
    h1.innerText = time;
}

const triggerFibonacci = () => {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds()
    const normalizedMinutes = minutes.toString().padStart(2, '0');
    const seed1 = Number(normalizedMinutes.toString()[0]);
    const seed2 = Number(normalizedMinutes.toString()[1]);

    const fibo = fibonacci(seed1, seed2, seconds);
    printFibonacciResults(fibo);
}

const printFibonacciResults = (fibonacci) => {
    const result = fibonacci.join(', ');
    const p = document.getElementById("fibonacciResults");
    if(!p) return;

    p.innerText = result;
}

const main = () => {
    printClock();
    setInterval(() => {
        printClock();
    }, 1000);
}

main();
