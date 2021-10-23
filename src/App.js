import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Layout } from './components/Layout/Layout'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Error404 } from './pages/Error404'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/error404" component={Error404} />
        </Switch>
      </Layout>
    </Router>
  )
}