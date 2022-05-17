import styled from 'styled-components'
import Colours from '../../styles/pokemonTypes'

export const Types = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`

export const Type = styled.span`
  background-color: ${(props) => Colours[props.color]};
  color: white;
  margin: 3px;
  padding: 5px;
  text-align: center;
  text-transform: capitalize;
  border-radius: 3px;
`
