const fs = require("fs")

const input = fs.readFileSync("input.txt").toString().split("\n")

let stats = {
    valid: 0,
    invalid: 0
}

input.forEach(line => {
    const lineParts = line.split(" ")
    const policy = {
        min: parseInt(lineParts[0].split("-")[0]),
        max: parseInt(lineParts[0].split("-")[1]),
        letter: lineParts[1].replace(":", ""),
        password: lineParts[2]
    }

    const timesLetterInPassword = policy.password
        .split("")
        .filter(x => x === policy.letter)
        .join("").length

    if (timesLetterInPassword > policy.max || timesLetterInPassword < policy.min) {
        return stats.invalid++
    }
    return stats.valid++
})

console.log(`❌️ Invalid Passwords: ${stats.invalid}\n⛳ Valid Passwords: ${stats.valid}`)