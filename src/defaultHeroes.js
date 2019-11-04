
const defaultHeroes = [
  {
    name: "Rygan",
    characterClass: "Barbarian",
    level: 5
  },
  {
    name: "Diman",
    characterClass: "Wizard",
    level: 5,
    inventory: [
      {
        name: "Wizard's Spellbook",
        weight: "2 lb"
      },
      {
        name: "Wand of Magic Missile",
        weight: "0.1 lb"
      },
      {
        name: "Wooden Staff",
        weight: "5 lb",
        damageDice: "1d6"
      },
      {
        name: "+1 Magic Dagger of Frost",
        weight: "1 lb",
        damageDice: "1d4",
        damageModifier: "1d6",
        damageModifierType: "ice"
      }
    ]
  },
  {
    name: "Jebth",
    characterClass: "Monk",
    level: 5
  }
];

export default defaultHeroes;