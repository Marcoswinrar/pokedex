import Layout from '../../components/Layout'
import PokemonList from '../../components/PokemonList'
import * as S from './styled'

const Home = () => (
  <Layout>
    <S.Home>
      <PokemonList />
    </S.Home>
  </Layout>
)

export default Home
