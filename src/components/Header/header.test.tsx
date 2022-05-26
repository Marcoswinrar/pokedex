import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

describe('Componente <Header />', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter })
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByAltText(/Pokedex/i)).toBeInTheDocument()
  })

  describe('Ações do usuário', () => {
    it('Deve redirecionar para a Home ao clicar na logo', () => {
      const button = screen.getByAltText(/Pokedex/i)
      fireEvent.click(button)

      expect(window.location.pathname).toEqual('/')
    })
  })
})
