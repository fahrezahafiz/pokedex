import React, { useContext, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import { PokemonListContext } from '../PokemonsContext'
import styled from '@emotion/styled'
import { ActionButton, Card, CardButton, CleanLink, Title, ResponsiveGrid} from '../components/sharedComponents'
import { colors } from '../colors'
import { motion } from 'framer-motion'

function PokemonList() {
  const { pokemons, setPokemons, loadMorePokemons } = useContext(PokemonListContext)

  useEffect(() => {
    document.title = "Pokemon List"
  }, [])

  return (
    <>
      <Title>Pokemon List</Title>
      <motion.div
        whileHover={{scale: 1.05}}
          whileTap={{scale: .95}}
      >
        <CleanLink to={`/myPokemons`}>
          <ActionButton>My Pokemons</ActionButton>
        </CleanLink>
      </motion.div>
      <ResponsiveGrid>
        {pokemons.length > 0 && pokemons.map((poke) => <CleanLink to={`/pokemons/${poke.id}`} key={poke.id}>
          <PokeCard pokemon={poke} key={poke.id}/>
        </CleanLink>)}
        <LoadMoreCard onClick={loadMorePokemons}>
          <LoadText>More<br/>Pokemons</LoadText>
        </LoadMoreCard>
      </ResponsiveGrid>
    </>
  )
}

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


export default PokemonList