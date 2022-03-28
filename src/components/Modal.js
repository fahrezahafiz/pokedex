import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import styled from '@emotion/styled'
import { Heading } from './sharedComponents'

function Modal({handleClose, component}) {
  const Window = styled(motion.div)`
    width: clamp(30%, 500px, 80%);
    background-color: white;
    margin: auto;
    padding: 2rem;
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
    <Backdrop onClick={() => handleClose(null)}>
      <Window
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {component}
      </Window>
    </Backdrop>
  )
}

export default Modal