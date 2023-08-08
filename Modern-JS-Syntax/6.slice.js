const number = [10, 20, 30, 40, 50, 60]

const result = number.slice(1, 3)
console.log(result) // Output: [20, 30]

// [10, 20, 30, 40, 50, 60]
//      ^   ^
//      1   3
//     1st 2nd

const result2 = number.slice(-2, 5)
console.log(result2) // Output: [50]

// [10, 20, 30, 40, 50, 60]
//                  ^
//                 -2 - 1st
//                  5 - 2nd
