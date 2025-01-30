/**
 *
 P...A...H...N   0,   4,    8,     12,
 A.P.L.S.I.I.G   1,3, 5, 7, 9, 11, 13
 Y...I...R...    2,   6,   10,
 *
 *
 *
 P..I..N   0,      6,      12,
 A.LS.IG   1,   5, 7,   11,13,
 YA.HR.    2, 4,   8, 10,  14,
 P..I..    3,      9,      15,
 *

 P...H.   0.  0,    8,
 A..SI.   1.  1,  7,9,
 Y.I.R.   2.  2, 6, 10,
 PL..IG   3.  3,5,  11,13,
 A...N.   4.  4,    12,

 *

 P....R
 A...II
 Y..H.N
 P.S..G
 AI....
 L.....
 *
 P.....N
 A....IG
 Y...R..
 P..I...
 A.H....
 LS.....
 I......
 *
 */

function buildGrid(row) {
    return
}

function convert(s, numRows) {
    if (numRows <= 1) return s;
    let grid = new Array(numRows).fill('');
    let curRow = 0;
    let direction = -1; // -1 is going down, 1 is going up

    for (let str_pointer = 0; str_pointer < s.length; str_pointer++) {
        grid[curRow] += s.charAt(str_pointer);
        (direction < 1) ? curRow++ : curRow--;
        if (curRow === (numRows - 1) || curRow === 0) {
            direction = direction * -1;
        }
    }
    return grid.join('');
}

const convert2 = (s, numRows) => {
    if (numRows <= 1) return s;
    let grid = new Array(numRows).fill('');
    let add = -1;
    let curRow = 0
    s.split('').forEach((ltr, i) => {
        grid[curRow] += ltr;
        add = (i % (numRows - 1)) ? add : add * -1;
        curRow = curRow + add;
    });
    return grid.join('');
}




const result = convert2('PAYPALISHIRING', 3);
console.log(result);
console.log(result === "PAHNAPLSIIGYIR");
