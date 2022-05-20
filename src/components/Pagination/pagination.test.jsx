import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Pagination from '.'

describe('Componente <Pagination />', () => {
  const onPaginate = jest.fn()
  const pagination = {
    next: 'pokemon?limit=12&offset=12',
    previous: 'pokemon?limit=12&offset=0'
  }

  const renderComponent = (pagination) =>
    render(<Pagination onPaginate={onPaginate} pagination={pagination} />)

  beforeEach(() => renderComponent(pagination))

  it('Deve renderizar o componente sem problemas', () => {
    expect(screen.queryByText(/Anterior/i)).toBeInTheDocument()
    expect(screen.queryByText(/Próxima/i)).toBeInTheDocument()
  })

  it('Deve renderizar apenas botão de Próxima caso não houver página anterior', () => {
    cleanup()

    renderComponent({
      ...pagination,
      previous: null
    })

    expect(screen.queryByText(/Anterior/i)).toBeDisabled()
  })

  it('Deve renderizar apenas botão de Anterior caso não houver próxima página', () => {
    cleanup()

    renderComponent({
      ...pagination,
      next: null
    })

    expect(screen.queryByText(/Próxima/i)).toBeDisabled()
  })

  describe('Ações do Usuário', () => {
    it('Deve chamar função de paginação ao clicar no botão', () => {
      const button = screen.queryAllByRole('button')[0]

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
    })

    it('Deve chamar função de paginação e passar a próxima página ao clicar em Próximo', () => {
      const button = screen.queryByText(/Próxima/i)

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
      expect(onPaginate).toBeCalledWith(pagination.next)
    })

    it('Deve chamar função de paginação e passar a página anterior ao clicar em Anterior', () => {
      const button = screen.queryByText(/Anterior/i)

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
      expect(onPaginate).toBeCalledWith(pagination.previous)
    })
  })
})
