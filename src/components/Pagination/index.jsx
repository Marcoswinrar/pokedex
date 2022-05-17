import PropTypes from 'prop-types'
import * as S from './styled'

const Pagination = ({ pagination, onClick }) => {
  const paginate = (page) => onClick(page)

  return (
    <S.Paginator>
      <S.Button
        disabled={!pagination.previous}
        onClick={() => paginate(pagination.previous)}
      >
        Anterior
      </S.Button>
      <S.Button
        disabled={!pagination.next}
        onClick={() => paginate(pagination.next)}
      >
        Próxima
      </S.Button>
    </S.Paginator>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.objectOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Pagination
