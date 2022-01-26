import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Application from "./pages/Application"
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"

const routeExtension = "solidity-todoapp"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path = {routeExtension + "/"} element = {<LandingPage />} />
        <Route path = {routeExtension + "/app"} element = {<Application />} />
        <Route path = {routeExtension + "/" + "*"} element = {<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App