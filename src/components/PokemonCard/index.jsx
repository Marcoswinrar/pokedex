import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import PokemonTypes from '../PokemonTypes'
import * as S from './styled'

const PokemonCard = ({ pokemon }) => {
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    ),
    sprites: PropTypes.object,
    id: PropTypes.number.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default PokemonCard
