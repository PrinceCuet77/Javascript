const paymentStatus = true
const mark = 90

// Use 'Promise' so it's an asynchronous function
const enroll = () => {
  console.log('Enrollment is processing...')

  // Either 'resolve' nor 'reject'. No console.log use
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentStatus) resolve()
      else reject(new Error('Enrollment process is failed'))
    }, 2000)
  })
}

const progress = () => {
  console.log('Course on progress...')

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark >= 80) resolve()
      else
        reject(
          new Error(
            'You could not achieve enough marks for getting the certificate'
          )
        )
    }, 3000)
  })
}

const getCertificate = () => {
  console.log('Preparing your certificate...')

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Congratulation!!! You earn the certificate')
    }, 2000)
  })
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.message)
  })
