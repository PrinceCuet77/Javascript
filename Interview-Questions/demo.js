const p1 = {
  fname: 'Rezoan',
  lname: 'Shakil',
  age: 12,
};

const p1Proxy = new Proxy(p1, {
  get: function (target, property) {
    if (property in target) {
      // return target[property];
      return Reflect.get(target, property);
    }
    return false;
  },
  set: function (target, property, value) {
    if (!(property in target)) {
      throw new Error(`Property ${property} does not exist`);
    }

    switch (property) {
      case 'fname':
      case 'lname':
        if (typeof value !== 'string') {
          throw new Error(`${property} must be a string`);
        }
        break;
      case 'age':
        if (typeof value !== 'number') {
          throw new Error(`${property} must be a number`);
        }
        if (value < 0 || value > 150) {
          throw new Error(`${property} must be between 0 and 150`);
        }
        break;
    }
    // target[property] = value;
    Reflect.set(target, property, value);
  },
});

console.log(p1Proxy.age); // Output: 12

p1Proxy.fname = 'John'; // Valid
p1Proxy.age = 30; // Valid

try {
  p1Proxy.age = -5; // Invalid
} catch (e) {
  console.error(e.message); // Output: age must be between 0 and 150
}

try {
  p1Proxy.lname = 123; // Invalid
} catch (e) {
  console.error(e.message); // Output: lname must be a string
}

console.log(p1Proxy); // Output: { fname: 'John', lname: 'Shakil', age: 30 }
