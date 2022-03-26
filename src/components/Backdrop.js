import React from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

function Backdrop({children, onClick}) {
  const MotionBackdrop = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <MotionBackdrop
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </MotionBackdrop>
  )
}

export default Backdrop