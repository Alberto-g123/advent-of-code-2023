const fs = require('fs');
const fileName = "day6-text.txt";

const file = fs.readFileSync(fileName, 'utf8');

let time = file.split(/\n/)[0].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ",").split(",").filter(value => value).map(Number);
let distances = file.split(/\n/)[1].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ",").split(",").filter(value => value).map(Number);

let results = [];

for(let i = 0; i < time.length; i++){
    let count = 0;
    for(let msHeldDown = 0; msHeldDown < time[i]; msHeldDown++){
        totalTime = time[i];
        distance = distances[i];
        remainingTime = totalTime - msHeldDown;
        distanceTraveled = remainingTime * msHeldDown;
        if(distanceTraveled > distance){
            count ++
        }
    }
    results.push(count);

}
console.log(`Part 1: ${results.reduce((a,b)=>a*b)}`)


// solution 2

let time2 = Number(file.split(/\n/)[0].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ""));
let distances2 = Number(file.split(/\n/)[1].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ""));
let solution2 = 0;
for(let msHeldDown = 0; msHeldDown < time2; msHeldDown++){
    totalTime = time2;
    distance = distances2;
    remainingTime = totalTime - msHeldDown;
    distanceTraveled = remainingTime * msHeldDown;
    if(distanceTraveled > distance){
        solution2 ++
    }
}
console.log(`Part 2: ${solution2}`)