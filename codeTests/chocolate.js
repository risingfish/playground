// Recursion
function findMinWeightRecursive(weights, d, count = 0) {
    //  This a simple custom sort function that sorts in revers order. Way more
    //  efficient than using both .sort() and .reverse().
    const sortedArray = weights.sort((a,b) => b - a);
    console.log(sortedArray, 'recursive top value is',  sortedArray[0]);
    sortedArray[0] = Math.floor(sortedArray[0] / 2);

    if (count >= d) {
        console.log('Recursive final array is ', sortedArray);
        return sortedArray.reduce((accumulator, current) => accumulator + current, 0);
    } else {
        return findMinWeightRecursive([...sortedArray], d, ++count);
    }
}

// "Dynamic" programming
function findMinWeightsDynamic(weights, d) {
    let workArray = [...weights];

    for (let i = 0; i <= d; i++) {
        workArray = workArray.sort((a,b) => b - a);
        console.log(workArray, 'dynamic top value is',  workArray[0]);
        workArray[0] = Math.floor(workArray[0] / 2);
    }

    console.log('Dynamic final array is ', workArray);
    return workArray.reduce((accumulator, current) => accumulator + current, 0);
}

const testArray = [30, 25, 20];
const days = 8;

console.log(findMinWeightRecursive([...testArray], days));
console.log('===============================================')
console.log(findMinWeightsDynamic([...testArray], days));



