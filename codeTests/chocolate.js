function findMinWeight(weights, d, count = 0) {
    // Write your code here

    // sort descending
    const sortedArray = weights.sort().reverse();

    sortedArray[0] = Math.floor(sortedArray[0] / 2);

    if (count >= d) {
        return weights.reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
    } else {
        return findMinWeight(sortedArray, d, ++count);
    }
}


const result = findMinWeight([30, 20, 25], 5);
console.log(result);
