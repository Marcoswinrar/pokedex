import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon'
import Pagination from '../Pagination'
import Message from '../Message'
import Grid from './styled'
import Loading from '../Loading'
import ScrollToTopButton from '../ScrollToTopButton'
import fetch from '../../config/fetch'
import sortPokemons from '../../utils/sort'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [pagination, setPagination] = useState({
    next: '',
    previous: ''
  })

  const getPokemons = useCallback(
    async (url) => {
      setLoading(true)
      try {
        const {
          data: { results, next, previous }
        } = await fetch.get(url || 'pokemon?limit=12&offset=0')

        const map = []

        axios
          .all(
            results.map((pokemon) =>
              fetch
                .get(pokemon.url)
                .then(({ data }) => {
                  map.push(data)
                  setLoading(false)
                })
                .catch((error) => {
                  setErrorMessage(
                    error.response?.data || 'Error ao buscar dados!'
                  )
                  setLoading(false)
                })
            )
          )
          .finally(() => {
            setPagination((prev) => ({
              ...prev,
              next,
              previous
            }))
            setPokemons(sortPokemons(map))
          })
      } catch (error) {
        setErrorMessage(error.response?.data || 'Error ao buscar dados!')
      }
    },
    [setPokemons, setPagination]
  )

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  if (errorMessage) {
    return <Message message={errorMessage} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Grid>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
      <Pagination pagination={pagination} onPaginate={getPokemons} />
      <ScrollToTopButton />
    </>
  )
}

export default PokemonList
