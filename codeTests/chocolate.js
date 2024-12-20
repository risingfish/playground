// Recursion
function findMinWeightRecursive(weights, d, count = 0) {
    // Write your code here
    const sortedArray = weights.sort().reverse();
    sortedArray[0] = Math.floor(sortedArray[0] / 2);

    if (count >= d) {
        return weights.reduce((accumulator, current) => accumulator + current, 0);
    } else {
        return findMinWeightRecursive(sortedArray, d, ++count);
    }
}

// "Dynamic" programming
function findMinWeightsDynamic(weights, d) {
    const workArray = [...weights];

    for (let i = 0; i <= d; i++) {
        workArray.sort().reverse();
        workArray[0] = Math.floor(workArray[0] / 2);
    }

    return workArray.reduce((accumulator, current) => accumulator + current, 0);
}

const testArray = [30, 20, 25];
const days = 8;

console.log(findMinWeightsDynamic(testArray, days));
console.log(findMinWeightRecursive(testArray, days));

