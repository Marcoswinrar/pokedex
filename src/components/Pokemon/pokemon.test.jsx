import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Pokemon from '.'

describe('Componente <Pokemon />', () => {
  beforeEach(() => {
    const pokemon = {
      name: 'Pikachu',
      id: 25,
      types: [{ type: { name: 'Electric' } }],
      sprites: {
        other: {
          'official-artwork': { front_default: 'image' }
        }
      }
    }

    render(<Pokemon pokemon={pokemon} />, { wrapper: BrowserRouter })
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Pikachu/i)).toBeInTheDocument()
    expect(screen.queryByAltText(/Sprite do Pikachu/i)).toBeInTheDocument()
    expect(screen.queryByText(/Electric/i)).toBeInTheDocument()
  })

  // describe('Ações do Usuário', () => {
  //   it('Deve navegar para a página de detalhe caso clique no Pokemon', () => {
  //     const card = screen.queryByText(/Pikachu/i)

  //     fireEvent.click(card)

  //     expect(window.location.pathname).toBe('/Pikachu')
  //   })
  // })
})
