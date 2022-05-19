import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Message from '../Message'
import PokemonStats from '../PokemonStats'
import PokemonTypes from '../PokemonTypes'
import PokemonAbilities from '../PokemonAbilities'
import * as S from './styled'
import fetch from '../../config/fetch'

const PokemonDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState()
  const [errorMessage, setErrorMessage] = useState(undefined)

  const getPokemon = useCallback(async () => {
    try {
      const { data } = await fetch.get(`pokemon/${params.name}`)
      setPokemon(data)
    } catch (error) {
      setErrorMessage(error.response?.data || 'Erro ao buscar dados!')
    }
  }, [setPokemon, setErrorMessage])

  useEffect(() => {
    getPokemon()
  }, [getPokemon])

  if (errorMessage) {
    return <Message message={errorMessage} />
  }

  if (!pokemon) {
    return <Message message="Carregando..." />
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
