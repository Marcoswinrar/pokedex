import { Ability, Pokemon, Sprites, Stats, Types } from '../types/Pokemon'

const sprites: Sprites = {
  other: { 'official-artwork': { front_default: 'image' } }
}

const abilities: Ability[] = [
  {
    ability: {
      name: 'blaze'
    }
  }
]

const types: Types[] = [
  {
    type: { name: 'fire' }
  }
]

const stats: Stats[] = [
  {
    base_stat: 78,
    stat: { name: 'hp' }
  }
]

const pokemon: Pokemon = {
  name: 'Charizard',
  id: 6,
  sprites,
  abilities,
  types,
  stats
}

export { pokemon, abilities, sprites, stats, types }
