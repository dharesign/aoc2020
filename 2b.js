const data = require("./2.json");

let valid = 0;

for (const item of data) {
    const [_, pos1A, pos2A, letter, password] = item.match(/(\d+)-(\d+) ([a-z]): (.*)/);
    const pos1 = parseInt(pos1A, 10);
    const pos2 = parseInt(pos2A, 10);

    if ((password[pos1-1] === letter && password[pos2-1] !== letter) ||
        (password[pos2-1] === letter && password[pos1-1] !== letter)) {
        valid += 1;
        console.log("valid", pos1, pos2, letter, password);
    }
    else {
        console.log("invalid", pos1, pos2, letter, password);
    }
}

console.log(valid);
