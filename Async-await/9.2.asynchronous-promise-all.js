// Pass all the `Promise`'s in the form of an array
// Receive all the resolved data in the form of an array too
const promise1 = Promise.resolve('Promise 1 resolved')

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved')
  }, 2000)
})

// promise1.then((res) => console.log(res))
// promise2.then((res) => console.log(res))

// Instead of call one by one
Promise.all([promise1, promise2]).then((res) => console.log(res))
