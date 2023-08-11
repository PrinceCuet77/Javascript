const language = {
  name: 'Javascript',
  creator: 'Brendan Eich',
  library: {
    react: {
      company: 'Facebook',
    },
  },
}

// Accessing company
const company = language.library.react.company
console.log(company) // Output: Facebook

const company1 = language.library.react.company1
console.log(company1) // Output: undefined

// If received object's property from an API, then can't ensure `company` property is undefined or not
// So, accessing nested object's property, need extra check to avoid errors
// Fix:

const company2 =
  language &&
  language.library &&
  language.library.react &&
  language.library.react.company
    ? language.library.react.company
    : undefined

console.log(company2) // Output: Facebook

const company3 =
  language &&
  language.library &&
  language.library.react &&
  language.library.react.company
    ? language.library.react.company
    : undefined
console.log(company3) // Output: undefined

// More cleaner syntax
const company4 =
  language &&
  language.library &&
  language.library.react &&
  language.library.react.company

console.log(company4) // Output: Facebook

const company5 =
  language &&
  language.library &&
  language.library.react &&
  language.library.react.company

console.log(company4) // Output: undefined
