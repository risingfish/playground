const str = "hello";

function addNumbers(num, total = 0) {
    if (num <= 1) return num;
    return num + addNumbers(--num, total);
}

console.log(addNumbers(10));
