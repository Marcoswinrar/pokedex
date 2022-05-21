import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonDetail from '.'
import fetch from '../../config/fetch'
import * as Mock from '../../utils/mock'

describe('Componente <PokemonDetail/>', () => {
  beforeEach(() => {
    jest.spyOn(fetch, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          id: Mock.pokemon.id,
          name: Mock.pokemon.name,
          sprites: Mock.sprites,
          types: Mock.types,
          abilities: Mock.abilities,
          stats: Mock.stats
        }
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
      .mockImplementation(() =>
        Promise.reject({ response: { data: 'Not found' } })
      )

    render(<PokemonDetail />, {
      wrapper: BrowserRouter
    })

    await waitFor(() => {
      expect(screen.queryByText(/Not found/i)).toBeInTheDocument()
    })
  })

  it('Deve apresentar mensagem de erro caso a API falhe e nao retorno erro', async () => {
    jest.spyOn(fetch, 'get').mockImplementation(() => Promise.reject({}))

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
        const arrowIcon = screen.queryByTitle(/Voltar/i)
        fireEvent.click(arrowIcon)
      })

      expect(window.location.pathname).toEqual('/')
    })
  })
})
