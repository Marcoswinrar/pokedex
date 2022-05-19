import PropTypes from 'prop-types'
import * as S from './styled'

const PokemonAbilities = ({ abilities }) => (
  <S.Container>
    {abilities.map(({ ability }) => (
      <S.Abilitie key={ability.name}>{ability.name}</S.Abilitie>
    ))}
  </S.Container>
)

PokemonAbilities.propTypes = {
  abilities: PropTypes.array.isRequired
}

export default PokemonAbilities
