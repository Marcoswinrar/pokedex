import PropTypes from 'prop-types'
import * as S from './styled'

const Pagination = ({ pagination, onPaginate }) => (
  <S.Paginator>
    <S.Button
      disabled={!pagination.previous}
      onClick={() => onPaginate(pagination.previous)}
    >
      Anterior
    </S.Button>
    <S.Button
      disabled={!pagination.next}
      onClick={() => onPaginate(pagination.next)}
    >
      Próxima
    </S.Button>
  </S.Paginator>
)

Pagination.propTypes = {
  pagination: PropTypes.objectOf(PropTypes.string).isRequired,
  onPaginate: PropTypes.func.isRequired
}

export default Pagination
