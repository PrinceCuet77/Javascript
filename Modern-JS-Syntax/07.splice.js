const number = [10, 20, 30, 40, 50, 60]

const result = number.splice(1, 2, 100, 200, 300)
console.log(result) // Output: [20, 30]
console.log(number) // [10, 100, 200, 300, 40,  50,  60]

// [10, 20, 30, 40, 50, 60]
//      ^   
//      1   
//     1st
//     ^-----^
//       2nd
//     100, 200, 300
//     Rest parameters

const number1 = [10, 20, 30, 40, 50, 60]
const result1 = number1.splice(-2, 5, 100, 200)
console.log(result1) // Output: [50, 60]
console.log(number1) // [10, 20, 30, 40, 100, 200] 

// [10, 20, 30, 40, 50, 60]
//                  ^   
//                 -2   
//                 1st
//                 ^-----^
//                   2nd
//                 100, 200, 300
//                 Rest parameters
