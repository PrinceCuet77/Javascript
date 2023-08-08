// Normal function
// function number(n) {
//   return n
// }

const number = (n) => n
const sum = (a, b) => a + b

console.log(number(100))
console.log(sum(10, 20))

const javascript = {
  name: 'Javascript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function () {
    this.libraries.forEach((library) => {
      console.log(`${this.name} loves ${library}`)
    })
  }
}

javascript.printLibraries()