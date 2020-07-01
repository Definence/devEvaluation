import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Home from './components/Home'
import CountryProfile from './components/CountryProfile'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/countries/:name" exact component={CountryProfile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </Router>
  )
}

export default App
