import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { colors } from '../colors'
import { Background, Card, CardButton, Heading, P } from '../components/sharedComponents'
import { getPokemonById } from '../hooks/useLoadPokemons'
import { css } from '@emotion/react'
import Modal from '../components/Modal'
import { AnimatePresence, motion } from 'framer-motion'
import NicknameModal from '../components/NicknameModal'
import { MyPokemonContext } from '../MyPokemonContext'

const STATES = {
  IDLE: "idle",
  CATCHING: "catching",
  SUCCESS: "success",
  FAIL: "fail"
};

function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [catchState, setCatchState] = useState(STATES.IDLE)
  const {myPokemons, setMyPokemons} = useContext(MyPokemonContext)

  const closeNickModal = () => setModalOpen(false)
  const openNickModal = () => setModalOpen(true)

  const tryCatch = async () => {
    setCatchState(STATES.CATCHING)
    const caughtProb = Math.random()
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`probability: ${caughtProb}`)

    if (caughtProb >= 0.5) {
      setCatchState(STATES.SUCCESS)
      openNickModal()
    } else {
      setCatchState(STATES.FAIL)
    }
  }

  const addPokemon = (nickname) => {
    if (myPokemons.find(p => p.id === pokemon.id && p.nickname === nickname)) {
      // 
    } else {
      setMyPokemons(old => [...old, {
        id: pokemon.id,
        nickname: nickname,
        key: `${pokemon.id}.${nickname}`
      }])
    }
    
    closeNickModal()
    setCatchState(STATES.IDLE)

    console.log(myPokemons)
  }

  const getStateMessage = () => {
    switch (catchState) {
      case STATES.FAIL:
        return "Oh snap, you missed! Try it again"
      default:
        return "";
    }
  }

  useEffect(async () => {
    const currentPokemon = await getPokemonById(id)
    setPokemon(currentPokemon)

    document.title = `${(currentPokemon.name).charAt(0).toUpperCase() + (currentPokemon.name).slice(1)}`
  }, [id])

  return (
    <>
      <Container>
        <Image src={pokemon.image}/>

        <DetailCard>
          <Back onClick={() => window.history.back()}>&lt; Back to List</Back>

          <Name>{pokemon.name}</Name>

          <Subtitle>Type</Subtitle>
          <Content>{pokemon.type}</Content>

          <Subtitle>Moves</Subtitle>
          {pokemon.moves && pokemon.moves.map((m, idx) => <Content key={idx}>{m}</Content>)}

          <Subtitle>{getStateMessage()}</Subtitle>
        </DetailCard>

        <motion.div
          whileHover={{scale: 1.05}}
          whileTap={{scale: .95}}
        >
          <CardButton onClick={tryCatch}>
            {catchState == STATES.CATCHING ? "Catching..." : "Catch!"}
          </CardButton>
        </motion.div>
      </Container>
      
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={closeNickModal} component={<NicknameModal onSubmit={(name) => addPokemon(name)} pokemon={pokemon}/>}/>}
      </AnimatePresence>
    </>
  )
}

const Container = styled.div`
    width: clamp(30%, 500px, 90%);
    margin: auto;
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
    font-size: 1.4rem;
    color: rgb(30, 30, 30);
  `

export default PokemonDetail