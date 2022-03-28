import React, { useRef } from 'react'
import { CardButton, Title, ResponsiveGrid, ActionButton, P} from '../components/sharedComponents'
import PokeCard from '../components/PokeCard'
import { motion } from 'framer-motion'
import { colors } from '../colors'
import { useContext, useEffect, useState } from 'react'
import { MyPokemonContext } from '../MyPokemonContext'
import styled from '@emotion/styled'
import { getPokemonById } from '../hooks/useLoadPokemons'
import { PokemonListContext } from '../PokemonsContext'

function MyPokemons() {
  const {myPokemons, setMyPokemons} = useContext(MyPokemonContext)
  const [myPokemonDetails, setMyPokemonDetails] = useState([])

  useEffect(async () => {
    setMyPokemonDetails([])
    myPokemons.forEach(async myPoke => {
      const pokeDetail = await getPokemonById(myPoke.id)
      pokeDetail.nickname = myPoke.nickname
      pokeDetail.key = myPoke.key
      setMyPokemonDetails(old => [...old, pokeDetail])
    })
    document.title = "My Pokemons"
  }, [myPokemons])

  const removePokemon = poke => {
    setMyPokemons(myPokemons.filter(p => p.id !== poke.id || p.nickname !== poke.nickname))
    setMyPokemonDetails(myPokemonDetails.filter(p => p.id !== poke.id || p.nickname !== poke.nickname))
  }

  return (
    <>
      <Title>My Pokemons</Title>
      <motion.div
        whileHover={{scale: 1.05}}
          whileTap={{scale: .95}}
      >
        <ActionButton onClick={() => window.history.back()}>Back</ActionButton>
      </motion.div>
      <ResponsiveGrid>
        {myPokemonDetails.length > 0 && myPokemonDetails.map((poke) => <PokeCard pokemon={poke} key={poke.key} nickname={poke.nickname} onClick={() => removePokemon(poke)}/>)}
      </ResponsiveGrid>

      {myPokemonDetails.length == 0 && <EmptyMessage>No pokemons caught yet.<br/>Go catch some!</EmptyMessage>}
    </>
  )
}

const EmptyMessage = styled(P)`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: grey;
`

export default MyPokemons