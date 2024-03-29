import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";
import { motion } from "framer-motion";

export const CategoryStyled = styled(motion.div)`
  color: black;
  background-color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all .3s;
  margin: 0 16px 16px;
  border: 2px solid transparent;
  flex-basis: 100%;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    flex-basis: calc(50% - 32px);
    margin: 0 12px 16px;
  }
  @media (min-width: ${breakpoints.$screenMinMd}) {
    flex-basis: calc(25% - 32px);
  }
  &:hover {
    outline: none;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    box-shadow: none;
    cursor: pointer;
  }
`