const rules = require("./7.json");

const bagContainers = {};

for (rule of rules) {
    let [_, bag, bagRules] = rule.match(/(.*) bags contain (.*)/);

    bagRules = bagRules.replace(".", "");

    if (bagRules === "no other bags") continue;

    for (bagRule of bagRules.split(", ")) {
        let [_, count, bag2] = bagRule.match(/(\d+) (.*) bags?/);

        if (undefined === bagContainers[bag2]) {
            bagContainers[bag2] = [];
        }

        bagContainers[bag2].push(bag);
    }
}

let containers = new Set();
let seen = [];
let stack = ["shiny gold"];

while (stack.length) {
    let item = stack.pop();

    if (seen.indexOf(item) !== -1) continue;

    seen.push(item);

    for (let bag of bagContainers[item] ?? []) {
        containers.add(bag);

        stack.push(bag);
    }

    console.log(`${containers.size}: ${item} contained by ${JSON.stringify(bagContainers[item])}`);
}

console.log(containers.size);
