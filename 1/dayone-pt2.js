const fs = require("fs")

const input = fs.readFileSync("input.txt").toString().split("\n")

const correctAnswers = []

input.forEach(x => {
    input.forEach(y => {
        input.forEach(z => {
            if (parseInt(x) + parseInt(y) + parseInt(z) === 2020) {
                if (correctAnswers.includes(parseInt(x) + parseInt(y) + parseInt(z))) return
                correctAnswers.push(parseInt(x) + parseInt(y) + parseInt(z))
                console.log("❗️ Found solution:", x + ", ", y, "and", z, "equal 2020.\n⛳️ The flag is", x * y * z + ".")
            }
        })
    })
})