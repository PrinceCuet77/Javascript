const number1 = [1, 2, 3]
const number2 = [10, 20, 30]
const number3 = [100, 200, 300]

const result = number1.concat(number2)
console.log(result) // Output: [1, 2, 3, 10, 20, 30]

const result2 = number1.concat(number2, number3)
console.log(result2) // Output: [1, 2, 3, 10, 20, 30, 100, 200, 300]
