// Random number array generator
function genArray(len, max = 100) {
    const result = []
    for (let i = 0; i < len; i++) {
        result.push(Math.floor(Math.random() * max))
    }
    return result;
}

function swap(arr, x, y) {
    return [arr[x], arr[y]] = [arr[y], arr[x]];
}

/**
 * Basic quicksort function in Javascript
 * @param arr
 * @param left
 * @param right
 * @return {*}
 */
const partition = (arr, left, right) => {
    console.log('-----------------------------------------------');
    console.log(`partition(): left: ${left} right: ${right}`);
    console.log('partition() start array: ', arr);
    const pivot = right--;

    // As long as the left pointer is lte the right pointer, we loop.
    while (left <= right) {
        // As long as the value in left index is lt value in pivot, add to left
        while (arr[left] < arr[pivot]) {
            left++;
        }

        // As long as the value in right index is gt value in pivot, substract from right
        while (arr[right] > arr[pivot]) {
            right--;
        }

        //  If the right and left pointers finish adjusting and left is less than or
        //  equal to right, we know we have two values out of order. We swap them and
        // continue adjusting pointers.
        if (left <= right) {
            console.log(`partition(): index swap: left: ${left} right: ${right}`);
            swap(arr, left, right);
            console.log('partition() index swap: ', arr);
            left++;
            right--;
        }
    }

    // Once all looping is complete we swap the left pointer value with the pivot pointer value;
    if (left !== pivot) {
        console.log(`partition(): partition swap: left: ${left} pivot: ${pivot}`);
        swap(arr, left, pivot);
    }
    console.log('partition() end array: ', arr);
    console.log('-----------------------------------------------');
    return left;
}

/**
 *
 * @param arr
 * @param left
 * @param right
 * @return {*}
 */
function quicksort(arr, left = 0, right = (arr.length - 1)) {
    console.log(`quicksort(): array len: ${arr.length}, left: ${left}, right: ${right}`);
    if (left < right) {
        const pivot = partition(arr, left, right);
        quicksort(arr, left, pivot - 1);
        quicksort(arr, pivot + 1, right);
    } else {
        console.log('skip sort')
    }

    return arr;
}

let arr = [...(genArray(10)), 0];
// arr = [9,6,2,7,3,8,5,1,4,0]; // An easy array to visually see changes.
let originalArr = [...arr];
const start = new Date();
quicksort(arr);
const end = (new Date()).getTime() - start.getTime();
console.log('Orig  array: ', originalArr);
console.log('Final array: ', arr);
console.log('Took ' + end + 'ms to run');