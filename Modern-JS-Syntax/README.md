# Modern Javascript Syntax

## Arrow function

---

- Normal function

```js
function number() {
  return 10
}

console.log(number()) // Output: 10
```

- Convert it into arrow function

```js
const number = () => {
  return 10
}

console.log(number()) // Output: 10
```

- Inside arrow function, contains single statement

```js
const number = () => 10

console.log(number()) // Output: 10
```

- If function takes parameters

```js
const number = (n) => n
const sum = (a, b) => a + b

console.log(number(100)) // Output: 100
console.log(sum(10, 20)) // Output: 30
```

- Outer and inner `this` indication remain same in arrow function
- For example:

```js
const javascript = {
  name: 'Javascript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function () {
    this.libraries.forEach(function (library) {
      console.log(`${this.name} loves ${library}`)
    })
  },
}

javascript.printLibraries()
```

- Output:

```text
undefined loves React
undefined loves Angular
undefined loves Vue
```

- But using arrow function, I can receive same content of the `this` object as outside

```js
const javascript = {
  name: 'Javascript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function () {
    this.libraries.forEach((library) => {
      console.log(`${this.name} loves ${library}`)
    })
  },
}

javascript.printLibraries()
```

- Output:

```text
Javascript loves React
Javascript loves Angular
Javascript loves Vue
```

- All normal functions in JS is itself a constructor function
- But arrow function does not

## Truthy / Falsy

---

- False values are `false`, `0`, `""`, `null`, `undefined` & `NaN`

## Ternary Operator

---

- Normal `if/else` statement

```js
const a = 5

let access
if (a > 5) {
  access = true
} else {
  access = false
}

console.log(access) // Output: false
```

- Using ternary operator

```js
const a = 5

let access = a > 5 ? true : false
console.log(access) // Output: false
```

- Multi-level `if/else` statement

```js
const age = 14

let type
if (age > 18) {
  type = 'Adult'
} else {
  if (age > 10) {
    type = 'Young'
  } else {
    type = 'Child'
  }
}

console.log(type) // Output: Young
```

- Using ternary operator, the code will be shorten

```js
const age = 14
const type = age > 18 ? 'Adult' : age > 10 ? 'Young' : 'Child'

console.log(type)
```

## `find()` Method

---

- Could't change the main array
- Return the first element for which the condition is `true`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = numbers.find((value) => {
  return value > 4
})

console.log(result) // Output: 5
```

- Inside `find()` function, not only access values of that array
- But also access the index and that array too

```js
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const result = numbers.find((value, index, arr) => {
  console.log(value, index, arr)
  return value > 40
})

console.log(result)
```

- Output:

```text
10 0 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
20 1 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
30 2 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
40 3 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
50 4 [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
50
```

- `find()` function takes 2nd parameter as `this`
- For example:

```js
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  test() {
    console.log('Hello')
  }

  exampleFunction() {
    const arr = [1, 2, 3]

    // Takes 2nd parameter
    arr.find(function () {
      this.test()
    }, this)
  }
}

const student = new Student('Prince', 10)
student.exampleFunction()
```

- Output:

```text
Hello
Hello
Hello
```

- If I use arrow function, no need to pass 2nd parameter as `this`

```js
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  test() {
    console.log('Hello')
  }

  exampleFunction() {
    const arr = [1, 2, 3]
    arr.find(() => {
      this.test()
    })
  }
}

const student = new Student('Prince', 10)
student.exampleFunction()
```

- Output: same as before

## `findIndex()` Method

---

- Could't change the main array
- Takes 3 parameters, i.e. `value`, `index` and `arr`
- Returns the array index where the condition is `true`
- If the condition is `false`, return `-1`

```js
const number = [10, 20, 30, 40, 50, 60]

const result = number.findIndex((value, index, arr) => {
  return value > 35
})

console.log(result) // Output: 3

const result2 = number.findIndex((value) => {
  return value > 100
})

console.log(result2) // Output: -1
```

- `findIndex()` function takes 2nd parameter as `this` too

## `filter()` Method

---

- Could't change the main array
- Takes 3 parameters, i.e. `value`, `index` and `arr`
- Returns a new array for which case the condition is `true`

```js
const number = [10, 20, 30, 40, 50, 60]

const result = number.filter((value) => {
  return value > 35
})

console.log(result) // Output: [40, 50, 60]
```

## `slice()` Method

---

- Couldn't change main array
- 1st parameter: +ve = start from front, -ve = start from end

```js
const number = [10, 20, 30, 40, 50, 60]

const result = number.slice(1, 3)
console.log(result) // Output: [20, 30]

// [10, 20, 30, 40, 50, 60]
//      ^   ^
//      1   3
//     1st 2nd

