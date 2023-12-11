const fs = require('fs');
const fileName = "day9-text.txt";

const file = fs.readFileSync(fileName, 'utf8').split(/\n/);
const allEqual = arr => arr.every(val => val === arr[0]);
let nextList = [];
let part1 = 0;
let part2 = 0;


file.forEach(data => {
    const line = data.split(" ").map(Number);
    nextList = [];
    let index = 0;
    let extrapolate = 0;

    makeNextList(line);

    while(!allEqual(nextList[nextList.length - 1])){
        makeNextList(nextList[index])
        index++
    }

    for(let i = nextList.length - 1; i >= 0; i--){
        extrapolate += nextList[i][nextList[i].length - 1]
    }

    part1 += extrapolate + line[line.length - 1];

})

console.log("part 1: " +part1)


file.forEach(data => {
    const line = data.split(" ").map(Number);
    nextList = [];
    let index = 0;
    let extrapolate = 0;

    makeNextList(line);

    while(!allEqual(nextList[nextList.length - 1])){
        makeNextList(nextList[index])
        index++
    }
    extrapolate = nextList[nextList.length - 1][0]

    for(let i = nextList.length - 1; i > 0; i--){
        extrapolate = nextList[i - 1][0] - extrapolate;
    }

    part2 += line[0] - extrapolate;

})

console.log("part 2: " + part2)





function makeNextList(list) {
    let newList = []

    for(let i = 0; i < list.length; i++){
        if(i !== list.length - 1){
            newList.push(list[i + 1] - list[i]);
        }else{
            nextList.push(newList)
        }
    }
}