const monsterSlime = {
  name: 'Green Slime',
  hp: 87,
  atk: 12,
  def: 9,
  OneHitKillable: true,
  drops: ['ooze', 'coins', 'slime orb']
}

const printMonster = (monster: {
  name: string
  hp: number
  atk: number
  def: number
  OneHitKillable: boolean
  drops: string[]
}): void => {
  console.log(`Name: ${monster.name}`)
  console.log(`hp: ${monster.hp}`)
  console.log(`atk: ${monster.atk}`)
  console.log(`def: ${monster.def}`)
  console.log(`OneHitKillable: ${monster.OneHitKillable}`)
  console.log(`Drops: ${monster.drops}`)
}

interface MonsterProps {
  name: string
  hp: number
  atk: number
  def: number
  OneHitKillable: boolean
  drops: string[]
}

const monsterSkeleton: MonsterProps = {
  name: 'Skeleton',
  hp: 99,
  atk: 27,
  def: 33,
  OneHitKillable: false,
  drops: ['coins', 'Skeleton BoneSword', 'Skeleton Orb']
}

printMonster(monsterSkeleton)
