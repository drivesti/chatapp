import React from 'react'
import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import LoggedInRoute from './LoggedInRoute'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {AuthProvider} from './AuthService'

const App = () => {
  return (
    <AuthProvider>
    <Router>
          <Switch>
            <LoggedInRoute exact path="/" component={Room} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
    </Router>
    </AuthProvider>  
  )
}

export default App
