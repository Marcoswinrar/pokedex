import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Pokemon from '.'

describe('Página <Pokemon />', () => {
  it('Deve renderizar a página sem problemas', () => {
    render(<Pokemon />, { wrapper: BrowserRouter })
    expect(screen.getByAltText(/Pokedex/i)).toBeInTheDocument()
  })
})
