/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// function vowelsCounter(text) {
//     // Code goes here
// }

const vowels = ['a', 'e', 'i', 'o', 'u']

//An Iterative Approach
function vowelsCounter(text) {
    // initialize counter
    let counter = 0
    // Loop through the text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter
}

//Using Regular Expressions
function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi)

    //check if matching instances exist then calculate length
    if (matchingInstances) {
        // return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}


module.exports = vowelsCounter;
