import PropTypes from 'prop-types'
import * as S from './styled'

const Pagination = ({ pagination, handlePaginate }) => (
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

Pagination.propTypes = {
  pagination: PropTypes.objectOf(PropTypes.string).isRequired,
  handlePaginate: PropTypes.func.isRequired
}

export default Pagination
