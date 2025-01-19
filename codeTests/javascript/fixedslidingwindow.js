const testData = [2,7,9,3,6,9,3,9,1,3,9,5,7,9,9,9,3,4,8]

/**
 * Just a simple way to keep nested code down.
 *
 * @param vals
 */
const start = (vals) => {
    return vals.reduce((acc, val) => acc + val, 0);
}

/**
 * Simple fixed sliding windows.
 *
 * @param data
 * @param len
 * @return {*|number}9,5,7,3
 */
const findLargestSumFixed = (data, len = 4) => {
    const results = [];
    let p = 0;
    let max = 0;
    let current = max = start(data.slice(0, len));

    results.push(current);

    while (p + len < data.length) {
        current = current - data[p] + data[p + len];
        console.log(`Pointer: ${p}, Sub: ${data[p]}, Add: ${data[p + len]} Current val: ${current}, Max: ${max}`)
        max = (current > max) ? current : max;
        p++;
    }

    return max;
}

console.log(findLargestSumFixed(testData));