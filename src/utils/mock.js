const pokemon = {
  name: 'Charizard',
  id: 6
}

const sprites = {
  other: { 'official-artwork': { front_default: 'image' } }
}

const abilities = [
  {
    ability: {
      name: 'blaze',
      url: 'https://pokeapi.co/api/v2/ability/66/'
    },
    is_hidden: false,
    slot: 1
  }
]

const types = [
  {
    slot: 1,
    type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' }
  }
]

const stats = [
  {
    base_stat: 78,
    effort: 0,
    stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' }
  }
]

export { pokemon, abilities, sprites, stats, types }
