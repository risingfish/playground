// Random number array generator
function genArray(len, max = 100) {
    const result = []
    for (let i = 0; i < len; i++) {
        result.push(Math.floor(Math.random() * max))
    }
    return result;
}

/**
 * Basic quicksort function in Javascript
 * @param arr
 * @return {*|*[]}
 */
function quicksort(arr) {
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
// arr = [9,6,2,7,3,8,5,1,4,0]; // An easy array to visually see changes.
let originalArr = [...arr];
const start = new Date();
const result = quicksort(arr);
const end = (new Date()).getTime() - start.getTime();
console.log('Orig  array: ', originalArr);
console.log('Final array: ', result);
console.log('Took ' + end + 'ms to run');
