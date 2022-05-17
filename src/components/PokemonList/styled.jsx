import styled from 'styled-components'
import { PageTitleStyle } from '../../styles/pages'

export const Title = styled.h1`
  ${PageTitleStyle}
`

export const Container = styled.div``

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  padding: 10px;
`
