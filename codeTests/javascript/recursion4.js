const str = "hello";

function toBinary(old, binary = "") {
    if (old === 0) return binary;
    const remainder = old % 2;
    binary = `${remainder}${binary}`;
    return toBinary(Math.floor(old / 2), binary);
}

console.log(toBinary(233));
