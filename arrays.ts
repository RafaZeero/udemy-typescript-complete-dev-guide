const weapons: string[] = ['bow', 'sword', 'bat', 'knife']
const dropChance: (Date | number)[][] = [
  [new Date(), 44],
  [new Date(), 14]
]
const arrowsQuantity: number[] = [20, 10, 32]

const specialArrows: (number | string)[] = [
  'fireArrow',
  25,
  'frozenArrow',
  32,
  'sparkArrow',
  57,
  'lightArrow',
  33
]

const specialEquipment: (number | string)[][] = [
  [1, 'head', 'blue orb', 'refine: ', 7],
  [2, 'torso', 'red orb', 'refine: ', 2]
]

// help with inference when extracting values
specialEquipment[0]

// prevent incompatible values
specialEquipment[true]

// help with map, forEach, reduce
specialEquipment.map(cb)

// flexible types
const flex: (string | number)[] = ['one', 1, 'two', 2]
