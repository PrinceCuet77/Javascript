// const myArray = [] //  Literal syntax
// const myArray2 = new Array() // Constructor syntax

// let mySet = new Set()
// console.log(mySet) // Output: Set(0) {}

// // Insert an element
// // mySet.add(10)
// // mySet.add('Bangladesh')

// // console.log(mySet) // Output: Set(2) { 10, 'Bangladesh' }

// mySet.add(5).add(6).add('Bangladesh')
// // mySet.size()

// console.log(mySet.size) // 3

// let myArray = [1, 2, 4, 4, 1, 3]
// let mySet = new Set('ABCCB')

// // Store only unique values
// console.log(mySet) // Output: Set(3) { 'A', 'B', 'C' }

// for (let value of mySet) {
//   console.log(value)
// }

// // Output:
// // A
// // B
// // C

// // Method 1 (Recommended - easy to use)
// console.log([...mySet]) // Output: [ 'A', 'B', 'C' ]

// // Method 2
// console.log(Array.from(mySet)) // Output: [ 'A', 'B', 'C' ]

// let myArray = [1, 2, 3, 4, 5, 5, 5, 5, 6, 5]

// console.log([...new Set(myArray)]) // Output: [ 1, 2, 3, 4, 5, 6 ]

const a = new Set([1, 2, 3])
const b = new Set([1, 3, 5])

const union = new Set([...a], [...b])
console.log(union) // Output: Set(3) { 1, 2, 3 }

const intersection = new Set([...a].filter((x) => b.has(x)))
console.log(intersection) // Output: Set(3) { 1, 3 }

const difference = new Set([...a].filter((x) => !b.has(x)))
console.log(difference) // Output: Set(1) { 2 }
