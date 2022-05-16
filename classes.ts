class Warrior {
  pierce(): void {
    console.log('Pierce ATK!')
  }
  slash(): void {
    console.log('Sword Slash')
  }
}

class Swordsman extends Warrior {
  swordplay(): void {
    console.log('Sword Play ATK!')
  }
  slash(): void {
    console.log('Better sword slash!')
  }
}

const herald = new Swordsman()
const apprentice = new Warrior()

herald.pierce()
herald.swordplay()

herald.slash()
apprentice.slash()
