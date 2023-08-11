function modifier(strings, ...values) {
  console.log(strings) // Output: [ 'We have ', ' and ', ' in our cricket team.' ]
  console.log(values) // Output: [ 'Sakib', 'Tamim' ]

  const newStrings = strings.reduce((prev, current) => {
    return prev + current + (values.length ? `Mr. ${values.shift()}` : '')
  }, '')

  return newStrings
}

const player1 = 'Sakib'
const player2 = 'Tamim'

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`) // Output: We have Mr. Sakib and Mr. Tamim in our cricket team.
