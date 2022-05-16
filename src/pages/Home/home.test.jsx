import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '.'

describe('Página <Home/>', () => {
  it('Deve renderizar a página sem problemas', () => {
    render(<Home />, { wrapper: BrowserRouter })

    expect(screen.queryByText(/Inicio/i)).toBeInTheDocument()
  })
})
