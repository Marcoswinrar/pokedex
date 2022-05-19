import styled from 'styled-components'
import media from 'styled-media-query'
import { MdKeyboardBackspace } from 'react-icons/md'
import Colors from '../../styles/colors'
import bounceIn from './animation'

export const PokemonDetail = styled.div`
  width: 50%;
  margin: 2rem auto;
  background-color: white;
  border-radius: 13px;

  ${media.lessThan('1920px')`
    width: 75%;
  `}

  ${media.lessThan('1300px')`
    width: 85%;
  `}

  ${media.lessThan('small')`
    width: 100%;
  `}

  .pokemon__header {
    background-color: ${Colors.redDefault};
    border-bottom: 1px solid #2d3436;
    cursor: pointer;
  }

  .pokemon__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 16px;
  }

  .pokemon__details {
    padding: 16px;

    ${media.lessThan('large')`
      flex-direction: column;
      align-items: center;  
  `}
  }
`

export const Section = styled.section`
  display: flex;
`
export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.lessThan('large')`
    width: 100%;  
  `}

  :first-child {
    border-radius: 8px;
    background-color: #f4f4f4;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: lighter;
  margin: 0;
  text-transform: capitalize;
`

export const PokedexNumber = styled.span`
  font-size: 1.6rem;
  margin: 8px;
  color: #616161;

  ::before {
    content: 'Nº';
  }
`
export const SpriteContainer = styled.div``
export const Sprite = styled.img`
  display: block;
  margin: 0 auto;
  animation: ${bounceIn} 1s ease 0s 1 normal forwards;

  ${media.lessThan('large')`
    width:100%;
    height: auto;
  `}

  ${media.lessThan('medium')`
    animation: none;
  `}
`

export const Stats = styled.div`
  text-transform: uppercase;
`

export const ArrowBack = styled(MdKeyboardBackspace)`
  color: white;
  padding: 8px;
  font-size: 2.5rem;
`
