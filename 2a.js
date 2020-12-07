const data = require("./2.json");

let valid = 0;

for (const item of data) {
    const [_, minA, maxA, letter, password] = item.match(/(\d+)-(\d+) ([a-z]): (.*)/);
    const min = parseInt(minA, 10);
    const max = parseInt(maxA, 10);

    const [...matches] = password.matchAll(new RegExp(letter, "g"));
    if (matches && matches.length >= min && matches.length <= max) {
        valid += 1;
    }
}

console.log(valid);
