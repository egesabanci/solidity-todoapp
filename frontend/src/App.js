import styled from "styled-components"
import {useEffect, useState} from "react"
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

  const handleAddTodo = async () => {
    let response = await contract.functions.addTodo(todoContent)
    console.log(response)
  }

  window.ethereum.on("accountsChanged", async (changedAccount) => {
    setAccount(changedAccount[0])
    setLoading(true)
  })

  window.ethereum.on("chainChanged", (chain) => {
    setChainID(chain)
    setLoading(true)
  })

  window.ethereum.on("disconnect", () => {setAccount(undefined)})

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
  }, [account, chainID])

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
              : <h6 style = {{color: "#FF6464"}}>Please move to Ropsten Testnet</h6>
            } 
            <InputBarContainer>
              <InputBar
                onChange = {(e) => setTodoContent(e.target.value)}
                placeholder = {chainID === "0x3" ? (account ? "Add your to-do" : "Please connect your wallet") : "Move to Ropsten Testnet"}
                width = {"70%"}
                disabled = {chainID !== "0x3" || !account} />
              <Button
                disable = {todoContent === ""}
                size = {"0.85rem"}
                header = {"Add to-do"}
                icon = {<MdAddCircle />} 
                width = {"25%"}
                function = {handleAddTodo} />
            </InputBarContainer>
            <TodoListSection>
              {chainID === "0x3"
                ? (loading
                  ? (account
                      ? <CenteredDiv><GridLoader color = {theme.lightDark} /></CenteredDiv>
                      : <CenteredDiv><h5>Connect your wallet <br /> Your todos will show up here</h5></CenteredDiv>
                    )
                  : (todos.length === 0 && !loading && account && chainID === "0x3"
                      ? <CenteredDiv><h5>User does not have any todos</h5></CenteredDiv>
                      : todos.map((content, index) => <Todo content = {content} key = {index} />))
                  )
                : <CenteredDiv><h5>Please move to Ropsten Testnet</h5></CenteredDiv>
              }
            </TodoListSection>
          </TodoListContainer>
        </Row>
      </MainContainer>
    </AppContainer>
  )
}

export default App
