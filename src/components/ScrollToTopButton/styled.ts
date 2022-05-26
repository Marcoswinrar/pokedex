import styled from 'styled-components'
import { MdNorth } from 'react-icons/md'
import Colors from '../../styles/colors'

export const Button = styled(MdNorth)`
  color: ${Colors.redDefault};
  font-size: 1.5rem;
  padding: 8px;
  cursor: pointer;
  position: fixed;
  bottom: 2.2rem;
  right: 0;
`
export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
