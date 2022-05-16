import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Componente <Header />', () => {
  it('Deve renderizar o componente sem problemas', () => {
    render(<Header />)

    expect(screen.queryByText(/Pokedex/i)).toBeInTheDocument()
  })
})
