// Unique Values
const menu = [
  {
    name: 'pencakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
]

const categories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(categories) // Output: [ 'all', 'breakfast', 'lunch', 'dinner' ]
