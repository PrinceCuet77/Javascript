const status = true

// Promise definition
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status) resolve('Task 1')
    else reject(new Error('Error message'))
  })
})

// Promise call
promise
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.message)
  })
