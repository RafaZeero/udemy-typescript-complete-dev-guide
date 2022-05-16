class Warrior {
  constructor(protected hpRegen: number = 5) {}

  public getHpRegen(): void {
    console.log(`Base hp regen: ${this.hpRegen}`)
  }

  public pierce(): void {
    console.log('Pierce ATK!')
  }
  public slash(): void {
    console.log('Sword Slash')
  }
}

class Swordsman extends Warrior {
  constructor(
    public oneHandedSword: boolean,
    public twoHandedSword: boolean,
    hpRegenBonus?: number
  ) {
    super(hpRegenBonus ?? 10)
  }
  public swordplay(): void {
    console.log('Sword Play ATK!')
  }
  public slash(): void {
    console.log('Better sword slash!')
  }
  public hp() {
    this.hpRegen += 10
    console.log(`Extra hp regen: ${this.hpRegen}`)
  }
}

const herald = new Swordsman(false, true, 13)
const apprentice = new Warrior(17)
const newbie = new Swordsman(true, false)

herald.pierce()
herald.swordplay()

herald.slash()
apprentice.slash()

// modifiers:
// Public-------> Anywhere, anytime
// Private------> Other methods in this class
// Protected----> extends Private to child classes

herald.hp()

apprentice.getHpRegen()

newbie.getHpRegen()

newbie.hp()
