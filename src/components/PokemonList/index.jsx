import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Fetch from '../../config/Fetch'
import Pokemon from '../Pokemon'
import Pagination from '../Pagination'
import Message from '../Message'
import Grid from './styled'
import sortPokemons from '../../utils/sort'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [pagination, setPagination] = useState({
    next: '',
    previous: ''
  })

  const getPokemons = useCallback(
    async (url) => {
      try {
        const {
          data: { results, next, previous }
        } = await Fetch.get(url || 'pokemon?limit=12&offset=0')

        const map = []

        axios
          .all(
            results.map((pokemon) =>
              Fetch.get(pokemon.url)
                .then(({ data }) => map.push(data))
                .catch((error) => {
                  setErrorMessage(
                    error.response?.data || 'Error ao buscar dados!'
                  )
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

  return (
    <>
      <Grid>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
      <Pagination pagination={pagination} onClick={(url) => getPokemons(url)} />
    </>
  )
}

export default PokemonList
