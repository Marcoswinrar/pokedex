import { Types } from '../../types/Pokemon'
import * as S from './styled'

type PokemonTypesProps = {
  types: Types[]
}

const PokemonTypes = ({ types }: PokemonTypesProps) => (
  <S.Types>
    {types.map(({ type }) => (
      <S.Type key={type.name} color={type.name}>
        {type.name}
      </S.Type>
    ))}
  </S.Types>
)

export default PokemonTypes
