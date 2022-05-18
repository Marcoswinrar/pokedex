import styled from 'styled-components'
import statsColours from '../../styles/pokemonStats'

export const Container = styled.div`
  margin: 1rem auto;
`

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
`
export const StatName = styled.span`
  width: 80px;
  margin-left: 12px;
  text-transform: capitalize;
  font-weight: 600;

  ::after {
    content: ':';
  }
`
export const Stat = styled.p`
  width: ${(prop) => prop.width};
  background-color: ${(props) => statsColours[props.stat]};
  border-radius: 5px;
  padding: 3px;
  margin: 5px;
  color: white;
`
