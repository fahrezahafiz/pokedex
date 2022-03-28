import styled from '@emotion/styled'
import React, { useContext } from 'react'
import { CardButton, Heading, P } from './sharedComponents'
import { useState } from 'react'
import { MyPokemonContext } from '../MyPokemonContext'

function NicknameModal({onSubmit, pokemon}) {
  const {myPokemons, setMyPokemons} = useContext(MyPokemonContext)
  const [nickname, setNickname] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if (!nickname || nickname.length == 0) return
    if (myPokemons.find(p => p.id === pokemon.id && p.nickname === nickname)) {
      setError("Nickname is already taken for this pokemon!")
      return
    }
    onSubmit(nickname)
  }

  return (
    <>
      <Title>Nice catch!</Title>
      <Subtitle>Now give your new pokemon a nickname</Subtitle>
        <TextField type="text" placeholder="Nickname" onChange={e => (setNickname(e.target.value))}/>
        {error.length > 0 && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </>
  )
}

const Title = styled.h2`
  font-size: clamp(1rem, 10vw, 2rem);
  margin: 0;
`
const Subtitle = styled(P)`
  margin: 1rem 0;
  text-transform: none;
`
const TextField = styled.input`
  display: block;
  margin: auto;
  width: 70%;
  padding: .8rem;
  border-radius: .5rem;
  border: 1px solid lightgrey;
  font-family: 'Maven Pro';
  font-size: 1rem;
  text-align: center;
`
const SubmitButton = styled(CardButton)``

const ErrorMessage = styled(P)`
  color: red;
  text-transform: none;
`

export default NicknameModal