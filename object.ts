const profile = {
  name: 'link',
  city: 'hyrule',
  dungeons: {
    forest: true,
    fire: false
  },
  setDunegons(dungeonForest: boolean, dungeonFire: boolean): void {
    this.dungeons.forest = dungeonForest
    this.dungeons.fire = dungeonFire
  }
}

const {
  city,
  dungeons: { fire }
}: { city: string; dungeons: { fire: boolean; forest: boolean } } = profile

console.log(fire)
