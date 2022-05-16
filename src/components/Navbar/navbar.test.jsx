import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '.'

describe('Componente <Nabvar />', () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter })
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Inicio/i)).toBeInTheDocument()
    expect(screen.queryByText(/Favoritos/i)).toBeInTheDocument()
  })

  describe('Ações do usuário', () => {
    it('Deve redirecionar para o rota de Inicio ao clicar', () => {
      const link = screen.queryByText(/Inicio/i)
      fireEvent.click(link)

      expect(window.location.pathname).toEqual('/')
    })

    it('Deve redirecionar para a rota de Favoritos ao clicar', () => {
      const link = screen.queryByText(/Favoritos/)
      fireEvent.click(link)

      expect(window.location.pathname).toEqual('/favorites')
    })
  })
})
