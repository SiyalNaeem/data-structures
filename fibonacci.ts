// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n: number) { //O(n)

    if (n <= 2) {
        return n;
    }
    let arr: number[] = [0,1];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }

    return arr[n];

}
// console.log(fibonacciIterative(8));
function fibonacciRecursive() { //O(2^n)
    let cache = {};
    return function fib(n){
        if (n < 2) {
            return n;
        }
        if(n in cache){
            return cache[n];
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    
}

let fibCalc = fibonacciRecursive();

console.log(fibCalc(869))