/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);
    const len = merged.length;

    if (len % 2 === 0) {
        // If the array length is even, we take the two middle values and get the median of those two values.
        return (merged[len / 2] + merged[(len / 2) - 1]) / 2;
    } else {
        // If the array is odd, we just take the middle value
        return merged[Math.floor(len / 2)];
    }
};

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(findMedianSortedArrays(arr1, arr2));