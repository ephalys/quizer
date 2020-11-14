import styled from "styled-components";
import {ReactComponent as ArrowSvg} from "../../assets/icons/arrow.svg";

export const CustomInput = styled.input`
  border-radius: 25px;
  padding: 16px 24px;
  background-color: white;
  box-shadow: 0 0 16px -7px rgba(0,0,0,0.75);
  min-width: 250px;
  font-size: 16px;
  border: 2px solid white;
  transition: all .3s;
  
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
    
    + svg {
      fill: white;
    }
  }
`

export const InputContainer = styled.div`
  position: relative
`

export const Arrow = styled(ArrowSvg)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
`