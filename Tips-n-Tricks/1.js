// Remove falsy values from any array
const miscellaneous = ['A', '', 'a', NaN, 'I']
// console.log(miscellaneous.filter(Boolean))

// Convert any value to boolean
// console.log(!!'Mashrafi')
// console.log(!!undefined)
// console.log(!!1)
// console.log(!!0)

// Resizing any array
// let letters = ['A', 'N', 'L', 'I']
// console.log(letters)

// letters.length = 3

// console.log(letters)

// How to flattern a multi-dimensional array
// let letters = ['A', ['AA', 'BB'], 'C', ['AAA', 'CCC']]
// console.log(letters.flat())

// let anotherLetters = ['A', ['AA', 'BB', ['AAA', 'DDD']], 'C', ['AAA', 'CCC']]
// console.log(anotherLetters.flat())
// console.log(anotherLetters.flat(Infinity))

// Short Conditional
// const captain = 'Mashrafi2'

// if (captain !== 'Mashrafi') console.log('I hate Bangladesh')

// captain === 'Mashrafi' || console.log('I hate Bangladesh')

// Replace all occurances of a string
const str = 'I hate Office. As I need to go to office at early morning'

// g - global, i - case sen
console.log(str.replace(/Office/ig, 'BJIT'))