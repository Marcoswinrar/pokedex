/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import statNameMapper from '../../utils/mapper'
import * as S from './styled'

const PokemonStats = ({ stats }) => (
  <S.Container>
    {stats.map(({ base_stat, stat }) => (
      <S.StatContainer>
        <S.StatName>{statNameMapper(stat.name)}</S.StatName>
        <S.Stat stat={stat.name} width={`${base_stat * 0.08}rem`}>
          {base_stat}
        </S.Stat>
      </S.StatContainer>
    ))}
  </S.Container>
)

PokemonStats.propTypes = {
  stats: PropTypes.array.isRequired
}

export default PokemonStats
