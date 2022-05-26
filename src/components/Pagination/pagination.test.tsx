import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from '.'

describe('Componente <Pagination />', () => {
  const onPaginate = jest.fn()
  const pagination = {
    next: 'pokemon?limit=12&offset=12',
    previous: 'pokemon?limit=12&offset=0'
  }

  it('Deve renderizar o componente sem problemas', () => {
    render(<Pagination handlePaginate={onPaginate} pagination={pagination} />)

    expect(screen.queryByText(/Anterior/i)).toBeInTheDocument()
    expect(screen.queryByText(/Próxima/i)).toBeInTheDocument()
  })

  it('Deve renderizar apenas botão de Próxima caso não houver página anterior', () => {
    const withoutPrevious = {
      ...pagination,
      previous: undefined
    }

    render(
      <Pagination handlePaginate={onPaginate} pagination={withoutPrevious} />
    )

    expect(screen.queryByText(/Anterior/i)).toBeDisabled()
  })

  it('Deve renderizar apenas botão de Anterior caso não houver próxima página', () => {
    const withoutNext = {
      ...pagination,
      next: undefined
    }

    render(<Pagination handlePaginate={onPaginate} pagination={withoutNext} />)

    expect(screen.queryByText(/Próxima/i)).toBeDisabled()
  })

  describe('Ações do Usuário', () => {
    it('Deve chamar função de paginação ao clicar no botão', () => {
      render(<Pagination handlePaginate={onPaginate} pagination={pagination} />)

      const button = screen.queryAllByRole('button')[0]

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
    })

    it('Deve chamar função de paginação e passar a próxima página ao clicar em Próximo', () => {
      render(<Pagination handlePaginate={onPaginate} pagination={pagination} />)

      const button = screen.getByText(/Próxima/i)

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
      expect(onPaginate).toBeCalledWith(pagination.next)
    })

    it('Deve chamar função de paginação e passar a página anterior ao clicar em Anterior', () => {
      render(<Pagination handlePaginate={onPaginate} pagination={pagination} />)

      const button = screen.getByText(/Anterior/i)

      fireEvent.click(button)

      expect(onPaginate).toBeCalledTimes(1)
      expect(onPaginate).toBeCalledWith(pagination.previous)
    })
  })
})
