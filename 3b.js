const map = require("./3.json");

function check(rowI, colI) {
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

    return treesHit;
}

console.log(check(1, 1) *
            check(1, 3) *
            check(1, 5) *
            check(1, 7) *
            check(2, 1));
