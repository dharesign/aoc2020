const data = require("./6.json");

let sum = 0;

for (let group of data) {
    let yes = new Set();

    for (let people of group) {
        for (let question of people) {
            yes.add(question);
        }
    }

    sum += yes.size;
}

console.log(sum);
