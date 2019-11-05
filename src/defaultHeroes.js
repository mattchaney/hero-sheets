
const defaultHeroes = [
  {
    name: "Rygan",
    characterClass: "Barbarian",
    level: 5,
    inventory: [
      {
        name: "Greataxe",
        count: 1,
        weight: 10,
        weightUnit: "lb",
        extra: {
          attackAttribute: "str",
          damageDice: "1d12"
        }
      }
    ]
  },
  {
    name: "Diman",
    characterClass: "Wizard",
    level: 5,
    inventory: [
      {
        name: "Wizard's Spellbook",
        count: 1,
        weight: 2,
        weightUnit: "lb"
      },
      {
        name: "Wand of Magic Missile",
        count: 1,
        weight: 0.1,
        weightUnit: "lb",
        extra: {
          wandCharges: 7,
          wandChargeRefreshDice: "1d6+1"
        }
      },
      {
        name: "Wooden Staff",
        count: 1,
        weight: 5,
        weightUnit: "lb",
        extra: {
          attackAttribute: "str",
          damageDice: "1d6"
        }
      },
      {
        name: "Crossbow Bolt",
        count: 20,
        weight: 0.1,
        weightUnit: "lb",
        extra: {
          damageDice: "1d6",
          attackAttribute: "dex"
        }
      }
    ]
  },
  {
    name: "Jebth",
    characterClass: "Monk",
    level: 5,
    inventory: [
      {
        name: "+1 Magic Dagger of Frost",
        count: 1,
        weight: 1,
        weightUnit: "lb",
        extra: {
          attackAttribute: "dex",
          damageDice: "1d4",
          damageModifier: "1d6",
          damageModifierType: "ice"
        }
      },
    ]
  },
  {
    name: "Rickety Crickets",
    characterClass: "Hobo",
    level: 3,
  }
];

export default defaultHeroes;