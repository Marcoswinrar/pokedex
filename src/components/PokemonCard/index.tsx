import { useNavigate } from 'react-router-dom'
import { Pokemon } from '../../types/Pokemon'
import PokemonTypes from '../PokemonTypes'
import * as S from './styled'

export type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate()
  return (
    <S.Pokemon
      color={pokemon.types[0].type.name}
      onClick={() => navigate(`/${pokemon.name}`)}
    >
      <S.Sprite
        alt={`Sprite do ${pokemon.name}`}
        src={pokemon.sprites.other['official-artwork'].front_default}
        loading="lazy"
      />
      <S.Content>
        <S.PokedexNumber>{pokemon.id}</S.PokedexNumber>
        <S.Name>{pokemon.name}</S.Name>
        <PokemonTypes types={pokemon.types} />
      </S.Content>
    </S.Pokemon>
  )
}

export default PokemonCard
