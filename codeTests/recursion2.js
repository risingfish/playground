const str = "hello";

function reverseString(old) {
    if (!old || old === "") {
        return "";
    }
    return reverseString(old.substring(1)) + old.charAt(0);
}

console.log(reverseString(str));
