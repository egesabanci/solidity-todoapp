import styled from "styled-components"
import theme from "../theme"

const ButtonComponent = styled.button`
  width: ${props => props.width};
  height: 50px;
  background-color: ${props => props.disable ? "#252525" : theme.lightDark};
  border: 2.5px solid ${theme.lightDark};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  transition: 0.2s ease;
  
  & > span {
    font-size: ${props => props.size ? props.size : "1rem"};
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`

const ButtonSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = (props) => {
  return (
    <ButtonComponent
      style = {props.style}
      width = {props.width}
      size = {props.size}
      disable = {props.disable}
      onClick = {props.function}>
      <ButtonSpan>
        <span>{props.header}</span>
        {props.icon}
      </ButtonSpan>
    </ButtonComponent>
  )
}

export default Button