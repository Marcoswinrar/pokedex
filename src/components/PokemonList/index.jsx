import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PokemonCard from '../PokemonCard'
import Pagination from '../Pagination'
import Message from '../Message'
import Grid from './styled'
import ScrollToTopButton from '../ScrollToTopButton'
import fetch from '../../config/fetch'
import sortPokemons from '../../utils/sort'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [pagination, setPagination] = useState({
    next: '',
    previous: ''
  })

  const getPokemons = useCallback(
    async (url = 'pokemon?limit=12&offset=0') => {
      try {
        const {
          data: { results, next, previous }
        } = await fetch.get(url)

        const map = []
        await axios.all(
          results.map((pokemon) =>
            fetch
              .get(pokemon.url)
              .then(({ data }) => {
                map.push(data)
              })
              .catch((error) => {
                setErrorMessage(error.response?.data || 'Erro ao buscar dados!')
              })
          )
        )

        setPokemons(sortPokemons(map))
        setPagination({ next, previous })
      } catch (error) {
        setErrorMessage(error.response?.data || 'Erro ao buscar dados!')
      }
    },
    [setPokemons, setPagination, setErrorMessage]
  )

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  if (errorMessage) {
    return <Message message={errorMessage} />
  }

  return (
    <>
      <Grid>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
      <Pagination pagination={pagination} handlePaginate={getPokemons} />
      <ScrollToTopButton />
    </>
  )
}

export default PokemonList
