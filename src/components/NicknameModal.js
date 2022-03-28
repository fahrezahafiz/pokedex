import styled from '@emotion/styled'
import React from 'react'
import { CardButton, Heading, P } from './sharedComponents'
import { useState } from 'react'

function NicknameModal({onSubmit}) {
  const [nickname, setNickname] = useState("")

  const handleSubmit = e => {
    if (!nickname || nickname.length == 0) return
    e.preventDefault();
    console.log(`nickname: ${nickname}`)
    onSubmit(nickname)
  }

  return (
    <>
      <Title>Nice catch!</Title>
      <Subtitle>Now give your new pokemon a nickname</Subtitle>
        <TextField type="text" placeholder="Nickname" onChange={e => (setNickname(e.target.value))}/>
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

export default NicknameModal