// Pass all the `Promise`'s in the form of an array
// Receive only one resolved data who resolved first
const promise1 = Promise.resolve('Promise 1 resolved')

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved')
  }, 2000)
})

Promise.race([promise1, promise2]).then((res) => console.log(res))
