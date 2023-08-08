const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((prev, current) => {
  return prev + current
})

console.log(sum)