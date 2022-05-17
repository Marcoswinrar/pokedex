import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon'
import Pagination from '../Pagination'
import * as S from './styled'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [pagination, setPagination] = useState({
    next: '',
    previous: ''
  })

  const getPokemons = useCallback(
    async (url) => {
      const {
        data: { results, next, previous }
      } = await axios.get(
        url || 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0'
      )

      const map = []

      axios
        .all(
          results.map((pokemon) =>
            axios.get(pokemon.url).then(({ data }) => map.push(data))
          )
        )
        .finally(() => {
          setPagination((prev) => ({
            ...prev,
            next,
            previous
          }))
          setPokemons(map.sort((a, b) => a.id - b.id))
        })
    },
    [setPokemons, setPagination]
  )

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  return (
    <S.Container>
      <S.Grid>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </S.Grid>
      <Pagination pagination={pagination} onClick={(url) => getPokemons(url)} />
    </S.Container>
  )
}

export default PokemonList
