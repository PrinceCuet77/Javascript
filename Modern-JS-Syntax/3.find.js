const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = numbers.find((value, index, arr) => {
//   console.log(value, index, arr)
//   return value > 4
// })

// console.log(result)

// --------------- Another example -----------------

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