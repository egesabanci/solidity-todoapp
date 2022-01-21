import styled from "styled-components"
import theme from "../theme"

const TodoItem = styled.div`
  width: 88%;
  height: auto;
  margin: 5px 0;
  padding: 7px 30px;
  border-radius: 10px;
  background-color: ${theme.lightDark};
  
  & > span {
    color: white;
    font-size: ${props => props.fontSize ? props.fontSize : "0.7rem"}
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