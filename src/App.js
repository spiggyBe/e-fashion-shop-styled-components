import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import GlobalStyle from './globalStyle'
import { TopAd } from './components/TopAds/TopAd'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home'
import { ProductsPage } from './pages/ProductsPage'
import { Login } from './pages/Login'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'
import { SingleProductPage } from './pages/SingleProductPage'
import { Cart } from './pages/Cart'
import { Register } from './pages/Register'
import { Error404 } from './pages/Error404'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <TopAd />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/single-product" component={SingleProductPage} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={cart} />
          <Route path="/" component={Error404} />
        </Switch>
      </Router>
      <Newsletter />
      <Footer />
    </>
  )
}




