const fs = require('fs');
const fileName = "day14-text.txt";
let file = fs.readFileSync(fileName, 'utf8').split(/\r\n/);
const grids1 = file.map((line) => line.split(""));
let grids = file.map((line) => line.split(""));
let part1 = 0;

north(grids);

console.log("part 1:", part1)



function north(grid){
    for(let col = 0; col < grid[0].length; col++){
        let empty = 0;
        for(let row = 0; row < grid.length; row++){
            let rock = grid[row][col];
            switch(rock) {
                case '.':
                    break;
                case '#':
                    empty = row + 1;
                    break;
                case 'O':
                    if(row != empty){
                        grid[empty][col] = 'O';
                        grid[row][col] = '.';
                    }
                    empty++;
                    break;
            }
        }
    }

    for(let row = 0; row < grid.length; row++){
        let score = grid.length - row;
        let count = grid[row].filter((cell) => cell == 'O').length;
        part1 += (score * count);
    }

    grids = grid;

}
// console.log(grids1)
console.log(grids)
