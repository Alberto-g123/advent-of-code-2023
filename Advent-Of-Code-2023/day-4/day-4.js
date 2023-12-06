const fs = require('fs');
const fileName = "day4-text.txt";

const file = fs.readFileSync(fileName, 'utf8');
const games = file.split(/\r?\n/);
let points = 0;
let cards = [];

for (let i = 0; i < games.length; i++) {
    let gameData = games[i].substring(games[i].indexOf(":") + 1);
    let parts = gameData.split("|");
    let winningNumbers = parts[0].trim().split(" ");
    let winningLookup = {};
    let count = 0;
    for (let i = 0; i < winningNumbers.length; i++) {
        if (winningNumbers[i] == "") {
            continue;
        }
        let number = Number(winningNumbers[i]);
        winningLookup[number] = true;
    }
    let myNumbers = parts[1].trim().split(" ");
    for (let i = 0; i < myNumbers.length; i++) {
        let number = Number(myNumbers[i]);
        if (winningLookup[number]) {
            count++
        }
    }

    cards.push({name: i, matches: count, processed: false});
    if(count > 0) {
        points = points + 2 ** (count - 1);
    }
}

console.log(`Part 1: ${points}`);

let index = 0;
while(index < cards.length) {
    let name = cards[index].name;
    for(let i = 0; i < cards[index].matches; i++) {
        cards.push({name: cards[name + i + 1].name, matches: cards[name + i + 1].matches, processed: false});
    }
    cards[index].processed = true;
    index++;
}

console.log(`Part 2: ${cards.length}`);