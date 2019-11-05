
const defaultHeroes = [
  {
    name: "Rygan",
    attributes: {
      Strength: 18,
      Dexterity: 14,
      Constitution: 18,
      Intelligence: 8,
      Wisdom: 10,
      Charisma: 8
    },
    skills: {
      Athletics: 4,
      Acrobatics: 2,
      Stealth: 0,
    },
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
    attributes: {
      Strength: 10,
      Dexterity: 14,
      Constitution: 14,
      Intelligence: 18,
      Wisdom: 12,
      Charisma: 10
    },
    skills: {
      Athletics: 0,
      Acrobatics: 2,
      Stealth: 0,
      Arcana: 10,
      History: 10,
    },
    languages: [
      "Elvish",
      "Gnomish",
      "Abyssal",
      "Celestial"
    ],
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
      },
      {
        name: "Light Crossbow",
        count: 1,
        weight: 5,
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
    characterClass: "Street Urchin",
    level: 3,
    attributes: {
      Strength: 18,
      Dexterity: 14,
      Constitution: 18,
      Intelligence: 8,
      Wisdom: 10,
      Charisma: 8
    },
    skills: {
      Athletics: 4,
      Acrobatics: 2,
      Stealth: 0,
    },
    inventory: [

    ],
    languages: [
      "Hood Rat"
    ]
  }
];

export default defaultHeroes;