const result2 = number.slice(-2, 5)
console.log(result2) // Output: [50]

// [10, 20, 30, 40, 50, 60]
//                  ^
//                 -2 - 1st
//                  5 - 2nd
```

## `splice()` Method

- Change the main array
- 1st parameter: +ve = start from front, -ve = start from end
- 2nd parameter: how many element I want to remove
- Rest parameters: Which elements I want to replace
- Returns an array contains removed elements

```js
const number = [10, 20, 30, 40, 50, 60]

const result = number.splice(1, 2, 100, 200, 300)
console.log(result) // Output: [20, 30]
console.log(number) // Output: [10, 100, 200, 300, 40,  50,  60]

// [10, 20, 30, 40, 50, 60]
//      ^
//      1
//     1st
//     ^-----^
//       2nd
//     100, 200, 300
//     Rest parameters

const number1 = [10, 20, 30, 40, 50, 60]
const result1 = number1.splice(-2, 5, 100, 200)
console.log(result1) // Output: [50, 60]
console.log(number1) // Output: [10, 20, 30, 40, 100, 200]

// [10, 20, 30, 40, 50, 60]
//                  ^
//                 -2
//                 1st
//                 ^-----^
//                   2nd
//                 100, 200, 300
//                 Rest parameters
```

## `concat()` Method

---

- Couldn't change the main array
- Returns new array which contains all the elements
- I can concatenation multiple array

```js
const number1 = [1, 2, 3]
const number2 = [10, 20, 30]
const number3 = [100, 200, 300]

const result = number1.concat(number2)
console.log(result) // Output: [1, 2, 3, 10, 20, 30]

const result2 = number1.concat(number2, number3)
console.log(result2) // Output: [1, 2, 3, 10, 20, 30, 100, 200, 300]
```

## `push()` Method

---

- Modify the array
- Returns the new length of the modified array

```js
const numbers = [1, 2, 3, 4, 5]

let result = numbers.push(10)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10]
console.log(result) // Output: 6

result = numbers.push(10, 11, 12)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10, 10, 11, 12]
console.log(result) // Output: 9

result = numbers.push([100, 200])
console.log(numbers) // Output: [1, 2, 3, 4, 5, 10, 10, 11, 12, [100, 200]]
console.log(result) // Output: 10
```

## `map()` Method

---

- Couldn't change the main array
- Must return all the elements inside the arrow function
- Used to traverse the array

```js
const numbers = [10, 20, 30, 40]

const result = numbers.map((num) => {
  return 2 * num
})

console.log(result) // Output: [20, 40, 60, 80]
console.log(numbers) // Output: [10, 20, 30, 40]
```

## `reduce()` Method

- Couldn't change the main array
- 1st parameter: previously returned value
- 2nd parameter: current value
- 3rd parameter: index of the current value
- 4th parameter: takes the whole array

```js
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((prev, current) => {
  return prev + current
})

console.log(sum) // Output: 15
```

## `for in` loop

---

- Iterates an object, array and string
- Receive the propery for object & index for array and string

```js
// Object
const myObj = {
  name: 'Javascript',
  estd: '1995',
  founder: 'Brendan Eich',
}
for (property in myObj) {
  console.log(`Property: ${property}, and Value: ${myObj[property]}`)
}

// Array
const myArray = [10, 20, 30, 40, 50]
for (value in myArray) {
  console.log(value)
}

// String
const str = 'Prince'
for (ch in str) {
  console.log(ch)
}
```

- Output:

```text
// For Object
Property: name, and Value: Javascript
Property: estd, and Value: 1995
Property: founder, and Value: Brendan Eich

// For Array
0 1 2 3 4

// For String
0 1 2 3 4 5
```

- Iterates only array and string

```js
// Array
const myArray = [10, 20, 30, 40, 50]

for (value of myArray) {
  console.log(value)
}

// String
const str = 'Prince'
for (ch of str) {
  console.log(ch)
}
```

- Output:

```text
// For Array
10 20 30 40 50

// For String
P r i n c e
```

## Important Object Tricks

---

- `Object.keys()` returns the keys or properties in the form of an array
- `Object.values()` returns the values in the form of an array
- `Object.entries()` returns the keys and values in the form of an 2d array

```js
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
```

## Default Parameter

---

- Set a default value at the last parameter of the function
- If I don't provide any value then use default parameter
- If I provide the value then apply that provided value

```js
function greeting(name, message = 'Good Morning!') {
  console.log(`Hello ${name}, ${message}`)
}

greeting('Prince') // Output: Hello Prince, Good Morning!
greeting('Prince', 'Good Afternoon!') // Output: Hello Prince, Good Afternoon!
```

## Spread Operator

---

-

```js

```
