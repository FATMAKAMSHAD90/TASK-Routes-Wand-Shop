const wands = [
  {
    core: "Phoenix Feather",
    wood: "Holly",
    length: 11,
    slug: "phoenix-feather-holly-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/ca/HarryPotterWandNN8415.jpg/revision/latest?cb=20141208232731",
  },
  {
    core: "Unicorn Hair",
    wood: "Willow",
    length: 14,
    slug: "unicorn-hair-willow",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/6/62/RonWeasleyWandNN8413.jpg/revision/latest?cb=20141208232815",
  },
  {
    core: "Phoenix Feather",
    wood: "Yew",
    length: 13.5,
    slug: "phoenix-feather-yew-1",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    core: "Unicorn Hair",
    wood: "Cypress",
    length: 10.25,
    slug: "unicorn-hair-cypress-1",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    core: "Dragon heartstring",
    wood: "Vine",
    length: 10.75,
    slug: "dragon-heartstring-vine-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg/revision/latest?cb=20140602200406",
  },
  {
    core: "Unicorn Hair",
    wood: "Cherry",
    length: "Unknown length",
    slug: "unicorn-hair-cherry-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/f/f0/Neville%27s_wand.jpg/revision/latest?cb=20141209002728",
  },
  {
    core: "Unicorn Hair",
    wood: "Hawthorn",
    length: 10,
    slug: "unicorn-hair-hawthorn-1",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

export default wands;