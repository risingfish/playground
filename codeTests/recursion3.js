const str = "hello";

function isPalindrome(old) {
    if (old === "" || old.length === 1) {
        return true;
    }

    if (old.charAt(0) === old.charAt(old.length - 1)) {
        return isPalindrome(old.substring(1, old.length - 1));
    }

    return false;
}

console.log(isPalindrome("racecr"));
