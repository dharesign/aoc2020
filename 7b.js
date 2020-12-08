const rules = require("./7.json");

const bagContents = {};

for (rule of rules) {
    let [_, bag, bagRules] = rule.match(/(.*) bags contain (.*)/);

    bagRules = bagRules.replace(".", "");

    bagContents[bag] = [];

    if (bagRules === "no other bags") continue;

    for (bagRule of bagRules.split(", ")) {
        let [_, count, bag2] = bagRule.match(/(\d+) (.*) bags?/);

        for (let i = 0; i < count; ++i) {
            bagContents[bag].push(bag2);
        }
    }
}

let count = 0;
let stack = ["shiny gold"];

while (stack.length) {
    let item = stack.pop();

    count += bagContents[item].length;

    for (let bag of bagContents[item]) {
        stack.push(bag);
    }
}

console.log(count);
