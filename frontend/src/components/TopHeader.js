import styled from "styled-components"
import Button from "./Button"

const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 1.3rem;
  }
`

const TopHeader = (props) => {
  return (
    <Header>
      <h1>Ethereum To-do App</h1>
      {props.account ?
        <Button disabled>
          {props.account}
        </Button> :
        <Button onClick = {props.handleFunc}>
          {window.ethereum ? "Connect your wallet" : "MetaMask does not exists"}
        </Button>
      }
    </Header>
  )
}

export default TopHeader