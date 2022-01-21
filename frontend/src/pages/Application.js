import styled from "styled-components"
import {useEffect, useState} from "react"
import {ethers} from "ethers"
import {GridLoader} from "react-spinners"

import {MdAddCircle} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {AiOutlineWarning} from "react-icons/ai"

import {todoContractAddress, todoContract} from "../contract/contract"

import theme from "../theme"
import envConfig from "../config.env.json"
import Header from "../components/TopHeader"
import Button from "../components/Button"
import Todo from "../components/Todo"

import {
  TodoListContainer,
  InputBarContainer,
  InputBar,
  TodoListSection,
  CenteredDiv
} from "../components/TodoElements"

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark};
`

export const MainContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;

  & > * {
    color: white;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Row = styled.div`
  width: ${props => props.width ? props.width : "100%"}
  height: ${props => props.height ? props.height : "100%"}
`

const Application = () => {
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
  const [txStatus, setTxStatus] = useState(undefined)


  const trimAccountString = (accountString) => {
    return accountString.slice(0, 10) + "..." + accountString.slice(32)
  }


  const handleAccountConnection = async () => {
    let accounts = await window.ethereum.request({method: "eth_requestAccounts"})
    setAccount(accounts[0])
  }


  const handleAddTodo = async () => {
    let transaction = await contract.populateTransaction.addTodo(account, todoContent)
    transaction.from = account
    transaction.chainId = chainID
    
    let transactionHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transaction]
    })

    setTodoContent("")
    setTxStatus("pending")

    provider.once(transactionHash, (tx) => {
      setTxStatus(tx.status)
    })
  }


  window.ethereum.on("accountsChanged", async (changedAccount) => {
    setAccount(changedAccount[0])
    setLoading(true)
  })


  window.ethereum.on("chainChanged", (chain) => {
    setChainID(chain)
    setLoading(true)
  })


  window.ethereum.on("disconnect", () => {
    setAccount(undefined)
  })


  useEffect(() => {
    const updateTodosWithTransactionStatus = async () => {
      let allTodos = await contract.functions.getAllTodos(ethers.utils.getAddress(account))
      setTodos(allTodos[0])
    }

    updateTodosWithTransactionStatus()
  }, [txStatus])


  useEffect(() => {
    const changeTxStatusToInitial = () => {
      if (txStatus !== "pending") {
        setTxStatus(undefined)
      }
    }

    changeTxStatusToInitial()
  }, [todos])


  useEffect(async () => {
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
                value = {todoContent}
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
                      : [...todos].reverse().map((content, index) => <Todo content = {<span>{index + 1 + " - " + content.todoContent}</span>} key = {index} />))
                  )
                : <CenteredDiv><h5>Please move to Ropsten Testnet</h5></CenteredDiv>
              }
            </TodoListSection>
          </TodoListContainer>
          {account &&
            (!txStatus
              ? <h6 style = {{color: "gray"}}>There is no pending transactions</h6>
              : (txStatus === "pending"
                ? <h6 style = {{color: "#FFE162"}}>Transaction processing...</h6>
                : (txStatus === 1
                    ? <h6 style = {{color: "#96CEB4"}}>Transaction successfully mined!</h6>
                    : <h6 style = {{color: "#FF6464"}}>Transaction failed!</h6>
                )
              )
            )
          }
        </Row>
      </MainContainer>
    </AppContainer>
  )
}

export default Application