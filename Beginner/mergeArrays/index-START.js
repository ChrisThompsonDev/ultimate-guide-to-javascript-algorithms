/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


// Using Sets
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    // return Array.from(new Set([...jointArray]))
    return [...new Set([...jointArray])]
}

// Using .filter()
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

// Using .reduce()
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    const uniqueArray = jointArray.reduce((newArray, item) => {
        if (newArray.includes(item)) {
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
        
    return uniqueArray
}

module.exports = mergeArrays