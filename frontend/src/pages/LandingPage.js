import axios from "axios"
import {useState, useEffect} from "react"

import Button from "../components/Button"
import {MainContainer, AppContainer, ContentContainer} from "./Application"

import {AiOutlineStar, AiOutlineGithub, AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const [stars, setStars] = useState(0)

  useEffect(() => {
    const getStars = async () => {
      const repoStarsUrl = "https://api.github.com/repos/egesabanci/solidity-todoapp"
      let currentStars = await axios.get(repoStarsUrl)
      setStars(currentStars.data.stargazers_count)
    }

    getStars()
  }, [])

  return (
    <AppContainer>
      <MainContainer>
        <ContentContainer style = {{justifyContent: "center"}}>
          <span>
            <h1>Ethereum To-do Storage dApp</h1>
          </span>
          <span style = {{marginTop: "100px", width: "100%", display: "flex", justifyContent: "space-around"}}>
            <Button
              style = {{border: "1px solid white", backgroundColor: "transparent"}}
              disable = {true}
              header = {stars.toString()}
              width = {"15%"}
              icon = {<AiOutlineStar />} 
            />
            <a href = {"https://www.github.com/egesabanci/solidity-todoapp"} target = {"_blank"} style = {{width: "40%"}}>
              <Button
                style = {{border: "1px solid white", backgroundColor: "transparent"}}
                disable = {true}
                header = {"Source Code"}
                width = {"100%"}
                icon = {<AiOutlineGithub />} 
              />
            </a>
            <Link to = "/solidity-todoapp/app" style = {{width: "40%"}}>
              <Button
                style = {{border: "1px solid white"}}
                header = {"Go to application"}
                width = {"100%"}
                icon = {<AiOutlineArrowRight />} 
              />
            </Link>
          </span>
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  )
}

export default LandingPage