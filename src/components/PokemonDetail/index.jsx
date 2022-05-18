import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Fetch from '../../config/Fetch'
import PokemonStats from '../PokemonStats'
import PokemonTypes from '../PokemonTypes'
import PokemonAbilities from '../PokemonAbilities'
import * as S from './styled'

const PokemonDetail = () => {
  const params = useParams()
  const [pokemon, setPokemon] = useState()

  const getPokemon = useCallback(async () => {
    try {
      const { data } = await Fetch.get(`pokemon/${params.name}`)
      console.log(data)
      setPokemon(data)
    } catch (error) {
      console.log(error)
    }
  }, [setPokemon])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  if (!pokemon) {
    return <div>Carregando...</div>
  }

  return (
    <S.PokemonDetail>
      <S.Section className="pokemon__title">
        <S.Title>{pokemon.name}</S.Title>
        <S.PokedexNumber>{pokemon.id}</S.PokedexNumber>
      </S.Section>
      <S.Section className="pokemon__details">
        <S.Column>
          <S.SpriteContainer>
            <S.Sprite
              alt={pokemon.name}
              src={pokemon.sprites.other['official-artwork'].front_default}
            />
          </S.SpriteContainer>
        </S.Column>
        <S.Column>
          <h1>Tipo</h1>
          <PokemonTypes types={pokemon.types} />
          <h1>Habilidades</h1>
          <PokemonAbilities abilities={pokemon.abilities} />
          <h1>Stats</h1>
          <PokemonStats stats={pokemon.stats} />
        </S.Column>
      </S.Section>
    </S.PokemonDetail>
  )
}

export default PokemonDetail
