# Async Await

- JavaScript works synchronously
- Doing a lot of work at the same time
- So, JavaScript is a single-thread language
- For example:
- In a restaurent scenario, one waiter and two customers are present
- So, I can indicate the waiter as **Thread** and the customers as **User**

![Synchronous](photo/synchronous.png)

- Takes order from customer 1

![Synchronous](photo/synchronous1.png)

- Move to the kitchen and wait until the food is ready to serve

![Synchronous](photo/synchronous2.png)

- When the food become ready, serve the food to the customer

![Synchronous](photo/synchronous3.png)

- Now, he becomes free

![Synchronous](photo/synchronous4.png)

- After that, moves to customer 2

![Synchronous](photo/synchronous5.png)

- Take the order and move to kitchen and wait until the food is ready

![Synchronous](photo/synchronous6.png)

- Serve the food to customer 2

![Synchronous](photo/synchronous7.png)

- After that, he become free

![Synchronous](photo/synchronous8.png)

- This behavior is called **Synchronous Blocking Behavior**
- In JavaScript implementation of Synchronous Blocking Behavior -

```js
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
```

- Outcome -

```text
Take order from Customer 1
Move to kitchen and wait until the food is ready for Customer 1

(--- 3 seconds pause ---)

The food is ready and served to the Customer 1
Complete the order for Customer 1
Take order from customer 2
Move to kitchen and wait until the food is ready for customer 2

(--- 3 seconds pause ---)

The food is ready and served to the customer 2
Complete the order for customer 2
```

- Same functionality in JavaScript implementation of Asynchronous Behavior

```js
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
```

- Outcome - 

```text
Take order from Customer 1
Move to kitchen and describe the order to chief for Customer 1
Complete the order for Customer 1 and Customer 1 needs to wait 5000 seconds
Waiter is free for taking next order from any customer
Take order from customer 2
Move to kitchen and describe the order to chief for customer 2
Complete the order for customer 2 and customer 2 needs to wait 3000 seconds
Waiter is free for taking next order from any customer

(--- 3 seconds pause ---)

The food is ready and served to the customer 2

(--- 2 seconds pause ---)

The food is ready and served to the Customer 1
```

- Now, Asynchronous Behavior implementation using JavaScript callback feature

```js

```

- Outcome - 

```text

```

- The previous example creates callback hell
- To get rid of it, need to use `Promise` feature of JavaScript
- The concept is - 
- If `Promise` is completed, the `Promise` has been `Resolved`
- Else the `Promise` has been `Rejected`