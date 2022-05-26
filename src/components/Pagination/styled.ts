import styled from 'styled-components'
import Colors from '../../styles/colors'

export const Paginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;
  width: 300px;
`

export const Button = styled.button`
  width: 140px;
  height: 45px;
  color: white;
  font-size: 1rem;
  font-weight: 900;
  background-color: ${Colors.redDefault};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  :disabled {
    display: none;
  }

  :hover {
    background-color: white;
    color: ${Colors.redDefault};
  }
`
