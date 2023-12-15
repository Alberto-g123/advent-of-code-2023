const fs = require('fs');
const fileName = "day13-text.txt";

let answer = 0;

const input = fs.readFileSync(fileName, 'utf8');
const patterns = input.split("\r\n\r\n");
let p = 0;
patterns.forEach((pattern) => {
    const rows = pattern.split("\r\n");
    const grid = rows.map((rows) => rows.split(""));
    const flipped = grid[0].map((col,c) => grid.map((row, r) => grid[r][c]));
    const cols = flipped.map((col) => col.join(""));

    let fr = 0; let fc = 0;

    for(let c = 1;c < cols.length; c++) {
        let maxLength = Math.min(c, cols.length - c);
        let left = cols.slice(c - maxLength, c);
        let right = cols.slice(c, c + maxLength);
        right.reverse();
        if(left.toString() === right.toString()) {
            answer += c;
            fc = c;
        }
    }        
    for(let r = 1; r < rows.length; r++) {
        let maxLength = Math.min(r, rows.length - r);
        let top = rows.slice(r - maxLength, r);
        let bottom = rows.slice(r, r + maxLength);
        bottom.reverse();
        if(top.toString() === bottom.toString()) {
            answer += (r * 100);
            fr = r;
        }
    }
    p++;
});


console.log("Part 1:", answer);