import { useEffect, useState } from "react"
import styled from "styled-components"
import {MdAddCircle} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {AiOutlineWarning} from "react-icons/ai"

import theme from "./theme"
import {Header} from "./components/TopHeader"
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
  const [todoContent, setTodoContent] = useState("")

  const [account, setAccount] = useState(undefined)
  const [chainID, setChainID] = useState(undefined)

  const trimAccountString = (accountString) => {
    return accountString.slice(0, 10) + "..." + accountString.slice(32)
  }

  const handleAccountConnection = async () => {
    let accounts = await window.ethereum.request({method: "eth_requestAccounts"})
    setAccount(accounts[0])
  }

  window.ethereum.on("accountsChanged", async (changedAccount) => {
    setAccount(changedAccount[0])
  })

  window.ethereum.on("disconnect", () => setAccount(undefined))

  useEffect(async () => {
    let chainId = await window.ethereum.request({method: "eth_chainId"})
    setChainID(chainId)
  }, [])

  return (
    <AppContainer className="App">
      <MainContainer>
        <Row>
          <Header>
            <h1>Ethereum To-do App</h1>
            {account ?
              <Button disabled size = {"0.7rem"}
                header = {trimAccountString(account)}
                icon = {<FaWallet />}
                width = {"35%"}
              /> :
              <Button
                function = {window.ethereum ? handleAccountConnection : () => console.error("Metamask does not exists")}
                width = {window.ethereum ? "35%" : "40%"}
                header = {window.ethereum ? "Connect your wallet" : "MetaMask does not exists"}
                icon = {window.ethereum ? <FaWallet /> : <AiOutlineWarning />}
                size = {"0.8rem"}
              />
            }
          </Header>
        </Row>
        <Row>
          <TodoListContainer>
            <InputBarContainer>
              <InputBar
                onChange = {(e) => setTodoContent(e.target.value)}
                placeholder = "Add your to-do"
                width = {"70%"} />
              <Button
                disable = {todoContent === ""}
                size = {"0.85rem"}
                header = {"Add to-do"}
                icon = {<MdAddCircle />} 
                width = {"25%"} />
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
