const fs = require('fs');
const fileName = "day15-text.txt";
let file = fs.readFileSync(fileName, 'utf8').split(",");


console.log('part 1:', p1())
console.log("part 2:", p2())



function p1() {
    return file.reduce((a,b) => a + hash(b), 0)
}

function p2(){
    const box = Array(256).fill().map(()=>({}))
    file.map(line => {
        if (line.slice(-1) == '-') {
            const str = line.slice(0,-1)
            const hashNum = hash(str)
            delete  box[hashNum][str]
        } else {
            const str = line.slice(0,-2)
            const num = parseInt(line.slice(-1))
            const hashNum = hash(str)
            box[hashNum][str]=num
        }
    })
    let sum = 0
    for (let i=0; i < 256; i++) {
        let order = 1
        for (let key in box[i]) {
            sum += (i+1) * order++ * box[i][key]
        }
    }
    return sum
}

function hash(a, sum=0){
    for (let i = 0; i < a.length; i++) {
        sum += a.charCodeAt(i)
        sum = (sum * 17) % 256
    }
    return sum
}