import styled from "styled-components"
import theme from "../theme"

const TodoItem = styled.div`
  width: 95%;
  height: auto;
  margin: 5px 0;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: ${theme.lightDark};
  
  & > * {
    color: ${theme.dark}
  }

  &:first-child {
    margin-top: 15px;
  }

  &:last-child {
    margin-bottom: 15px;
  }
`

const Todo = (props) => {
  return (
    <TodoItem>{props.content}</TodoItem>
  )
}

export default Todo