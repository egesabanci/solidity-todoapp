import { Link } from "react-router-dom"
import styled from "styled-components"
import {BiArrowBack} from "react-icons/bi"
import NotFound404 from "../assets/404.svg"
import Button from "../components/Button"
import {MainContainer, AppContainer, ContentContainer} from "../pages/Application"

const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
`

const NotFound = () => {
  return (
    <AppContainer>
      <MainContainer>
        <ContentContainer>
          <h1>404 Not Found</h1>             
          <NotFoundImage src = {NotFound404} />
          <Link to = "/">
            <Button header = {"Go back"} width = {"115%"} icon = {<BiArrowBack />} />  
          </Link>
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  )
}

export default NotFound