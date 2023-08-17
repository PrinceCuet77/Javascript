const paymentStatus = true
const mark = 80

const enroll = (callback) => {
  console.log('Enrollment is processing...')

  setTimeout(() => {
    if (paymentStatus) callback()
    else console.log('Enrollment process is failed')
  }, 2000)
}

const progress = (callback) => {
  console.log('Course on progress...')

  setTimeout(() => {
    if (mark >= 80) callback()
    else
      console.log(
        'You could not achieve enough marks for getting the certificate'
      )
  }, 3000)
}

const getCertificate = () => {
  console.log('Preparing your certificate...')

  setTimeout(() => {
    console.log('Congratulation!!! You earn the certificate')
  }, 2000)
}

enroll(() => {
  progress(getCertificate)
})
