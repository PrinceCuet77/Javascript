// Printing the log
const log = (anything) => {
  console.log(anything)
}

let customer = 'Customer 1'

const processOrder = (customer, orderTime) => {
  log(`Move to kitchen and describe the order to chief for ${customer}`)

  // Asynchronous function
  setTimeout(() => {
    log(`The food is ready and served to the ${customer}`)
  }, orderTime)

  log(
    `Complete the order for ${customer} and ${customer} needs to wait ${orderTime} seconds`
  )
}

log(`Take order from ${customer}`)
processOrder(customer, 5000)
log(`Waiter is free for taking next order from any customer`)

customer = 'customer 2'

log(`Take order from ${customer}`)
processOrder(customer, 3000)
log(`Waiter is free for taking next order from any customer`)
