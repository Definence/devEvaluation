import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom"

import Home from './components/Home'
import NotFound from './components/NotFound'
import CountryProfile from './components/CountryProfile'

function App() {
  return (
    <Router>
      <>
        <Link to='/'>Home</Link>

        <Switch>
          <Route path="/countries/:name" exact component={CountryProfile} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </>
    </Router>
  )
}

export default App
