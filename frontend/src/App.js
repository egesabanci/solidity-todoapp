import styled from "styled-components"
import { useEffect, useState } from "react"
import {ethers} from "ethers"
import {GridLoader} from "react-spinners"

import {MdAddCircle} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {AiOutlineWarning} from "react-icons/ai"

import {todoContractAddress, todoContract} from "./contract/contract"

import theme from "./theme"
import envConfig from "./config.env.json"
import {Header} from "./components/TopHeader"
import Button from "./components/Button"
import Todo from "./components/Todo"

import {
  TodoListContainer,
  InputBarContainer,
  InputBar,
  TodoListSection,
  CenteredDiv
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
  const provider = new ethers.providers.JsonRpcProvider(envConfig.providerUrl)
  const contract = new ethers.Contract(
    ethers.utils.getAddress(todoContractAddress.address),
    todoContract.abi,
    provider
  )
  
  const [loading, setLoading] = useState(true)
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
    setLoading(true)
  })

  window.ethereum.on("chainChanged", (chain) => {
    setChainID(chain)
  })

  window.ethereum.on("disconnect", () => setAccount(undefined))
  
  useEffect(() => {
    const updateChainID = async () => {
      let chainId = await window.ethereum.request({method: "eth_chainId"})
      setChainID(chainId)
    }

    updateChainID()
  }, [])

  useEffect(() => {
    const initialCall = async () => {
      if (account) {
        let allTodos = await contract.functions.getAllTodos(ethers.utils.getAddress(account))
        setTodos(allTodos[0])
        setLoading(false)
      }
    }

    initialCall()
  }, [account])

  return (
    <AppContainer className="App">
      <MainContainer>
        <Row>
          <Header>
            <h1>Ethereum To-do dApp</h1>
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
            {chainID === "0x3"
              ? <h6 style = {{color: "#96CEB4"}}>Connected to Ropsten Testnet</h6>
              : <h6 style = {{color: "#FF6464"}}>Please connect to Ropsten Testnet</h6>
            } 
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
              {loading
              ? (account
                  ? <CenteredDiv><GridLoader color = {theme.lightDark} /></CenteredDiv>
                  : <CenteredDiv><h5>Connect your wallet <br /> Your todos will show up here</h5></CenteredDiv>
                )
              : (todos.length === 0 && !loading && account
                  ? <CenteredDiv><h5>User does not have any todos</h5></CenteredDiv>
                  : todos.map((content, index) => <Todo content = {content} key = {index} />))
              }
            </TodoListSection>
          </TodoListContainer>
        </Row>
      </MainContainer>
    </AppContainer>
  )
}

export default App
