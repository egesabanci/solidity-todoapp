import styled from "styled-components"
import theme from "../theme"

const Button = styled.button`
  width: ${props => props.width};
  background-color: ${theme.lightDark};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`

export default Button