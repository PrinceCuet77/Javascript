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

const usaUser = users.find(user => user.country === 'USA');
console.log(usaUser);