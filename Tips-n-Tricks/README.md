# Table Of Content

- [JavaScript: Tips \& Tricks](#javascript-tips--tricks)
- [A](#a)
  - [A](#a-1)

# JavaScript: Tips & Tricks

## A

> [!NOTE] Problem: 01
>
> Remove falsy values from any array

```js
const miscellaneous = ['A', '', 'a', NaN, 'I']

console.log(miscellaneous.filter(Boolean)) // Output: [ 'A', 'a', 'I' ]
```

> [!NOTE] Problem: 02
>
> Convert any value to boolean

```js
// Way-01
console.log(Boolean('Mashrafi')) // Output: true
console.log(Boolean(undefined)) // Output: false
console.log(Boolean(1)) // Output: true
console.log(Boolean(0)) // Output: false

// Way-02
console.log(!!'Mashrafi') // Output: true
console.log(!!undefined) // Output: false
console.log(!!1) // Output: true
console.log(!!0) // Output: false
```

> [!NOTE] Problem: 03
>
> Resizing any array

```js
let letters = ['A', 'N', 'L', 'I']
console.log(letters) // Output: [ 'A', 'N', 'L', 'I' ]

letters.length = 3

console.log(letters) // Output: [ 'A', 'N', 'L' ]
```

> [!NOTE] Problem: 04
>
> How to flattern a multi-dimensional array

- Convert 2D array to 1D array
- Enable one level array

```js
let letters = ['A', ['AA', 'BB'], 'C', ['AAA', 'CCC']]
console.log(letters.flat())
```

- Output:

```txt
[ 'A', 'AA', 'BB', 'C', 'AAA', 'CCC' ]
```

- Can't able to flat multi-level

```js
let anotherLetters = ['A', ['AA', 'BB', ['AAA', 'DDD']], 'C', ['AAA', 'CCC']]
console.log(anotherLetters.flat())
```

- Output:

```txt
[ 'A', 'AA', 'BB', [ 'AAA', 'DDD' ], 'C', 'AAA', 'CCC' ]
```

- Multi-level array flatting

```js
console.log(anotherLetters.flat(Infinity))
```

- Output:

```txt
[
  'A',   'AA',  'BB',
  'AAA', 'DDD', 'C',
  'AAA', 'CCC'
]
```

> [!NOTE] Problem: 05
>
> Short Conditional

- Use `if` statement

```js
const captain = 'Mashrafi'
if (captain === 'Mashrafi') console.log('I love Mashrafi')
// Output: I love Mashrafi
```

- Instead of 'if' statement, using `&&`

```js
captain === 'Mashrafi' && console.log('I love Mashrafi')
// Output: I love Mashrafi
```

- If want to handle not matched partion

```js
const captain = 'Mashrafi2'
if (captain !== 'Mashrafi') console.log('I hate Bangladesh')
// Output: I hate Bangladesh
```

- Instead of not matched statement, using `||`

```js
captain === 'Mashrafi' || console.log('I hate Bangladesh')
// Output: I hate Bangladesh
```

> [!NOTE] Problem: 05
>
> Replace all occurances of a string