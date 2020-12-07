const map = require("./3.json");

const rowI = 1;
const colI = 3;

let row = rowI;
let col = colI;

let treesHit = 0;

while (row < map.length) {
    if (map[row][col % map[row].length] === '#') {
        treesHit += 1;
    }

    row += rowI;
    col += colI;
}

console.log(treesHit);
