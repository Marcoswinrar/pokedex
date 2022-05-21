import { cleanup, render, screen } from '@testing-library/react'
import PokemonTypes from '.'
import typeColours from '../../styles/pokemonTypes'
import { types } from '../../utils/mock'

describe('Component <PokemonTypes />', () => {
  beforeEach(() => {
    render(<PokemonTypes types={types} />)
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Fire/i)).toBeInTheDocument()
  })

  it('Deve ter a cor de fundo com base no tipo do pokemon', () => {
    expect(screen.queryByText(/Fire/i)).toHaveStyle({
      backgroundColor: typeColours.fire
    })
  })
})
