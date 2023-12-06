const fs = require('fs');
const fileName = "day6-text.txt";

const file = fs.readFileSync(fileName, 'utf8');

let time = Number(file.split(/\n/)[0].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ""));
let distances = Number(file.split(/\n/)[1].split(":")[1].replace(/(\s+)/, '').replace(/(\s+)/g, ""));
let count = 0;
for(let msHeldDown = 0; msHeldDown < time; msHeldDown++){
    totalTime = time;
    distance = distances;
    remainingTime = totalTime - msHeldDown;
    distanceTraveled = remainingTime * msHeldDown;
    if(distanceTraveled > distance){
        count ++
    }
}
console.log(count)