import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Favorites from '.'

describe('Página <Favorites/>', () => {
  it('Deve renderizar a página sem problemas', () => {
    render(<Favorites />, { wrapper: BrowserRouter })

    expect(screen.queryAllByText(/Favoritos/i)).toHaveLength(2)
  })
})
