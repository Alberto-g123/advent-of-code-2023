const fs = require('fs');
var solution1 = 0;
var solution2 = 0;
const numberWordFormat = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
fs.readFile('day1-text.txt', (err, data) => {
    if(err) throw err;
    const allLines = data.toString().split(/\r\n|\n/);

    allLines.forEach((line) => {
        
        let solution1Line = line;
        let solution2Line = line;

        for(var i = 0; i < numberWordFormat.length; i++){
            if(solution2Line.includes(numberWordFormat[i])){
                solution2Line = solution2Line.replaceAll(numberWordFormat[i], numberWordFormat[i]+ (i + 1) + numberWordFormat[i]);
            }
        }

        var solution1Number = solution1Line.replace(/[^0-9.]/g, '')
        var solution2Number = solution2Line.replace(/[^0-9.]/g, '')

        if(solution1Number.length > 1){
            solution1 += Number(solution1Number[0] + solution1Number[solution1Number.length -1])
        } else{
            solution1 += Number(solution1Number[0] + solution1Number[0])
        }

        if(solution2Number.length > 1){
            solution2 += Number(solution2Number[0] + solution2Number[solution2Number.length -1]);
        } else{
            solution2 += Number(solution2Number[0] + solution2Number[0]);
        }

    })
    console.log(`Part 1: ${solution1}`)
    console.log(`Part 2: ${solution2}`)
})