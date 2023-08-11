const age = 14
// const type = age > 18 ? 'Adult' : age > 10 ? 'Young' : 'Child'

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

console.log(type)

const a = 5

let access
if (a > 5) {
  access = true
} else {
  access = false
}

// let access = a > 5 ? true : false
console.log(access)
