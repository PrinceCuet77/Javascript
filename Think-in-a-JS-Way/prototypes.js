// const personMethods = {
//   eat() {
//     console.log('Person is eating.');
//   },

//   sleep() {
//     console.log('Person is sleeping.');
//   },
// };

// // constructor function
// // all the functions by default constructor functions
// // convention: write capital letter
// function Person(name, age) {
//   let person = {};

//   person.name = name;
//   person.age = age;
//   person.eat = personMethods.eat; // Object reference
//   person.sleep = personMethods.sleep; // Object reference

//   return person;
// }

// const sakib = Person('sakib', 32);
// const tamim = Person('tamim', 22);

const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4)) // 24