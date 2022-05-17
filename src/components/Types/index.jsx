import PropTypes from 'prop-types'
import * as S from './styled'

const PokemonTypes = ({ types }) => (
  <S.Types>
    {types.map(({ type }) => (
      <S.Type key={type.name} color={type.name}>
        {type.name}
      </S.Type>
    ))}
  </S.Types>
)

PokemonTypes.propTypes = {
  types: PropTypes.array.isRequired
}

export default PokemonTypes
