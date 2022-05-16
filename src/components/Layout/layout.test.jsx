import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '.'

describe('Componente <Layout />', () => {
  it('Deve renderizar o layout sem problemas', () => {
    render(
      <Layout>
        <div>Children component</div>
      </Layout>,
      { wrapper: BrowserRouter }
    )

    expect(screen.queryByText(/Children component/i)).toBeInTheDocument()
  })
})
