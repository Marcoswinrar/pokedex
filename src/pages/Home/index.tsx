import Layout from '../../components/Layout'
import PokemonList from '../../components/PokemonList'
import { PageContainerStyle } from '../../styles/pages'

const Home = () => (
  <Layout>
    <PageContainerStyle>
      <PokemonList />
    </PageContainerStyle>
  </Layout>
)

export default Home
