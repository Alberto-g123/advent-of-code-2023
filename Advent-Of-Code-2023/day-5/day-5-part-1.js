const fs = require('fs');
const fileName = "day5-text.txt";

const inputs = {
    seedToSoil: [],
    soilToFertilizer: [],
    fertilizerToWater: [],
    waterToLight: [],
    lightToTemperature: [],
    temperatureToHumidity: [],
    humidityToLocation: [],
}

const maps = {
    seedToSoil: [],
    soilToFertilizer: [],
    fertilizerToWater: [],
    waterToLight: [],
    lightToTemperature: [],
    temperatureToHumidity: [],
    humidityToLocation: [],
}

function processInputs(inputs, map) {
    for( let i = 0; i < inputs.length; i++) {
        let parts = inputs[i].split(" ").map(Number);
        let destStart = parts[0];
        let sourceStart = parts[1];
        let rangeLength = parts[2];

        map.push({ destStart: destStart, sourceStart: sourceStart, rangeLength: rangeLength});
    }
}

function mapValue(source, map) {
    let dest = source;
    for(let i = 0; i < map.length; i++) {
        let range = map[i];
        if (source >= range.sourceStart && source < range.sourceStart + range.rangeLength) {
            dest = range.destStart + (source - range.sourceStart);
            break;
        }
    }

    return dest;
}

function seedToLocation(seed, maps) {
    let soil, fertilizer, water, light, temperature, humidity, location;

    soil = mapValue(seed, maps.seedToSoil);
    fertilizer = mapValue(soil, maps.soilToFertilizer);
    water = mapValue(fertilizer, maps.fertilizerToWater);
    light = mapValue(water, maps.waterToLight);
    temperature = mapValue(light, maps.lightToTemperature);
    humidity = mapValue(temperature, maps.temperatureToHumidity);
    location = mapValue(humidity, maps.humidityToLocation);
    
    return location;
}

const file = fs.readFileSync(fileName, 'utf8');
const lines = file.split(/\r?\n/);

let activeInput = null;
for (let i = 0; i < lines.length; i++) {
    if(lines[i].length == 0) {
        continue;
    }
    
    if (lines[i].startsWith("seeds: ")) {
        inputs.seed = lines[i].substring(7).split(" ").map(Number);
    } else if (lines[i].startsWith("seed-to-soil")) {
        activeInput = "seedToSoil";
    } else if (lines[i].startsWith("soil-to-fertilizer")) {
        activeInput = "soilToFertilizer";
    } else if (lines[i].startsWith("fertilizer-to-water")) {
        activeInput = "fertilizerToWater";
    } else if (lines[i].startsWith("water-to-light")) {
        activeInput = "waterToLight";
    } else if (lines[i].startsWith("light-to-temperature")) {
        activeInput = "lightToTemperature";
    } else if (lines[i].startsWith("temperature-to-humidity")) {
        activeInput = "temperatureToHumidity";
    } else if (lines[i].startsWith("humidity-to-location")) {
        activeInput = "humidityToLocation";
    } else {
        inputs[activeInput].push(lines[i]);
    }
}

processInputs(inputs.seedToSoil, maps.seedToSoil);
processInputs(inputs.soilToFertilizer, maps.soilToFertilizer);
processInputs(inputs.fertilizerToWater, maps.fertilizerToWater);
processInputs(inputs.waterToLight, maps.waterToLight);
processInputs(inputs.lightToTemperature, maps.lightToTemperature);
processInputs(inputs.temperatureToHumidity, maps.temperatureToHumidity);
processInputs(inputs.humidityToLocation, maps.humidityToLocation);

const locations = [];
for(let i = 0; i < inputs.seed.length; i++) {
    locations.push(seedToLocation(inputs.seed[i], maps));
}

let min = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < locations.length; i++) {
    if (locations[i] < min) {
        min = locations[i];
    }
}

console.log(`Part 1 min distance: ${min}`);