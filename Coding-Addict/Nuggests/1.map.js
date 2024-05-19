// Returns a new array
// Does not change the size of original array (unlike filter)
// Uses values from original array when making new one

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
]

const ages = people.map((person) => person.age)
console.log(ages) // Output: [20, 25, 30]

const newPeople = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    oldAge: person.age * 2,
  }
})
console.log(newPeople)
// Output:
// [
//   { name: 'BOB', oldAge: 40 },
//   { name: 'ANNA', oldAge: 50 },
//   { name: 'SUSY', oldAge: 60 }
// ]
