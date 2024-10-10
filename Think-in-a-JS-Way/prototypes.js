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

// GOOD
const shapeConfig = {
  type: 'object',
  width: 150,
  // height: null,
};

function createShape(config) {
  config = Object.assign(
    {
      type: 'circle',
      width: 150,
      height: 100,
    },
    config
  );

  console.log(config); // Output:  { type: 'object', width: 150, height: 300 }
}

createShape(shapeConfig);
console.log(shapeConfig); // Output:  { type: 'object', width: 150 }
