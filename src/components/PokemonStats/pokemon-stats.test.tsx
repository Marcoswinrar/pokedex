import { render, screen } from '@testing-library/react'
import PokemonStats from '.'
import { stats } from '../../__mocks__/pokemon'
import statsColours from '../../styles/pokemonStats'

describe('Component <PokemonStats />', () => {
  beforeEach(() => {
    render(<PokemonStats stats={stats} />)
  })

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Hp/i)).toBeInTheDocument()
  })

  it('Deve ter a cor de fundo com base no tipo de stat', () => {
    expect(screen.queryByText(/78/)).toHaveStyle({
      backgroundColor: statsColours.hp
    })
  })
})
