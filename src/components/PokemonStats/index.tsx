/* eslint-disable camelcase */
import { Stats } from '../../types/Pokemon'
import statNameMapper from '../../utils/mapper'
import * as S from './styled'

type PokemonStatsProps = {
  stats: Stats[]
}

const PokemonStats = ({ stats }: PokemonStatsProps) => (
  <S.Container>
    {stats.map(({ base_stat, stat }) => (
      <S.StatContainer key={stat.name}>
        <S.StatName>{statNameMapper(stat.name)}</S.StatName>
        <S.Stat stat={stat.name} width={`${base_stat * 0.08}rem`}>
          {base_stat}
        </S.Stat>
      </S.StatContainer>
    ))}
  </S.Container>
)

export default PokemonStats
