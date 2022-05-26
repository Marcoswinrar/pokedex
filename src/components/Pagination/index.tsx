import * as S from './styled'

export type Pagination = {
  previous: string | undefined
  next: string | undefined
}

export type PaginationProps = {
  pagination: Pagination
  handlePaginate: (value: string | undefined) => void
}

const Pagination = ({ pagination, handlePaginate }: PaginationProps) => (
  <S.Paginator>
    <S.Button
      disabled={!pagination.previous}
      onClick={() => handlePaginate(pagination.previous)}
    >
      Anterior
    </S.Button>
    <S.Button
      disabled={!pagination.next}
      onClick={() => handlePaginate(pagination.next)}
    >
      Próxima
    </S.Button>
  </S.Paginator>
)

export default Pagination
