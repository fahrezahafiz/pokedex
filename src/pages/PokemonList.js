import React, { useContext, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import { PokemonListContext } from '../PokemonsContext'
import styled from '@emotion/styled'
import { Background, Card, Heading } from '../components/sharedComponents'
import { colors } from '../colors'
import { Link } from 'react-router-dom'

function PokemonList() {
  const { pokemons, setPokemons, loadMorePokemons } = useContext(PokemonListContext)

  useEffect(() => {
    document.title = "Pokemon List"
  }, [])

  const PokemonList = styled.div`
    padding-bottom: 4rem;
    margin: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 18rem);
    justify-content: center;
  `
  const Title = styled(Heading)`
    color: ${colors.darkBlue};
  `
  const CleanLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  `
  const LoadMoreCard = styled(Card)`
    text-align: center;
    display: flex;
    align-items: center;
    transition: color .2s ease;
    &:hover {
      cursor: pointer;
      border: 4px solid ${colors.lightBlue};
      color: ${colors.lightBlue};
    }
  `
  const LoadText = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 2rem 0;
    margin: auto;
  `

  return (
    <>
      <Title>Pokemon List</Title>
      <PokemonList>
        {pokemons.length > 0 && pokemons.map((poke) => <CleanLink to={`/pokemons/${poke.id}`} key={poke.id}>
          <PokeCard pokemon={poke} key={poke.id}/>
        </CleanLink>)}
        <LoadMoreCard onClick={loadMorePokemons}>
          <LoadText>More<br/>Pokemons</LoadText>
        </LoadMoreCard>
      </PokemonList>
    </>
  )
}

export default PokemonList