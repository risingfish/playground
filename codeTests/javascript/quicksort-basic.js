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
    // Grab any duplicates of the pivot
    const mid = arr.filter(x => x === pivot);
    return [...quicksort(low), ...mid, ...quicksort(high)];
}

/**
 * Curiosity generated alternative to two .filter() calls. The idea here was to remove
 * one .filter() because it iterates over the entire array every time. It turns out the
 * regeneration of the array that array.splice() does is far more resource intensive
 * than a single iteration. This not a good method.
 *
 * @param arr
 * @return {*|*[]}
 */
function quicksortSplice(arr) {
    // base case
    if (arr.length <= 1) return arr;

    const work = [...arr];
    const pivot = work.splice(Math.floor(work.length / 2), 1)[0];
    console.log(`Pivot value is ${pivot}`);

    // All the values that are lower than the pivot. They are removed from the array.
    let low = [];
    let b;
    for (let i = work.length - 1; i >= 0; i--) {
        if (work[i] < pivot) {
            b = work.splice(i, 1);
            low.unshift(b[0]);
            console.log(`Removed ${b[0]}`);
        }
    }

    // All the values that are higher than the pivot
    console.log(low, work);
    return [...quicksortSplice(low), pivot, ...quicksortSplice(work)];
}

/**
 * This reduces the number of loops per recursion to 1, and
 * should be more efficient than either of the previous variations.
 * @param arr
 * @return {*|*[]}
 */
function quicksortFor(arr) {
    // base case, single item array are already sorted.
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];

    // Partition all the values
    const low = [];
    const mid = [];
    const high = [];

    // Do the loop
    for (let i = 0; i <= arr.length; ++i) {
        if (arr[i] < pivot)
            low.push(arr[i])

        if (arr[i] > pivot)
            high.push(arr[i])

        if (arr[i] === pivot)
            mid.push(arr[i])
    }

    // Recurse and spread the results.
    return [...quicksortFor(low), ...mid, ...quicksortFor(high)];
}

//const arr = genArray(20);
//const arr = [9,6,2,7,3,8,5,1,4,0]; // An easy array to visually see changes.
const arr = [80, 93, 20, 59, 15, 42, 99, 88, 36, 29, 75, 55, 39, 19, 56, 3, 44, 83, 7, 74, 79, 79];
console.log('Orig  array: ', arr);
const start = new Date();
const result = quicksortFor(arr);
const end = (new Date()).getTime() - start.getTime();
console.log('Final array: ', result);
console.log('Took ' + end + 'ms to run');
