import { Ability } from '../../types/Pokemon'
import * as S from './styled'

type PokemonAbilitiesProps = {
  abilities: Ability[]
}

const PokemonAbilities = ({ abilities }: PokemonAbilitiesProps) => (
  <S.Container>
    {abilities.map(({ ability }) => (
      <S.Abilitie key={ability.name}>{ability.name}</S.Abilitie>
    ))}
  </S.Container>
)

export default PokemonAbilities
