import PropTypes from 'prop-types'
import PokemonTypes from '../Types'
import * as S from './styled'

const Pokemon = ({ pokemon }) => (
  <S.Pokemon color={pokemon.types[0].type.name}>
    <S.Sprite
      alt="Foto do pokemon"
      src={pokemon.sprites.other['official-artwork'].front_default}
    />
    <S.Content>
      <S.PokedexNumber>{pokemon.id}</S.PokedexNumber>
      <S.Name>{pokemon.name}</S.Name>
      <PokemonTypes types={pokemon.types} />
    </S.Content>
  </S.Pokemon>
)

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    ),
    sprites: PropTypes.object,
    id: PropTypes.number.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default Pokemon
