/**
 * Using a hashmap to efficient find the index of two array
 * entries that sum to make the target value.
 *
 * @param target
 * @param searchArray
 * @return {(number|*)[]}
 */
function sumTwo(searchArray, target) {
    const hmap = {};

    for (let i = 0; i < searchArray.length; i++) {
        // Subtract target form the current index value. This will give us
        // one possibility that might be in the array.
        const r = target - searchArray[i];

        // If the possible value is actually in the hash, we know we have
        // the solution. Return the two indexes.
        if (typeof hmap[searchArray[i]] !== "undefined")
            return [i, hmap[searchArray[i]]]
        // If the possible value is not stored yet, store it now using the
        // possible value as the index. The value stored is the current
        // index of the search array.
        hmap[r] = i;

    }
}

const valArray = [2,7,11,15];
const target = 9;
const result = sumTwo(valArray, target);
// Should be [0,1]
console.log(result);