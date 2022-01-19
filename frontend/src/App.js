import { useState } from "react"
import styled from "styled-components"

import theme from "./theme"
import TopHeader from "./components/TopHeader"
import Button from "./components/Button"
import Todo from "./components/Todo"

import {
  TodoListContainer,
  InputBarContainer,
  InputBar,
  TodoListSection,
} from "./components/TodoElements"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark};
`

const MainContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;

  & > * {
    color: white;
  }
  `

const Row = styled.div`
  width: ${props => props.width ? props.width : "100%"}
  height: ${props => props.height ? props.height : "100%"}
`

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <AppContainer className="App">
      <MainContainer>
        <Row>
          <TopHeader />
        </Row>
        <Row>
          <TodoListContainer>
            <InputBarContainer>
              <InputBar onChange = {(e) => console.log(e.target.value)} placeholder = "Add your to-do" width = {"70%"} />
              <Button onClick = {() => console.log("Clicked")} width = {"25%"}>Add To-do</Button>
            </InputBarContainer>
            <TodoListSection>
              {todos.map((content, index) => <Todo content = {content} key = {index} />)}
            </TodoListSection>
          </TodoListContainer>
        </Row>
      </MainContainer>
    </AppContainer>
  )
}

export default App
