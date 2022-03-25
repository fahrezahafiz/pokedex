import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function PokeCard(props) {
  const pokemon = props.pokemon

  const darkBlue = '#363B81'
  const lightBlue = '#5DB9FF'

  const Card = styled.div`
    position: relative;
    overflow: hidden;
    border: 2px solid rgb(220, 220, 220);
    background-color: white;
    border-radius: 1.5rem;
    margin: 0.6rem;
    transition: border 0.2s ease;
    &:hover {
      cursor: pointer;
      border: 2px solid ${darkBlue};
    }
  `
  const TextSection = styled.div`
    display: block;
    padding: 1.2rem 0.8rem;
    height: auto;
    background-color: ${darkBlue};
    color: white;
  `

  const P = styled.p`
    margin: 0.2rem 0;
    text-transform: capitalize;
  `

  const Type = styled(P)`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${lightBlue};
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
    color: ${lightBlue};
  `

  return (
    <Card>
      <Id>#{pokemon.id}</Id>
      <PokeImage src={pokemon.image}/>
      <TextSection>
        <Name>{pokemon.name}</Name>
        <Type>{pokemon.type}</Type>
      </TextSection>
    </Card>
  )
}

export default PokeCard