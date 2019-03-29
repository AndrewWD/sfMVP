const monthMap = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': "Apr",
  '05': 'May',
  '06': 'Jun',
  '07': 'July',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

export default rawTime => {
  const date = rawTime.split('T')[0]
  const dateArr = date.split('-')
  return `${monthMap[dateArr[1]]} ${dateArr[2]}, ${dateArr[0]}`
}