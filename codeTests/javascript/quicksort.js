// Random number generator
function genArray(len, max = 100) {
    const result = []
    for (let i = 0; i < len; i++) {
        result.push(Math.floor(Math.random() * max))
    }
    return result;
}

// Just a counter to see recursion count
let rec = 0;

/**
 * Basic quicksort function in Javascript
 * @param arr
 * @return {*|*[]}
 */
function quicksort(arr) {
    rec++;
    // base case
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    // All the values that are lower than the pivot
    const low = arr.filter(x => x < pivot);
    // All the values that are higher than the pivot
    const high = arr.filter(x => x > pivot);
    return [...quicksort(low), pivot, ...quicksort(high)];
}



const arr = genArray(100);
const start = new Date();
const end = (new Date()).getTime() - start.getTime();
console.log(quicksort(arr), rec);
console.log('Took ' + end + 'ms to run');
