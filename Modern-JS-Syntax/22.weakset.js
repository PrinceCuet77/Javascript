// Array of object
// const ws = new WeakSet([{ a: 1}, {b: 2 }])
// console.log(ws)

// Force to create an object to access its method
const ws = new WeakSet()

class someClass {
  constructor() {
    ws.add(this)
  }

  method() {
    if (!ws.has(this)) {
      throw new Error('Can not be accessed')
    }

    console.log('This method can be accessed')
  }
}

// someClass.prototype.method()

const sc = new someClass()
sc.method()
