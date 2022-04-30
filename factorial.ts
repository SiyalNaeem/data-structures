// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number:number):number {
    if (number == 0) {
        return 0;
    }
    
    if (number == 1) {
        return 1;
    }
    if (number == 2) {
        return 2;
    }
    
    return number * findFactorialRecursive(number - 1);
  }

function findFactorialIterative(number: number) {
    let result = 1;
    if (number == 0) {
        return 0;
    }

    if (number == 2) {
        return 2;
    }

    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(findFactorialIterative(6))
console.log(findFactorialRecursive(6))