const fs = require("fs")

const input = fs.readFileSync("input.txt").toString().split("\n")

const correctAnswers = []

input.forEach(x => {
    input.forEach(y => {
        if (parseInt(x) + parseInt(y) === 2020) {
            if (correctAnswers.includes(parseInt(x) + parseInt(y))) return
            correctAnswers.push(parseInt(x) + parseInt(y))
            console.log("❗️ Found solution:", x, "and", y, "equal 2020.\n⛳️ The flag is", x * y + ".")
        }
    })
})