import React from 'react'
import { CardButton, Title, ResponsiveGrid, ActionButton} from '../components/sharedComponents'
import PokeCard from '../components/PokeCard'
import { motion } from 'framer-motion'
import { colors } from '../colors'
import { useContext, useEffect, useState } from 'react'
import { MyPokemonContext } from '../MyPokemonContext'
import styled from '@emotion/styled'
import { getPokemonById } from '../hooks/useLoadPokemons'

function MyPokemons() {
  const {myPokemons, setMyPokemons} = useContext(MyPokemonContext)
  const [myPokemonDetails, setMyPokemonDetails] = useState([])

  useEffect(async () => {
    const uniqueIds = [...new Set(myPokemons.map(myPoke => myPoke.id))];
    await uniqueIds.forEach(async id => {
      const pokeDetail = await getPokemonById(id)
      setMyPokemonDetails(old => [...old, pokeDetail])
    })

  }, [])

  const getPokeDetailById = id => {
    return myPokemonDetails.find(p => p.id === id)
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
        {myPokemonDetails.length > 0 && myPokemons.map((poke) => <PokeCard pokemon={getPokeDetailById(poke.id)} key={poke.key} nickname={poke.nickname}/>)}
      </ResponsiveGrid>
    </>
  )
}

export default MyPokemons