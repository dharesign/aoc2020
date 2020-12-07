const data = require("./4.json");

let valid = 0;

for (let passport of data) {
    if (passport.byr !== undefined &&
        passport.iyr !== undefined &&
        passport.eyr !== undefined &&
        passport.hgt !== undefined &&
        passport.hcl !== undefined &&
        passport.ecl !== undefined &&
        passport.pid !== undefined) {/* &&
        passport.cid !== undefined) {*/
        valid += 1;
    }
}

console.log(valid);
