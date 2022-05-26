import styled from 'styled-components'
import typeColours from '../../styles/pokemonTypes'
import { PokemonTypeName } from '../../types/PokemonTypes'

type Props = {
  color: PokemonTypeName
}

export const Types = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`

export const Type = styled.span<Props>`
  background-color: ${(props) => typeColours[props.color]};
  color: white;
  margin: 3px;
  padding: 5px;
  text-align: center;
  text-transform: capitalize;
  border-radius: 3px;
`
