import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ScrollToTopButton from '.'

describe('Componente <ScrollTopTopButton />', () => {
  it('Deve renderizar sem mostrar o botão', () => {
    render(<ScrollToTopButton />)

    expect(screen.queryByTitle(/Ir para o topo/i)).toBeNull()
  })

  it('Deve renderizar mostrando o botão', () => {
    render(<ScrollToTopButton />)

    fireEvent.scroll(window, { target: { scrollY: 900 } })

    expect(screen.queryByTitle(/Ir para o topo/i)).toBeDefined()
    expect(window.scrollY).toEqual(900)
  })

  it('Deve voltar para o topo da página ao clicar no botão', async () => {
    window.scrollTo = jest.fn()

    render(<ScrollToTopButton />)

    fireEvent.scroll(window, { target: { scrollY: 900 } })

    const button = screen.queryByTitle(/Ir para o topo/i)
    fireEvent.click(button)

    fireEvent.scroll(window, { target: { scrollY: 0 } })

    expect(screen.queryByTitle(/Ir para o topo/i)).toBeNull()
  })
})
