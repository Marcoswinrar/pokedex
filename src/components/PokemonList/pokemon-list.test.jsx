import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonList from '.'
import fetch from '../../config/fetch'
import typeColours from '../../styles/pokemonTypes'
import * as Mock from '../../utils/mock'

describe('Componente <PokeminList />', () => {
  beforeEach(() => {
    jest.spyOn(fetch, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          results: [{ name: Mock.pokemon.name, id: Mock.pokemon.id }],
          next: 'pokemon?limit=12&offset=12',
          previous: 'pokemon?limit=12&offset=0'
        }
      })
    )
  })

  it('Deve renderizar o componente sem problemas', async () => {
    render(<PokemonList />, { wrapper: BrowserRouter })

    jest.spyOn(fetch, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          id: Mock.pokemon.id,
          name: Mock.pokemon.name,
          types: Mock.types,
          sprites: Mock.sprites
        }
      })
    )

    await waitFor(() => {
      expect(screen.queryByText(/Charizard/i)).toBeInTheDocument()
      expect(screen.queryByText(/Fire/i)).toBeInTheDocument()
      expect(screen.queryByText(/Fire/i)).toHaveStyle({
        backgroundColor: typeColours.fire
      })
    })
  })

  describe('Chamada geral da API', () => {
    it('Deve retornar mensagem de erro da API ao renderizar', async () => {
      jest.spyOn(fetch, 'get').mockImplementation(() =>
        Promise.reject({
          response: { data: 'Not found' }
        })
      )

      render(<PokemonList />, { wrapper: BrowserRouter })

      await waitFor(() => {
        expect(screen.queryByText(/Not found/i)).toBeInTheDocument()
      })
    })

    it('Deve retornar erro padrão caso a API não retornar mensagem', async () => {
      jest.spyOn(fetch, 'get').mockImplementation(() => Promise.reject({}))

      render(<PokemonList />, { wrapper: BrowserRouter })

      await waitFor(() => {
        expect(screen.queryByText(/Erro ao buscar dados!/i)).toBeInTheDocument()
      })
    })
  })
})
