const cache = [];
function fib(num) {
    if (num <= 1) return 0;
    if (num === 2) return 1;

    const result = fib(num - 1) + fib(num - 2);
    return result;
}

console.log(fib(8));

/*

0
1
1
2
3
5
8
13
21

 */
