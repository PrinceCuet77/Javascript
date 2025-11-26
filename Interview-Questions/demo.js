class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }

  getName = function () {
    console.log(this.fname + ' ' + this.lname);
  };
}

const person1 = new Person('Rezoan', 'Shakil', '9999');
console.log(person1);

const person2 = new Person('Shakib', 'Al-hasan', '8888');
console.log(person2);
