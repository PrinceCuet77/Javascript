const calculate = (value1, value2, callback) => {
  const sum = value1 + value2

  if (callback) callback(sum)
}

calculate(4, 5, (sum) => {
  console.log(`The result is : ${sum}`)
}) // Output: The result is : 9
