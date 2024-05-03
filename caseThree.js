function isCircularPalindrome(word) {
    if (typeof word === "string") {
        let i = 0, j = word.length - 1
        while (i < j && j > i) {
            if (word[i].toLowerCase() !== word[j].toLowerCase()) {
                return false
            }
            i++
            j--
        }
        return true
    }

    throw new Error("argument is not a string.")
}

console.log(isCircularPalindrome("racecaracecar"))
console.log(isCircularPalindrome("rotorotorotor"))
console.log(isCircularPalindrome("hello world"))
console.log(isCircularPalindrome("mAlAyAlaM"))
console.log(isCircularPalindrome("m3lAyAl3M"))
console.log(isCircularPalindrome("abcabca"))