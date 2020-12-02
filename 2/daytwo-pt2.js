const fs = require("fs")
const { setFlagsFromString } = require("v8")

const input = fs.readFileSync("input.txt").toString().split("\n")

let stats = {
    valid: 0,
    invalid: 0
}

input.forEach(line => {
    const lineParts = line.split(" ")
    const policy = {
        first: parseInt(lineParts[0].split("-")[0]),
        last: parseInt(lineParts[0].split("-")[1]),
        letter: lineParts[1].replace(":", ""),
        password: lineParts[2]
    }

    const firstIsLetter = policy.password[policy.first - 1] === policy.letter
    const lastIsLetter = policy.password[policy.last - 1] === policy.letter

    if ((firstIsLetter && lastIsLetter) || (!firstIsLetter && !lastIsLetter)) {
        return stats.invalid++
    }
    return stats.valid++
})

console.log(`❌️ Invalid Passwords: ${stats.invalid}\n⛳ Valid Passwords: ${stats.valid}`)