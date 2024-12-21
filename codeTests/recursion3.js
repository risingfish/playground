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
    if (s.length === 1) return 1;
    if (s.length === 2 && s[0] === s[1]) return 2;

    let longest = 0;
    const store = {}

    s.forEach((item, left) => {
        let right = 0;
        let stop = false;

        if (item === s[left + 1]) {
            console.log('Is neighbor palindrome')
            // Set right to the neighbor index
            right = left + 1;

            // Set longest palindrome to 2 if this is all we have found.
            longest = (longest > 2) ? longest : 2;
        }

        // while (stop) {
        //     if ((left - 1) < 0 || right >= s.length) {
        //         stop = true;
        //         break;
        //     }
        //
        //     let l = left - 1;
        //     let r = right + 1;
        // }
    });

    return longest;
}

console.log(isPalindrome("raccecr"));
