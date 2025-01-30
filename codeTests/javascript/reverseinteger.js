/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const maxInt = (2**31)-1;
    const a = `${x}`.match(/^(-*)(\d+)$/);
    const calc = parseInt(a[1] + a[2].split('').reverse().join(''), 10);
    return (Math.abs(calc) > maxInt) ? 0 : calc;
};

const reverse2 = function(x) {
    let output = 0;
    const maxInt = (2**31)-1;

    while (x !== 0) {
        output = (output * 10) + (x % 10);
        x = (x - (x % 10)) / 10;
    }
    return (Math.abs(output) > maxInt) ? 0 : output;
}

console.log(reverse2(-123))