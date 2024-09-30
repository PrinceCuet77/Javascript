class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log('Person is eating.');
  }

  sleep() {
    console.log('Person is sleeping.');
  }
}



const sakib = new Person('Sakib', 35);
sakib.eat(); // Output: Person is eating.
