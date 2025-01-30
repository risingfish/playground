const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let r = s.match(/^\s*(?:[-+]{0,1}[0-9.]+)/) || 0;
    r = Math.round(parseFloat(r[0] || r));
    if (Math.sign(r) === 1) {
        return (INT_MAX > r) ? r : INT_MAX;
    } else {
        return (INT_MIN < r) ? r : INT_MIN;
    }
};


console.log(myAtoi('42'));