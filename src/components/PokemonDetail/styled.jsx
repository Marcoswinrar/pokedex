import styled from 'styled-components'
import media from 'styled-media-query'

export const PokemonDetail = styled.div`
  width: 50%;
  margin: 2rem auto;
  background-color: white;

  ${media.lessThan('1920px')`
    width: 75%;
  `}

  ${media.lessThan('1300px')`
    width: 85%;
  `}

  ${media.lessThan('small')`
    width: 100%;
  `}

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

  ${media.lessThan('large')`
    width:100%;
    height: auto;
  `}
`

export const Stats = styled.div`
  text-transform: uppercase;
`
