# Table Of Content

- [Table Of Content](#table-of-content)
- [JavaScript: Tips \& Tricks](#javascript-tips--tricks)
  - [_Question-01:_ Remove falsy values from any array](#question-01-remove-falsy-values-from-any-array)
  - [_Question-02:_ Convert any value to boolean](#question-02-convert-any-value-to-boolean)
  - [_Question-03:_ Resizing any array](#question-03-resizing-any-array)
  - [_Question-04:_ How to flattern a multi-dimensional array](#question-04-how-to-flattern-a-multi-dimensional-array)
  - [_Question-05:_ Short Conditional](#question-05-short-conditional)
  - [_Question-06:_ Replace all occurances of a string](#question-06-replace-all-occurances-of-a-string)
  - [_Question-07:_ Know performance of a task](#question-07-know-performance-of-a-task)
  - [_Question-08:_ Swapping values without any extra value](#question-08-swapping-values-without-any-extra-value)
  - [_Question-09:_ Destructuring Aliases](#question-09-destructuring-aliases)
  - [_Question-10:_ Get value as data type](#question-10-get-value-as-data-type)
  - [_Question-11:_ Remove duplicate from an array](#question-11-remove-duplicate-from-an-array)
  - [_Question-12:_ Compare two arrays by value](#question-12-compare-two-arrays-by-value)
  - [_Question-13:_ Shuffling array](#question-13-shuffling-array)
  - [_Question-14:_ Comma Operator](#question-14-comma-operator)
  - [_Question-15:_ Output of `[] + []`](#question-15-output-of---)
  - [_Question-16:_ Output of the function? - Template Literals](#question-16-output-of-the-function---template-literals)
  - [_Question-17:_ Output of the function? - `arguments`](#question-17-output-of-the-function---arguments)
  - [_Question-23:_ Count duplicate elements in an array](#question-23-count-duplicate-elements-in-an-array)
  - [_Question-24:_ Reverse words in a string](#question-24-reverse-words-in-a-string)
  - [_Question-25:_ Sorting words by length in a sentence](#question-25-sorting-words-by-length-in-a-sentence)
  - [Debounce Handling](#debounce-handling)
  - [JavaScript `NaN`](#javascript-nan)

# JavaScript: Tips & Tricks

## _Question-01:_ Remove falsy values from any array

```js
const miscellaneous = ['A', '', 'a', NaN, 'I'];

console.log(miscellaneous.filter(Boolean)); // Output: [ 'A', 'a', 'I' ]
```

- _NOTE:_ 6 falsy values are `false`, `0`, `undefined`, `''` `null`, `NaN`
- _Explanation:_
- `Boolean(expression)` - returns `true`/`false`
- _For Example:_
- `Boolean(5 < 6)` - return `true`
- `Boolean('')` - return `false`

## _Question-02:_ Convert any value to boolean

- _Way-01:_

```js
console.log(Boolean('Mashrafi')); // Output: true
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
```

- _Way-02:_

```js
console.log(!!'Mashrafi'); // Output: true
console.log(!!undefined); // Output: false
console.log(!!1); // Output: true
console.log(!!0); // Output: false
```

## _Question-03:_ Resizing any array

```js
let letters = ['A', 'N', 'L', 'I'];
console.log(letters); // Output: [ 'A', 'N', 'L', 'I' ]

letters.length = 3; // Resizing any array

console.log(letters); // Output: [ 'A', 'N', 'L' ]
```

## _Question-04:_ How to flattern a multi-dimensional array

- Convert from 2D array to 1D array using `flat()` method
- Enable to convert just one level 2D array like `[1, [2, 3], 4]`

```js
let letters = ['A', ['AA', 'BB'], 'C', ['AAA', 'CCC']];
letters.flat();
```

- _Output:_

```txt
[ 'A', 'AA', 'BB', 'C', 'AAA', 'CCC' ]
```

- Can't able to flat multi-level like `[1, [2], [3, [4]]]`

```js
let anotherLetters = ['A', ['AA', 'BB', ['AAA', 'DDD']], 'C', ['AAA', 'CCC']];
anotherLetters.flat();
```

- _Output:_

```txt
[ 'A', 'AA', 'BB', [ 'AAA', 'DDD' ], 'C', 'AAA', 'CCC' ]
```

- Multi-level array flatting

```js
anotherLetters.flat(Infinity);
```

- Output:

```txt
[
  'A',   'AA',  'BB',
  'AAA', 'DDD', 'C',
  'AAA', 'CCC'
]
```

## _Question-05:_ Short Conditional

- Using `if` statement

```js
const captain = 'Mashrafi';
if (captain === 'Mashrafi') {
  console.log('I love Mashrafi');
}
// Output: I love Mashrafi
```

- Instead of 'if' statement, using `&&`

```js
captain === 'Mashrafi' && console.log('I love Mashrafi');
// Output: I love Mashrafi
```

- If want to handle not matched partion

```js
const captain = 'Mashrafi2';
if (captain !== 'Mashrafi') {
  console.log('I hate Bangladesh');
}
// Output: I hate Bangladesh
```

- Instead of not matched statement, using `||`

```js
captain === 'Mashrafi' || console.log('I hate Bangladesh');
// Output: I hate Bangladesh
```

## _Question-06:_ Replace all occurances of a string

```js
const quote =
  'React is a Javascript framework & this framework is the most popular front-end framework right now';

// Replace all occurrences of 'framework' with 'library'
// g - global, i - case sen
quote.replace(/framework/g, 'library');

// Output:
// React is a Javascript library & this library is the most popular front-end library right now
```

- _TIPS:_ Log values with variables names smartly

```js
const name = 'Prince';
console.log({ name });
```

## _Question-07:_ Know performance of a task

```js
const startTime = performance.now();

for (let i = 0; i <= 50; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`Loop took ${endTime - startTime} milliseconds to finish`);

// Output:
// Loop took 15.600313000380993 milliseconds to finish
```

## _Question-08:_ Swapping values without any extra value

- Using array distructuring

```js
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

// Output: 2 1
```

- Using math

```js
let a = 1;
let b = 2;

b = a + (a = b) - b;
console.log(a, b);

// Output: 2 1
```

## _Question-09:_ Destructuring Aliases

```js
const language = {
  name: 'Javascript',
  founded: 1995,
  founder: 'Brendan Eich',
};

const { name, founder } = language; // Destructuring
console.log(name, founder);

const { name: languageName, founder: CreatorName } = language; // Destructuring Aliases
console.log(languageName, fCreatorNameounder);
```

## _Question-10:_ Get value as data type

```html
<input id="id1" type="text" value="123" />
```

- Normally, `document.querySelector('#id1')` must be a string value

```js
const element = document.querySelector('#id1').valueAsNumber;
console.log(typeof element);

// Output: number
```

## _Question-11:_ Remove duplicate from an array

```js
const array = [1, 2, 2, 3, 3, 3, 4, 5];

const removeDuplicates = [...new Set(array)];

// Output: [1, 2, 3, 4, 5]
```

## _Question-12:_ Compare two arrays by value

```js
const hasSameElements = (a, b) => {
  return a.length === a.length && a.every((value, index) => value === b[index]);
};

hasSameElements([1, 2], [1, 3]); // false
hasSameElements([1, 2], [1, 2]); // true
```

## _Question-13:_ Shuffling array

- Sorting

```js
const numbers = [1, 2, 3, 4, 5, 6];

numbers.sort((a, b) => a - b);
```

- _NOTE:_
- If `a - b` result is `-ve`, `a` is sorted before `b`
- If `a - b` result is `+ve`, `b` is sorted before `a`
- If `a - b` result is `0`, no changes
- But wants to shuffling the array

```js
const numbers = [1, 2, 3, 4, 5, 6];

numbers.sort(() => Math.random() - 0.5);

// Output:
// [1, 2, 3, 4, 5, 6] - 1st time
// [2, 4, 6, 3, 5, 1] - 2nd time
// [5, 2, 1, 5, 6, 3] - 3rd time
// And so on...
```

## _Question-14:_ Comma Operator

- The comma operator (`,`) evalutes each of its operands from left to right
- And returns the value of the last operand

```js
let x = 1;
x = (x++, x);

console.log(x); // Output: 2
```

- Another example:

```js
let y = (2, 3);

console.log(y); // Output: 3
```

- Complex example:

```js
let a = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}

// Output:
// a[0][3] = 4
// a[1][2] = 5
// a[2][1] = 6
// a[3][0] = 7
```

## _Question-15:_ Output of `[] + []`

- Without string & number, JavaScript do typecasting & convert to a string
- String conversion of `[]` is `''`
- String conversion of `{}` is `[object object]`

```js
console.log([] + []); // Output: ''
console.log({} + []); // Output: [object object]
```

- But, what about `true + 5`

```js
console.log(true + 5); // Output: 6
console.log(false + 5); // Output: 5
```

## _Question-16:_ Output of the function? - Template Literals

```js
function fn() {
  // Receives `hello` argument but not used
  return 'Bangladesh';
}

const string = fn`hello`; // Function calling with `hello` argument

console.log(string); // Output: Bangladesh
```

## _Question-17:_ Output of the function? - `arguments`

- By default, `this` takes all the parameters of the function
- Inside the `fn` function is referring to the length of the `arguments` object, which is `2`.

```js
function fn() {
  console.log(this); // Output: Arguments(2)
  // Output: Arguments[0] = fn()
  // Output: Arguments[1] = 5

  console.log(`The length is ${this.length}`);
}

let value = {
  length: 10,
  method: function (fn) {
    arguments[0]();
  },
};

value.method(fn, 5); // Output: The length is 2
```

## _Question-23:_ Count duplicate elements in an array

- Input:

```txt
['A', 'B', 'C', 'A', 'C', 'F', 'F', 'D', 'A']
```

- Output:

```txt
{ 'A': 3, 'B': 1, 'C': 2, 'D': 1 'F': 2 }
```

- Code:

```js
const letters = ['A', 'B', 'C', 'A', 'C', 'F', 'F', 'D', 'A'];

function countDuplicates(data) {
  const output = {};

  // forEach() works as well
  data.map((item) => {
    output[item] = (output[item] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(letters));
```

## _Question-24:_ Reverse words in a string

- Input:

```txt
I love Bangladesh
```

- Output:

```txt
I evol hsedalgnaB
```

- Output:

```js
const str = 'I love Bangladesh';

function reverseWords(data) {
  const words = data.split(' ');

  const output = data.map((item) => {
    return item.split('').reverse().join('');
  });

  return output.join(' ');
}

console.log(reverseWords(str));
```

## _Question-25:_ Sorting words by length in a sentence

- Input:

```txt
Java is a programming language
```

- Output:

```txt
a is Java language programming
```

- Output:

```js
const str = 'Java is a programming language';

function sortWords(data) {
  const words = data.split(' ');

  data.sort((a, b) => {
    return a.length - b.length;
  });

  return data.join(' ');
}

console.log(sortWords(str));
```

## Debounce Handling

- Why do we use `debounce` handling?
- If I have a button for cart & by pressing that button, call an API & spend money based on the cart items
- If user click multiple times then backend will receive more than one request
- To prevent that bounce effect, we need debounce handling
- Actually, stop taking user's API request for a certain amount of times
- Debounce means prevent or stop bounce effect
- HTML source code:

```html
<div>
  <button id="button">Click Here</button>
</div>
```

- Debounce handling:

```js
cosnt button = document.getElementById('button');

// Debounce handler
function debounce(fn, delay) {
  let timerId;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn();
    }, delay);
  }
}

button.addEventListener('click', debounce(function () {
  console.log('Clicked');
}, 2000));
```

## JavaScript `NaN`

```js
const weird = NaN;
console.log(weird === weird); // Output: false
```

- Same as:

```js
const result1 = 'Sumit' / 5;
const result2 = 'Bad programmer' / 3;

console.log(result1); // Output: NaN
console.log(result2); // Output: NaN

console.log(result1 === result2); // Output: false
```

- Tricky interview question:

```js
const array = [NaN];
const result = array.includes(NaN);

console.log(result); // Output: true
```

- As, `array.includes()` uses different equality algorithm like `Same-value-zero equality`
- `Object.is()` is similar to same-value equality, but `+0` and `-0` are considered equal
