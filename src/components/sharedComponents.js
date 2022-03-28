import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { colors } from "../colors"

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border: 4px solid white;
  background-color: white;
  border-radius: 1.5rem;
  margin: 0.6rem;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  color: grey;
  transition: all 0.2s ease;
`

export const P = styled.p`
  margin: 0.2rem 0;
  text-transform: capitalize;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  text-transform: capitalize;
`

export const CardButton = styled(Card)`
  margin: 1rem 0 0 0;
  padding: 1.2rem;
  border: none;
  color: white;
  text-align: center;
  font-size: 1.4rem;
  background-color: ${colors.darkBlue};
  user-select: none;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`
export const CleanLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`
export const ResponsiveGrid = styled.div`
  padding-bottom: 4rem;
  margin: auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: center;
`
export const Title = styled(Heading)`
  color: ${colors.darkBlue};
`
export const ActionButton = styled(CardButton)`
  margin: 0 auto 2rem auto;
  width: 16rem;
  font-size: 1.2rem;
`