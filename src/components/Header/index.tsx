import { useNavigate } from 'react-router-dom'
import * as S from './styled'
import Logo from '../../assets/images/pokedex.png'

const Header = () => {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.Logo onClick={() => navigate('/')} alt="Pokedex" src={Logo} />
    </S.Header>
  )
}

export default Header
