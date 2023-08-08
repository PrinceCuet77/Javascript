const numbers = [1, 2, 3, 4, 5]

let result = numbers.push(10)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10]
console.log(result) // Output: 6

result = numbers.push(10, 11, 12)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10, 10, 11, 12]
console.log(result) // Output: 9

result = numbers.push([100, 200])
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10, 10, 11, 12, [100, 200]]
console.log(result) // Output: 10
