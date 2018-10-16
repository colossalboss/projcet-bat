export const today = () => {
  const date = new Date()

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

export const daysFromToday = (days) => {
  const date = new Date()

  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay() + days}`
}