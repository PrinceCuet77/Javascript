- [Question-01:](#question-01)
- [Question-02:](#question-02)
- [Question-03:](#question-03)
- [Question-04:](#question-04)
- [Question-05:](#question-05)
- [Question-06:](#question-06)
- [Question-07:](#question-07)
- [Question-08:](#question-08)
- [Question-09:](#question-09)
- [Question-10:](#question-10)
- [Question-11:](#question-11)

# Question-01:

- **`arr = [[1, 2], [3, 4], [5]]`. Flatten a nested array using reduce method.**
- Code:

```js
const arr = [[1, 2], [3, 4], [5]];
const newArr = arr.reduce((prev, curr) => prev.concat(curr), []);

console.log(newArr);
```

- Output:

```txt
[1, 2, 3, 4, 5]
```

# Question-02:

- **Array:**

```js
const users = [
  {
    id: 1,
    name: 'Alice',
    age: 25,
    country: 'USA',
    hobbies: ['Reading', 'Traveling'],
  },
  {
    id: 2,
    name: 'Bob',
    age: 30,
    country: 'UK',
    hobbies: ['Cooking', 'Cycling'],
  },
  {
    id: 3,
    name: 'Charlie',
    age: 22,
    country: 'Canada',
    hobbies: ['Gaming', 'Drawing'],
  },
];
```

- **Now, Create an array where contains all the hobbies only where age is less or equal to 25 using reduce method.**
- Code:

```js
// Using 'filter', 'map' & 'flat'
const allHobbies = users
  .filter((user) => user.age >= 25)
  .map((user) => user.hobbies)
  .flat();

// Using 'filter' & 'flatMap'
const allHobbies = users
  .filter((user) => user.age >= 25)
  .flatMap((user) => user.hobbies);

// Using 'filter', 'map' & 'reduce'
const allHobbies = users
  .filter((user) => user.age >= 25)
  .map((user) => user.hobbies)
  .reduce((prev, curr) => prev.concat(curr), []);
```

- Output:

```txt
["Reading", "Traveling", "Gaming", "Drawing"]
```

# Question-03:

- **Same `users` array taken from previous question. Create an array where contains all the hobbies only where age is equal to 30 using reduce method**
- Code:

```js
const allHobbies = users
  .filter((user) => user.age === 30)
  .map((user) => user.hobbies.map((hobby) => `${hobby} for ${user.name}`))
  .reduce((prev, curr) => prev.concat(curr), []);
```

- Output:

```txt
["Cooking for Bob", "Cycling for Bob"]
```

# Question-04:

- **Same users array taken from previous question. Locate the first person from the `USA`.**
- Code:

```js
const usaUser = users.find((user) => user.country === 'USA');
console.log(usaUser);
```

- Output:

```txt
{
  id: 1,
  name: "Alice",
  age: 25,
  country: "USA",
  hobbies: ["Reading", "Traveling"],
}
```

# Question-05:

- **`words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'banana']`. Generate a frequency count of words.**
- Code:

```js
const frequency = words.reduce((prev, curr) => {
  // Way-01
  // if (!prev[curr]) {
  //   prev[curr] = 1;
  // } else {
  //   prev[curr]++;
  // }

  // Way-02
  prev[curr] = !prev[curr] ? 1 : prev[curr] + 1;
  return prev;

  // Way-03
  // return { ...prev, [curr]: prev[curr] ? prev[curr] + 1 : 1 };

  // Way-04
  // return {...prev, [curr]: (prev[curr] || 0) + 1 };
}, {});

console.log(frequency);
```

- Output:

```txt
{ apple: 2, banana: 3, cherry: 1 }
```

# Question-06:

- **`numbers = [-10, 15, -20, 30, -5]`. Calculate sum only positive numbers only using reduce method.**
- Code:

```js
const sum = numbers.reduce((prev, curr) => {
  if (curr > 0) {
    return prev + curr;
  }

  return prev;
}, 0);

console.log(sum);
```

- Output:

```txt
45
```

# Question-07:

- **`numbers = [-10, 15, -20, 30, -5]`. Calculate sum only positive numbers using reduce & filter methods.**
- Code:

```js
const sum = numbers
  .filter((num) => num > 0)
  .reduce((prev, curr) => {
    return prev + curr;
  }, 0);

console.log(sum);
```

- Output:

```txt
45
```

# Question-08:

- **`fruits = ['apple', 'banana', 'cherry']`. Create an array of objects with an index property.**
- Code:

```js
const formatedFruits = fruits.reduce((prev, curr, index) => {
  // Way-01
  // prev.push({ item: curr, index });
  // return prev;

  // Way-02
  return [...prev, { item: curr, index }];
}, []);

console.log(formatedFruits);
```

- Output:

```txt
[
  { item: 'apple', index: 0 },
  { item: 'banana', index: 1 },
  { item: 'cherry', index: 2 },
];
```

# Question-09:

- **Array:**

```js
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
];
```

- **Now, group people by their age.**
- Code:

```js
const groupedPeople = people.reduce((prev, curr) => {
  // Way-01
  // if (!prev[curr.age]) {
  //   prev[curr.age] = [];
  //   prev[curr.age].push(curr);
  // } else {
  //   prev[curr.age].push(curr);
  // }

  // Way-02
  if (!prev[curr.age]) {
    prev[curr.age] = [{ ...curr }];
  } else {
    prev[curr.age] = [...prev[curr.age], { ...curr }];
  }

  return prev;
}, {});

console.log(groupedPeople);
```

- Output:

```txt
{
  '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  '30': [{ name: 'Bob', age: 30 }]
}
```

# Question-10:

- **`fruits = ['apple', 'banana', 'cherry', 'kiwi', 'apple', 'kiwi', 'orange']`. Use forEach method to count occurrences of each character in a string.**
- Code:

```js
const output = {};
fruits.forEach((fruit) => {
  // Way-01
  // if (!output[fruit]) {
  //   output[fruit] = 1;
  // } else {
  //   output[fruit] += 1;
  // }

  // Way-02
  output[fruit] = !output[fruit] ? 1 : output[fruit] + 1;
});

console.log(output);
```

- Output:

```txt
{ apple: 2, banana: 1, cherry: 1, kiwi: 2, orange: 1 }
```

# Question-11:

- **`fruits = ['apple', 'banana', 'cherry', 'kiwi', 'apple', 'kiwi', 'orange']`. Use reduce method to count occurrences of each character in a string.**
- Code:

```js
const output = fruits.reduce((prev, curr) => {
  // Way-01
  // if (!prev[curr]) {
  //   prev[curr] = 1;
  // } else {
  //   prev[curr] += 1;
  // }

  // Way-02
  prev[curr] = !prev[curr] ? 1 : prev[curr] + 1;

  return prev;
}, {});

console.log(output);
```

- Output:

```txt
{ apple: 2, banana: 1, cherry: 1, kiwi: 2, orange: 1 }
```
