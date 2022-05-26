import { Pokemon } from '../types/Pokemon'

const sortPokemons = (map: Pokemon[]) => map.sort((a, b) => a.id - b.id)
export default sortPokemons
