import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const CustomInput = styled.input`
  border-radius: 25px;
    padding: 12px 64px 12px 24px;
  background-color: white;
  box-shadow: 0 0 16px -7px rgba(0,0,0,0.75);
  min-width: 250px;
  font-size: 16px;
  border: 2px solid white;
  transition: all .3s;
  appearance: none;
  width: 100%;
  @media (min-width: ${breakpoints.$screenMinXs}) {
      width: unset;
  }
  
  &:focus {
    outline: none;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    box-shadow: none;
    transition: all .3s;
    
    ::placeholder {
      color: #ccc;
    }
    
    + button svg {
      fill: white;
    }
  }
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media (min-width: ${breakpoints.$screenMinXs}) {
      width: unset;
  }
`

export const ArrowButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  border: none;
  padding: 0;
  transition: right .2s ease-out;
  height: 100%;
  align-items: center;
  background: none;
  
  &:hover {
    right: 16px;
    transition: right .2s ease-out;
  }
  
  &:focus {
    outline: none;
  }
`
