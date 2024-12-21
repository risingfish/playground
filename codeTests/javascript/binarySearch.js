const searchArray = [1, 3, 4, 6, 8, 11, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27];

function binarySearch(arr, left, right, search) {
    if (left > right) return false;

    // Get the mid point in the array
    const mid = Math.floor((left + right) / 2);

    // Is the mid point equal to our search number. If so return true.
    if (arr[mid] === search) {
        return true;
    }

    // If the search number if less than the mid point number, we narrow down to smaller than the mid point.
    if (search < arr[mid]) {
        return binarySearch(arr, left, mid - 1, search);
    }

    // Id the search number if higher than the midpoint, we narrow down to greater than the mid point.
    return binarySearch(arr, mid + 1, right, search);
}

console.log(binarySearch(searchArray, 0, searchArray.length - 1, 6));
