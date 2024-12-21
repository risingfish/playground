/**
 * This ia sliding with method for finding the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let highStr = 0
    let store = {};
    let c;

    for (let right = 0, len = s.length; right < len; right++) {
        c = s.charAt(right)
        if (store.hasOwnProperty(c) && store[c] >= left) {
            left = store[c] + 1;
        } else {
            highStr = Math.max(highStr, right - left + 1);
        }

        store[c] = right;
    }

    return highStr;
};

const test = 'sdsajjdffjguahllkdka';
const start = new Date();
const result = lengthOfLongestSubstring(test);
const total = (new Date()).getTime() - start.getTime();
console.log(result, ' runtime:', total);

