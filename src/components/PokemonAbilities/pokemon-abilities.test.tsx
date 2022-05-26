import { render, screen } from '@testing-library/react'
import PokemonAbilities from '.'

describe('Componente <PokemonAbilities/>', () => {
  it('Deve renderizar componente sem problemas', () => {
    const abilities = [
      { ability: { name: 'Overgrow' } },
      { ability: { name: 'chlorophyll' } }
    ]
    render(<PokemonAbilities abilities={abilities} />)

    expect(screen.queryByText(/Overgrow/i)).toBeInTheDocument()
    expect(screen.queryByText(/chlorophyll/i)).toBeInTheDocument()
  })
})
