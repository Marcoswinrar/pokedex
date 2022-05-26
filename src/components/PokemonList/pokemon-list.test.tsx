import { render, screen, waitFor } from '@testing-library/react'
import { AxiosError } from 'axios'
import { BrowserRouter } from 'react-router-dom'
import PokemonList from '.'
import fetch from '../../config/axios'
import typeColours from '../../styles/pokemonTypes'
import { pokemon } from '../../__mocks__/pokemon'

describe('Componente <PokeminList />', () => {
  beforeEach(() => {
    jest.spyOn(fetch, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          results: [{ name: pokemon.name, id: pokemon.id }],
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
        data: pokemon
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

  it('Deve retornar erro caso a API falhe', async () => {
    jest
      .spyOn(fetch, 'get')
      .mockImplementation(() => Promise.reject(new AxiosError()))

    render(<PokemonList />, { wrapper: BrowserRouter })

    await waitFor(() => {
      expect(screen.queryByText(/Erro ao buscar dados!/i)).toBeInTheDocument()
    })
  })
})
