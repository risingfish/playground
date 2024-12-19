const city = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
];
const begin = { x: 0, y: 0 };

// const getPath = (grid, begin, collector = []) => {
//     const row = grid[begin.y];
//     const newCol = begin.x + 1;
//     const newRow = begin.y + 1;
//     const resultPromise = new Promise();
//
//     collector.push(begin);
//     const newCollector = [...collector];
//
//     // We've reached the airport
//     if (newRow >= grid.length && newCol >= row.length) {
//         console.log("Path posibility: ", newCollector);
//         return begin;
//     }
//
//     // If we can't go down anymore, but we can to right, return new coord { x + 1, y }
//     if (newRow >= grid.length && newCol < row.length) {
//         return getPath(grid, { x: newCol, y: begin.y }, newCollector);
//     }
//
//     // If we can go dow, but cannot do right, return new coord {x, y + 1}
//     if (newRow < grid.length && newCol >= row.length) {
//         return getPath(grid, { x: begin.x, y: newRow }, newCollector);
//     }
//
//     getPath(grid, { x: newCol, y: begin.y }, newCollector);
//     getPath(grid, { x: begin.x, y: newRow }, newCollector);
// };

function pWrap(func) {
    return new Promise((resolve) => {
        resolve(func);
    });
}

function g(x,y) {
    return {x,y};
}

let i = 1;

function getPath(grid, begin, collector = []) {
    i++;
    // Get the row to calculate dimentions
    const row = grid[begin.y];
    // Get the board imensions
    const xbound = row.length - 1;
    const ybound = grid.length - 1;
    // If we're at the max x bound, can't go further so keep the same column.
    const newCol = (begin.x >= xbound) ?  xbound : begin.x + 1;
    // If we're at the max y bound, can't go further so keep the same row.
    const newRow = (begin.y >= ybound) ?ybound :  begin.y + 1;

    collector.push(begin);

    if (newCol >= xbound && newRow >= ybound) {
        return [...collector]
    }

    if (xbound < newCol) {
        return [getPath(grid, g(xbound, newRow), [...collector])]
    }

    if (ybound < newRow) {
        getPath(grid, g(newCol, ybound), [...collector])
    }
}

function cleanArr(arr, solutions = []) {
    if (arr.length === 1) {
        return cleanArr(arr);
    }
}


const result = await getPath(city, begin);
console.log(JSON.stringify(result, null, 2));
console.log(i);