import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Fetch from '../../config/Fetch'
import Pokemon from '../Pokemon'
import Pagination from '../Pagination'
import sortPokemons from '../../utils/sort'
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
      } = await Fetch.get(url || 'pokemon?limit=12&offset=0')

      const map = []

      axios
        .all(
          results.map((pokemon) =>
            Fetch.get(pokemon.url).then(({ data }) => map.push(data))
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
