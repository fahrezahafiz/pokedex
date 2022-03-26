import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styled from '@emotion/styled'

function Modal({handleClose, text}) {
  const Window = styled(motion.div)`
    width: clamp(20%, 500px, 70%);
    height: min(50%, 300px);
    background-color: white;
    margin: auto;
    padding: 0 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "easeOut",
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  }

  return (
    <Backdrop onClick={handleClose}>
      <Window
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </Window>
    </Backdrop>
  )
}

export default Modal