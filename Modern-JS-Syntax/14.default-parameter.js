function greeting(name, message = 'Good Morning!') {
  console.log(`Hello ${name}, ${message}`)
}

greeting('Prince') // Output: Hello Prince, Good Morning!
greeting('Prince', 'Good Afternoon!') // Output: Hello Prince, Good Afternoon!