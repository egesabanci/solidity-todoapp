import styled from "styled-components"
import theme from "../theme"

export const TodoListSection = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.light};
  border-radius: 10px;
`

export const InputBar = styled.input`
  width: ${props => props.width ? props.width : "75%"};
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: white;
  color: ${theme.dark};
  
  &:focus {
    outline: none;
  }
`

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
`

export const InputBarContainer = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CenteredDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`