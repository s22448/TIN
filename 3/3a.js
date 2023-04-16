// Implementacja rekurencyjna
const factorial = function(num) {
    if(num < 0) {
        return -1;
    } else if(num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

// Implementacja iteracyjna
function calculateFactorial(num) {
    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(calculateFactorial(5));
