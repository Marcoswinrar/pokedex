import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Message from '../Message'
import PokemonStats from '../PokemonStats'
import PokemonTypes from '../PokemonTypes'
import PokemonAbilities from '../PokemonAbilities'
import Loading from '../Loading'
import fetch from '../../config/axios'
import { AxiosError } from 'axios'
import { Pokemon } from '../../types/Pokemon'
import * as S from './styled'

const PokemonDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState<Pokemon>()
  const [errorMessage, setErrorMessage] = useState(undefined)

  const getPokemon = useCallback(async () => {
    try {
      const { data } = await fetch.get(`pokemon/${params.name}`)
      setPokemon(data)
    } catch (_error) {
      if (_error instanceof AxiosError)
        setErrorMessage(_error.response?.data || 'Erro ao buscar dados!')
    }
  }, [setPokemon, setErrorMessage])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  if (errorMessage) {
    return <Message text={errorMessage} />
  }

  if (!pokemon) {
    return <Loading />
  }

  return (
    <S.PokemonDetail>
      <S.Section className="pokemon__header">
        <S.ArrowBack title="Voltar" onClick={() => navigate('/')} />
      </S.Section>
      <S.Section className="pokemon__title">
        <S.Title>{pokemon.name}</S.Title>
        <S.PokedexNumber>{pokemon.id}</S.PokedexNumber>
      </S.Section>
      <S.Section className="pokemon__details">
        <S.Column>
          <S.SpriteContainer>
            <S.Sprite
              alt={`Sprite do ${pokemon.name}`}
              src={pokemon.sprites?.other['official-artwork'].front_default}
            />
          </S.SpriteContainer>
        </S.Column>
        <S.Column>
          <h2>Tipo</h2>
          <PokemonTypes types={pokemon.types} />
          <h2>Habilidades</h2>
          <PokemonAbilities abilities={pokemon.abilities} />
          <h2>Stats</h2>
          <PokemonStats stats={pokemon.stats} />
        </S.Column>
      </S.Section>
    </S.PokemonDetail>
  )
}

export default PokemonDetail
