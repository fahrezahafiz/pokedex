import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

function PokeCard(props) {
  const pokemon = props.pokemon

  const Card = styled.div`
    overflow: hidden;
    border: 2px solid rgb(220, 220, 220);
    
    background-color: white;
    text-align: center;
    border-radius: 1.5rem;
    padding: 1rem;
    margin: 0.5rem;
  `

  const Paragraph = styled.p`
    margin: 0.2rem 0;
    text-transform: capitalize;
  `

  const Title = styled(Paragraph)`
   color: red;
  `

  // const PokemonImage

  return (
    <Card>
      <Paragraph>{pokemon.type}</Paragraph>
      <img src={pokemon.image} height="160"></img>
      <Title>{pokemon.name}</Title>
      {pokemon.moves.length > 0 && pokemon.moves.map}
    </Card>
  )
}

export default PokeCard