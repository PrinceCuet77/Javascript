const number = [10, 20, 30, 40, 50, 60]

const result = number.findIndex((value, index, arr) => {
  return value > 35
})

console.log(result) // Output: 3

const result2 = number.findIndex((value) => {
  return value > 100
})

console.log(result2)