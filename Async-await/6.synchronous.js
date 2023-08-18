// Printing the log
const log = (anything) => {
  console.log(anything)
}

let customer = 'Customer 1'

const processOrder = (customer) => {
  log(`Move to kitchen and wait until the food is ready for ${customer}`)

  let currentTime = new Date().getTime()
  while (currentTime + 3000 >= new Date().getTime()) {}

  log(`The food is ready and served to the ${customer}`)
}

log(`Take order from ${customer}`)
processOrder(customer)
log(`Complete the order for ${customer}`)

customer = 'customer 2'

log(`Take order from ${customer}`)
processOrder(customer)
log(`Complete the order for ${customer}`)
