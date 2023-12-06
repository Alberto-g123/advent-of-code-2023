const fs = require('fs');
const fileName = "day2-text.txt";

const file = fs.readFileSync(fileName, 'utf8');

const line = file.split("\n")
let solution1 = 0;
let solution2 = 0;
let count = 1;
line.forEach(game => {
    
    const splittingGames = game.replace(/Game ([0-9]|[0-9][0-9]|[0-9][0-9][0-9]): /, '').replaceAll(", ", ",").replaceAll("; ", ';').split(/,|;/)
    let gameIsValid = true;

    let red = [];
    let blue = [];
    let green = [];

    splittingGames.forEach(cube => {
        if(cube.includes('green')){
            green.push(Number(cube.split(' ')[0]))
        }
        if(cube.includes('red')){
            red.push(Number(cube.split(' ')[0]))
        }
        if(cube.includes('blue')){
            blue.push(Number(cube.split(' ')[0]))
        }
    })

    red.forEach(number => (number > 12)? gameIsValid = false: null)
    blue.forEach(number => (number > 14)? gameIsValid = false: null)
    green.forEach(number => (number > 13)? gameIsValid = false: null)

    if(gameIsValid === true){
        solution1 += count
    }
    count++

    solution2 += Math.max(...red) * Math.max(...blue) * Math.max(...green);

})
console.log(`Part 1: ${solution1}`)
console.log(`Part 2: ${solution2}`)