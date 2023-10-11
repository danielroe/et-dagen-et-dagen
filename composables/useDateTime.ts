export const calculateTimeDifference = (
  futureDate: string,
  futureTime: string
): object => {
  // Define current date and future date + time
  const currentDate = new Date()
  const futureDateTime = new Date(`${futureDate} ${futureTime}`)

  // Calculate the time difference in milliseconds.
  const timeDifferenceInMs = futureDateTime.getTime() - currentDate.getTime()

  // Variables defining the timedifference in seconds, minutes, hours and days.
  const totalTimeDifferenceInSeconds = timeDifferenceInMs / 1000

  const totalTimeDifferenceInMinutes = totalTimeDifferenceInSeconds / 60

  const totalTimeDifferenceInHours = totalTimeDifferenceInMinutes / 60

  const totalTimeDifferenceInDays = totalTimeDifferenceInHours / 24

  // Variables containing remaining values of days, hours, minutes and seconds
  const timeDifferenceInDays = totalTimeDifferenceInDays

  const timeDifferenceInHours =
    totalTimeDifferenceInHours - 24 * Math.floor(totalTimeDifferenceInDays)

  const timeDifferenceInMinutes =
    totalTimeDifferenceInMinutes - 60 * Math.floor(totalTimeDifferenceInHours)

  const timeDifferenceInSeconds =
    totalTimeDifferenceInSeconds - 60 * Math.floor(totalTimeDifferenceInMinutes)

  return {
    days: Math.floor(timeDifferenceInDays),
    hours: Math.floor(timeDifferenceInHours),
    minutes: Math.floor(timeDifferenceInMinutes),
    seconds: Math.floor(timeDifferenceInSeconds),
  }
}
