// function myFunc() {
//   console.log(arguments) // Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
//   console.log(arguments[0]) // Output: 1
// }

// myFunc(1, 2, 3, 4, 5)

function myFunc(...params) {
  console.log(params)
}

myFunc(1, 2, 3, 4, 5) // Output: [1, 2, 3, 4, 5]