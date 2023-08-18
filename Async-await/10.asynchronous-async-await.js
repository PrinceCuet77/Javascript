const hasMeeting = false

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'An JavaScript Interview Session',
      duration: '2 hours',
      time: '10:30 PM',
    }

    resolve(meetingDetails)
  } else {
    reject(new Error('A meeting has already scheduled'))
  }
})

const addToCalender = (meeting) => {
  const calender = `I have a meeting titled ${meeting.name} at ${meeting.time}`

  // No need to 'reject' a 'Promise'. So, use direct 'resolve'
  return Promise.resolve(calender)
}

const meetingSchecule = async () => {
  try {
    const meetingDetails = await meeting
    const calender = await addToCalender(meetingDetails)
    console.log(calender)
  } catch (err) {
    console.log(err.message)
  }
}

meetingSchecule()
