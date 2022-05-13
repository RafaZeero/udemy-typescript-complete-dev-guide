const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number) => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
  return null // or undefined
  //void means NO RETURN NECESSARY FOR THE FUNCTION
}

const throwError = (message: string): string => {
  if (!message) throw new Error(message)

  return message
}

//es2015
const logWeather2 = ({ date, weather }) => {
  console.log(date)
  console.log(weather)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

// //es2015
// const logWeather = ({ date, weather }) => {
//   console.log(date)
//   console.log(weather)
// }

logWeather(todaysWeather)
