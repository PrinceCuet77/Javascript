const user = {
  id: '123',
  name: 'Prince',
  age: 23,
}

const { education: { degree } = {} } = user

console.log(degree) // Output: undefined

// Array
const numbers = [1, 2, [100, 200, 300, 400], 4, 5, 6]

const [, , [, a, b]] = numbers

console.log(a) // Output: 2
console.log(b) // Output: 6

var first = 10
var second = 20

[second, first] = [first, second]

console.log(first, second) // Output: 200
console.log(second) // Output: 100
