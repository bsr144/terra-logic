function sumOfSelfNumbers(maxNumber) {
    if (typeof maxNumber === "number" && maxNumber > 0) {
        let result = 0
        for (let i = 1; i <= maxNumber; i++) {
            if (isSelfNumber(i)) {
                result += i
            }
        }
        return result
    }

    throw new Error("input is not a number/less than or equal to zero")
}

function d(n) {
    let result = n
    let strNumber = String(n).split("")
    for (const eachNumber of strNumber) {
        result += Number(eachNumber)   
    }
    return result
}

function isSelfNumber(numberToCheck) {
    for (let i = 1; i < numberToCheck; i++) {
        if (d(i) === numberToCheck) return false
    }
    return true
}

console.log(sumOfSelfNumbers(4999))