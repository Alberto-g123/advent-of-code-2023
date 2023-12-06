const fs = require('fs');
const fileName = "day3-text.txt";

const file = fs.readFileSync(fileName, 'utf8');

let sum = file.match(/(\d*(?<=[^\d.\n\r].{140,142})\d+)|(\d+(?=.{140,142}[^\d.\n\r])\d*)|((?<=[^\d.\n\r])\d+)|(\d+(?=[^\d.\n\r]))/gs)?.reduce((p,c) => p+ +c, 0);
    console.log(sum)