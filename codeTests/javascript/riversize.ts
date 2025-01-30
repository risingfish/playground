/**
 * 0 represents land
 * 1 represents a river
 * write a function that returns an array of the sizes of all rivers represented
 * in the matrix. Sizes don't need ot be ordered.
 *
 * @type {number[][]}
 */
const matrix1 = [
    [1,0,0,1,0],
    [1,0,1,0,0],
    [0,0,1,0,1],
    [1,0,1,0,1],
    [1,0,1,1,0],
];

const matrix2 = [
    [1,1,1,1,0],
    [1,0,1,0,0],
    [0,0,1,0,1],
    [0,0,1,0,1],
    [0,0,0,0,0],
];

const matrix3 = [
    [1,0,0,1,0],
    [1,0,0,1,0],
    [1,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

const matrix4 = [
    [1,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,1,0,0],
    [0,0,0,0,0],
];

// Set the board we're working with
//const matrix = matrix1;

/**
 * 1. Start looking through elements
 * 2. Check if element is 1
 * 3. Start looking for rest of river
 * 4. Determine length of river
 * 5. Store length of river
 * 6. Store visited position
 */

/**
 * This works by using a stack to follow the river.
 *
 *
 */
class FindRivers {

    static directions: number[][] = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // cardinal directions (right, down, left, up)
    ];

    visited: Set<string> = new Set();
    rivers: number[] = []
    matrix: Array<Array<number>> = [];

    /**
     * Create a new object
     * @param searchMatrix
     */
    constructor(searchMatrix: Array<Array<number>>) {
        this.matrix = searchMatrix
    }

    /**
     * Check if a set of numbers (tuple) is within the index range for the matrix
     *
     * @param row
     * @param column
     */
    isValid(row:  number, column: number) {
        return row >= 0 && row < this.matrix.length && column >= 0 && column < this.matrix[0].length;
    }

    /**
     * Check if the current position is a river. If it is, expand the search to positions around it.
     *
     * @param x
     * @param y
     */
    findRivers(x: number, y: number) {
        // Set up a stack that we will push and remove adjacent positions onto.
        const stack = [[x, y]];
        let size = 0;

        while (stack.length > 0) {
            const [rowY, columnX] = stack.pop();
            const key = `${rowY},${columnX}`;

            // If invalid position, or we've visited this one, or the value is 0 return.
            // We don't push a position with a 0 value on to the visited Set() because it doesn't matter
            // how many times we see that position, it won't ever be used for anything.
            if (!this.isValid(rowY, columnX) || this.visited.has(key) || this.matrix[rowY][columnX] === 0) {
                continue;
            }

            // We hit another river position to add it to the visited and increment the size. We only
            // care about tracking the river positions.
            this.visited.add(key);
            size++;

            // Because the position had a river, we now need to search the positions around this one.
            // Put the 4 adjacent positions onto the stack
            for (const [rowMod, colMod] of FindRivers.directions) {
                stack.push([rowY + rowMod, columnX + colMod]);
            }
        }

        return size;
    }

    /**
     * Initiate the search
     */
    search() {
        this.visited = new Set();
        this.rivers = []

        for (let row = 0; row < this.matrix.length; row++) {
            for (let column = 0; column < this.matrix[row].length; column++) {
                if (this.matrix[row][column] === 1 && !this.visited.has(`${row},${column}`)) {
                    this.rivers.push(this.findRivers(row, column));
                }
            }
        }

        return this.rivers;
    }
}

const riverSizes = (new FindRivers(matrix1)).search();
console.log("River sizes:", riverSizes);