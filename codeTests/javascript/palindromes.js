const str = "hello";

function isPalindrome(s) {
    if (s === "" || s.length === 1) {
        return true;
    }

    if (s.charAt(0) === s.charAt(s.length - 1)) {
        return isPalindrome(s.substring(1, s.length - 1));
    }

    return false;
}

function longestPalindrome(s) {
    let longest = '';

    // loop through string once
    for (let i = 0; i < s.length; i++) {
        // use two different starting positions to
        // account for even or odd strings
        checkLeftAndRight(i, i);
        checkLeftAndRight(i, i + 1);
    }

    function checkLeftAndRight(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // subtract left from right and add one to get current
            // length of substring
            if (right - left + 1 > longest.length) {
                // set longest to current substring
                longest = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return longest;
}

console.log('Final ', longestPalindrome('ccc'));
console.log('Final ', longestPalindrome('racecar'));
console.log('Final ', longestPalindrome('ghjzx1racecar1zxc'));
console.log('Final ', longestPalindrome("a"));
console.log('Final ', longestPalindrome("aaaa"));
console.log('Final ', longestPalindrome("gaddz"));
