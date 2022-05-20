import { render, screen } from '@testing-library/react'
import Loading from '.'

describe('Componente <Loading/>', () => {
  it('Deve renderizar o componente sem problemas', () => {
    const { container } = render(<Loading />)

    expect(container).toMatchSnapshot()
  })
})
