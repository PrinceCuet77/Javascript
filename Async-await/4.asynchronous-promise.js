// Printing the log
const log = (anything) => {
  console.log(anything)
}

const processOrder = (customer, orderTime, callback) => {
  log(`Move to kitchen and describe the order to chief for ${customer}`)

  // Asynchronous function
  setTimeout(() => {
    log(`The food is ready and served to the ${customer}`)
  }, orderTime)

  log(
    `Complete the order for ${customer} and ${customer} needs to wait ${orderTime} seconds`
  )

  callback()
}

const takeOrder = (customer, callback) => {
  log(`Take order from ${customer}`)
  callback()
}

const waiterFree = () => {
  log(`Waiter is free for taking next order from any customer`)
}

