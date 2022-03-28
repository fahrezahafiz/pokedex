import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {Card, P} from './sharedComponents'
import { colors } from '../colors'
import { MyPokemonContext } from '../MyPokemonContext'

function PokeCard({pokemon}) {
  const {myPokemons, setMyPokemons} = useContext(MyPokemonContext)

  const HoverCard = styled(Card)`
    &:hover {
      cursor: pointer;
      border: 4px solid ${colors.darkBlue};
    }
  `
  const TextSection = styled.div`
    display: block;
    padding: 1.2rem 0.8rem;
    height: auto;
    background-color: ${colors.darkBlue};
    color: white;
  `

  const Sub = styled(P)`
    display: inline;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.lightBlue};
  `

  const Name = styled(P)`
    font-weight: bold;
    font-size: 2.1rem;
  `

  const PokeImage = styled.img`
    display: block;
    width: 100%;
    padding: 3rem 0;
    margin: auto;
    height: 10rem;
    text-align: center;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.1);
    }
  `

  const Id = styled(P)`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    font-weight: bold;
    font-size: 2rem;
    color: ${colors.lightBlue};
  `

  return (
    <HoverCard>
      <Id>#{pokemon.id}</Id>
      <PokeImage src={pokemon.image}/>
      <TextSection>
        <Name>{pokemon.name}</Name>
        <Sub>Owned - {myPokemons[pokemon.id] ? myPokemons[pokemon.id].length : 0}</Sub>
      </TextSection>
    </HoverCard>
  )
}

export default PokeCard