const fs = require('fs');
const fileName = "day8-text.txt";

const file = fs.readFileSync(fileName, 'utf8').split(/\r\n\r\n/);
const pattern = file[0];
const network = file[1].split(/\n/);
let locationOfString = 0;
let patternIndex = 0;
let locationOfZZZ = 0;
let list = [];

locateString("AAA");

while(!list.includes('ZZZ')){
    const findingZZZ = network[locationOfString].split(" = ")[1].split(',')
    const left = findingZZZ[0].replace(/\W+/g, '');
    const right = findingZZZ[1].replace(/\W+/g, '');
    
    if(patternIndex > pattern.length - 1){
        patternIndex = 0;
    }

    
    if(pattern[patternIndex] === 'L'){
        locateString(left)
        list.push(left)
    } else if (pattern[patternIndex] === 'R') {
        locateString(right);
        list.push(right)
    }
    patternIndex++
}


function locateString(string){
    for(let i = 0; i < network.length; i++){
        let findingString = network[i].split(" = ")[0];
        if(findingString === string){
            locationOfString = i;
            break;
        }
    }
}


console.log(list.length)

