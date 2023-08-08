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

const student =  new Student('Prince', 10)
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

