import { PokemonStatsName } from './PokemonStats'
import { PokemonTypeName } from './PokemonTypes'

export type Sprites = {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export type Types = {
  type: {
    name: PokemonTypeName
  }
}

export type Stats = {
  base_stat: number
  stat: {
    name: PokemonStatsName
  }
}

export type Ability = {
  ability: {
    name: string
  }
}

export type Pokemon = {
  types: Types[]
  name: string
  id: number
  sprites: Sprites
  stats: Stats[]
  abilities: Ability[]
}

export type InitialResponse = {
  url: string
  name: string
}
