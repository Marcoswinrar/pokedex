import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AxiosError } from 'axios'
import { BrowserRouter } from 'react-router-dom'
import PokemonDetail from '.'
import fetch from '../../config/axios'
import { pokemon } from '../../__mocks__/pokemon'

describe('Componente <PokemonDetail/>', () => {
  beforeEach(() => {
    jest.spyOn(fetch, 'get').mockImplementation(() =>
      Promise.resolve({
        data: pokemon
      })
    )
  })

  it('Deve renderizar o componente sem problemas', async () => {
    render(<PokemonDetail />, {
      wrapper: BrowserRouter
    })

    await waitFor(() => {
      expect(screen.queryByText(/6/i)).toBeInTheDocument()
      expect(screen.queryByText(/Charizard/i)).toBeInTheDocument()
    })
  })

  it('Deve apresentar mensagem de erro caso a API falhe', async () => {
    jest
      .spyOn(fetch, 'get')
      .mockImplementation(() => Promise.reject(new AxiosError()))

    render(<PokemonDetail />, {
      wrapper: BrowserRouter
    })

    await waitFor(() => {
      expect(screen.queryByText(/Erro ao buscar dados!/i)).toBeInTheDocument()
    })
  })

  describe('Ações do Usuário', () => {
    it('Deve retornar a Home caso seja clicado no icone de voltar', async () => {
      render(<PokemonDetail />, {
        wrapper: BrowserRouter
      })

      await waitFor(() => {
        const arrowIcon = screen.getByTitle(/Voltar/i)
        fireEvent.click(arrowIcon)
      })

      expect(window.location.pathname).toEqual('/')
    })
  })
})
