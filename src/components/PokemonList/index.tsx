import { useState, useEffect, useCallback } from 'react'
import AlertMessage from '../Message'
import PokemonCard from '../PokemonCard'
import Pagination from '../Pagination'
import ScrollToTopButton from '../ScrollToTopButton'
import { Grid } from './styled'
import fetch from '../../config/axios'
import axios, { AxiosError } from 'axios'
import { InitialResponse, Pokemon } from '../../types/Pokemon'
import sortPokemons from '../../utils/sort'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
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

        const map: Pokemon[] = []
        await axios.all(
          results.map((pokemon: InitialResponse) =>
            fetch
              .get(pokemon.url)
              .then(({ data }) => {
                map.push(data)
              })
              .catch((_error) => {
                if (_error instanceof AxiosError)
                  setErrorMessage(
                    _error.response?.data || 'Erro ao buscar dados!'
                  )
              })
          )
        )

        setPokemons(sortPokemons(map))
        setPagination({ next, previous })
      } catch (_error) {
        if (_error instanceof AxiosError)
          setErrorMessage(_error.response?.data || 'Erro ao buscar dados!')
      }
    },
    [setPokemons, setPagination, setErrorMessage]
  )

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  if (errorMessage) {
    return <AlertMessage text={errorMessage} />
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
