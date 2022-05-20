import { render, screen } from '@testing-library/react'
import Message from '.'

describe('Componente <Message/>', () => {
  it('Deve renderizar o componente sem problemas', () => {
    render(<Message message="Erro ao buscar dados!" />)

    expect(screen.queryByText(/Erro ao buscar dados!/i)).toBeInTheDocument()
    expect(screen.queryByRole('heading')).toHaveStyle({
      color: 'crimson'
    })
  })
})
