// for in loop
const myObj = {
  name: 'Javascript',
  estd: '1995',
  founder: 'Brendan Eich',
}

for (property in myObj) {
  // console.log(`Property: ${property}, and Value: ${myObj[property]}`)
}

const myArray = [10, 20, 30, 40, 50]

for (value in myArray) {
  // console.log(value)
}

const str = 'Prince'
for (ch in str) {
  // console.log(ch)
}

// for of loop
// Array
const myArray1 = [10, 20, 30, 40, 50]

for (value of myArray1) {
  console.log(value)
}

const str1 = 'Prince'
for (ch of str1) {
  console.log(ch)
}
