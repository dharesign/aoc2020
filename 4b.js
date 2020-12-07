const data = require("./4.json");

let valid = 0;

for (let passport of data) {
    if (passport.byr === undefined) continue;
    let byr = parseInt(passport.byr, 10);
    if (byr < 1920 || byr > 2002) continue;

    if (passport.iyr === undefined) continue;
    let iyr = parseInt(passport.iyr, 10);
    if (iyr < 2010 || iyr > 2020) continue;

    if (passport.eyr === undefined) continue;
    let eyr = parseInt(passport.eyr, 10);
    if (eyr < 2020 || eyr > 2030) continue;

    if (passport.hgt === undefined) continue;
    if (!passport.hgt.match(/\d+(cm|in)/)) continue;
    let hgt = parseInt(passport.hgt, 10);
    if (passport.hgt.indexOf("cm") !== -1 &&
        (hgt < 150 || hgt > 193)) continue;
    if (passport.hgt.indexOf("in") !== -1 &&
        (hgt < 59 || hgt > 76)) continue;

    if (passport.hcl === undefined) continue;
    if (!passport.hcl.match(/#[0-9a-f]{6}/)) continue;

    if (passport.ecl === undefined) continue;
    if (passport.ecl !== "amb" &&
        passport.ecl !== "blu" &&
        passport.ecl !== "brn" &&
        passport.ecl !== "gry" &&
        passport.ecl !== "grn" &&
        passport.ecl !== "hzl" &&
        passport.ecl !== "oth") continue;

    if (passport.pid === undefined) continue;
    if (!passport.pid.match(/^\d{9}$/)) continue;

    valid += 1;
}

console.log(valid);
