const myObj = {
  name: 'Javascript',
  estd: '1995',
  founder: 'Brendan Eich',
}

const keys = Object.keys(myObj)
console.log(keys) // Output: [ 'name', 'estd', 'founder' ]

const values = Object.values(myObj)
console.log(values) // Output: [ 'Javascript', '1995', 'Brendan Eich' ]

const entries = Object.entries(myObj)
console.log(entries)

// Output
// [
//   [ 'name', 'Javascript' ],
//   [ 'estd', '1995' ],
//   [ 'founder', 'Brendan Eich' ]
// ]

// Object shorten
const x = 10
const y = 15

const myObj2 = {
  name: 'Javascript',
  estd: '1995',
  founder: 'Brendan Eich',
  x,
  y
}

console.log(myObj2)