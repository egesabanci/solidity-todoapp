import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Application from "./pages/Application"
import LandingPage from "./pages/LandingPage"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/app" element = {<Application />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App