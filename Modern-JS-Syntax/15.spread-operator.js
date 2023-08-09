// const number = [1, 2, 3]

// const newNumber = [...number, 10, 20]

// console.log(number) // Output: [1, 2, 3]
// console.log(newNumber) // Output: [1, 2, 3, 10, 20]

// number.push(100)

// console.log(number) // Output: [1, 2, 3, 100]
// console.log(newNumber) // Output: [1, 2, 3, 10, 20]

// const number2 = [11, 22, 33]

// const newNumber2 = [...number, 100, 200, ...number2]

// console.log(newNumber2) // Output: [1, 2, 3, 100, 200, 11, 22, 33]

// // ----------------- Object ----------------------
// const person = {
//   name: 'Prince',
//   age: 22,
// }

// const newPerson = { ...person, position: 'Software Engineer', salary: '15k' }

// console.log(newPerson)

const numbers = [1, 2, 3]

const newNumber = numbers

console.log(numbers) // Output: [1, 2, 3]
console.log(newNumber) // Output: [1, 2, 3]

numbers[0] = 100

console.log(numbers) // Output: [100, 2, 3]
console.log(newNumber) // Output: [100, 2, 3]
