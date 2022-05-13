const apples: number = 7

const speed: string = 'fast'

const switchMode: boolean = true

const notHappening: null = null

const notDefined: undefined = undefined

// built in objects
const tomorrow: Date = new Date()

// arrays
const colors: string[] = ['blue', 'red', 'green', 'yellow']
const numbers: number[] = [2, 3, 6, 7]

const multisampling: [string, number, string, number] = [
  'sample 1',
  40,
  'sample 23',
  199
]

//classes
class Car {
  constructor(public isWeird: boolean = true) {}
}

let weirdCar: Car = new Car()

//object literal
let point: {
  x: number
  y: number
} = {
  x: 10,
  y: 20
}

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations
// 1)functions that returns the 'any' type

const json: string = '{"x":10, "y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)
coordinates.x
coordinates.y
// coordinates.z --> error!!

// 2)when we declare a variable on one line and initialize it later

let words = ['red', 'green']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true
}

// 3)when we want a variable to have a type that can't be inferred correctly
let numbersArr = [-10, -2, 13]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] > 0) numberAboveZero = numbers[i]
}
