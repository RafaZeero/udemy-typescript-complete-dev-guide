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
