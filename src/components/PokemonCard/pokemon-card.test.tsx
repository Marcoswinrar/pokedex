import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonCard from '.'
import { pokemon } from '../../__mocks__/pokemon'

describe('Componente <PokemonCard />', () => {
  beforeEach(() => {
    render(<PokemonCard pokemon={pokemon} />, { wrapper: BrowserRouter })
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Charizard/i)).toBeInTheDocument()
    expect(screen.queryByAltText(/Sprite do Charizard/i)).toBeInTheDocument()
    expect(screen.queryByText(/Fire/i)).toBeInTheDocument()
  })

  describe('Ações do Usuário', () => {
    it('Deve navegar para a página de detalhe caso clique no Pokemon', () => {
      const card = screen.getByText(/Charizard/i)

      fireEvent.click(card)

      expect(window.location.pathname).toBe('/Charizard')
    })
  })
})
