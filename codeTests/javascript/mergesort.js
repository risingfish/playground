/**
 * Merge sort learning. Code for this was found at
 * https://www.doabledanny.com/merge-sort-javascript
 *
 * @type {number[]}
 */

const testData = [12, 10, 9, 3, 21, 11, 18, 17, -5, -2, 8, 1, 15];
const loopOutput = [];

function mergeSort(arr, loop = 0) {
    // Base case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    // Recursive calls. Split the array exactly in half and send
    // both halves through another merge sort. This in turn will
    // divide those sub-arrays in half again, and so on and so
    // forth. This breaks the sorting issue down into the smallest
    // operation possible which makes comparing values easy. The
    // resulting array will be returned and then merged  with
    // other arrays further up in the recursive stack.
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const sortedArr = []; // the sorted items will go here
    while (left.length && right.length) {
        // Insert the smallest item into sortedArr. This is the sorting function
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }

        console.log(sortedArr);
    }
    // Use spread operators to create a new array, combining the three arrays.
    // This works because both left and right arrays should already be sorted
    // lowest to highest. One will always run out first, therefor the one with
    // remaining values will be the very highest sorted values, so we can just
    // spread them onto the new array.
    return [...sortedArr, ...left, ...right];
}

console.log("final:", mergeSort(testData));
console.log("=====================================");
console.log(JSON.stringify(loopOutput, null, 2));
