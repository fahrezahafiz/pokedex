import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { colors } from '../colors'
import { Card, Heading, P } from '../components/sharedComponents'
import { getPokemonById } from '../hooks/useLoadPokemons'
import { css } from '@emotion/react'

function PokemonDetailPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(async () => {
    const currentPokemon = await getPokemonById(id)
    setPokemon(currentPokemon)

    document.title = `Pokemon - ${pokemon.name}`
  }, [])

  const Background = styled.div`
    background-color: ${colors.lightBlue}50;
    height: 100vh;
  `
  const Container = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 0 50px;
  `
  const DetailCard = styled(Card)`
    color: black;
    padding: 2rem;
    margin: auto;
    border: none;
  `
  const Image = styled.img`
    display: block;
    padding-top: 4rem;
    padding-bottom: 2rem;
    margin: auto;
    height: 14rem;
    transition: all 1s ease;
    &:hover {
      transform: scale(1.2);
    }
  `
  const Back = styled(P)`
    color: ${colors.lightBlue};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `
  const Name = styled(Heading)`
    margin: 1rem 0 0 0;
    text-align: left;
    color: ${colors.darkBlue}
  `
  const Subtitle = styled(P)`
    margin-top: 1.2rem;
    color: grey;
    font-weight: 500;
  `
  const Content = styled(P)`
    font-weight: bold;
    font-size: 1.6rem;
    color: rgb(30, 30, 30);
  `
  const CatchButton = styled(Card)`
    margin: 1rem 0 0 0;
    padding: 1.2rem;
    border: none;
    color: white;
    text-align: center;
    font-size: 1.4rem;
    background-color: ${colors.darkBlue};
    user-select: none;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      font-size: 1.6rem;
    }
  `

  return (
    <Background>
      <Container>
        <Image src={pokemon.image}/>

        <DetailCard>
          <Back onClick={() => window.history.back()}>&lt; Back to List</Back>

          <Name>{pokemon.name}</Name>

          <Subtitle>Type</Subtitle>
          <Content>{pokemon.type}</Content>

          <Subtitle>Moves</Subtitle>
          {pokemon.moves && pokemon.moves.map((m, idx) => <Content key={idx}>{m}</Content>)}
        </DetailCard>

        <CatchButton>
          Catch!
        </CatchButton>
      </Container>
    </Background>
    
  )
}

export default PokemonDetailPage