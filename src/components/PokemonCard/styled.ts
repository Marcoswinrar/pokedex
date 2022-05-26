import styled from 'styled-components'
import media from 'styled-media-query'
import typeColours from '../../styles/pokemonTypes'
import { PokemonTypeName } from '../../types/PokemonTypes'

type Props = {
  color: PokemonTypeName
}

export const Pokemon = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => typeColours[props.color]};
  transition: transform 0.2s linear;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  ${media.lessThan('medium')`
    :hover {
      transform: none;
    }
  `}
`

export const Sprite = styled.img`
  padding: 8px;
  width: 170px;
  height: 170px;
`

export const Content = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
`

export const PokedexNumber = styled.p`
  padding: 8px;
  margin: 0;
  color: #919191;
  font-weight: 500;

  ::before {
    content: 'Nº';
  }
`
export const Name = styled.h5`
  padding: 8px;
  margin: 0;
  font-size: 1.4rem;
  text-align: center;
  text-transform: capitalize;
  font-weight: lighter;
`
