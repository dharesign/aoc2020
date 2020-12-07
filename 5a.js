const data = require("./5.json");

function decode(qr) {
    let row = 0;
    if (qr[0] === "B") row += 64;
    if (qr[1] === "B") row += 32;
    if (qr[2] === "B") row += 16;
    if (qr[3] === "B") row +=  8;
    if (qr[4] === "B") row +=  4;
    if (qr[5] === "B") row +=  2;
    if (qr[6] === "B") row +=  1;

    let col = 0;
    if (qr[7] === "R") col += 4;
    if (qr[8] === "R") col += 2;
    if (qr[9] === "R") col += 1;

    return row * 8 + col;
}

let ids = data.map(decode);

let max = 0;
for (let id of ids) {
    if (id > max) max = id;
}

console.log(max);
