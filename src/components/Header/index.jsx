import * as S from './styled'
import Logo from '../../assets/images/pokedex.png'

const Header = () => (
  <S.Header>
    <S.Logo alt="Pokedex" src={Logo} />
  </S.Header>
)

export default Header
