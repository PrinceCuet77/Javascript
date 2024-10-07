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

const person = {
  name: 'Sakib',
  age: 32,
  favFood: ['Mango', 'Banana'],
};

// const person1 = { ...person };
const person1 = _.cloneDeep(person);

person.favFood.push('Kiwi');

console.log(person); // Output: { name: 'Sakib', age: 32, favFood: [ 'Mango', 'Banana', 'Kiwi' ] }
console.log(person1); // Output: { name: 'Sakib', age: 32, favFood: [ 'Mango', 'Banana', 'Kiwi' ] }
