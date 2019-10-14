import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Beers from './pages/Beers'
import Breweries from './pages/Breweries'
import NavbarPage from './pages/NavbarPage'
import Footer from './pages/Footer'
import Spin from './pages/Spin'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      tagline: "",
      description: "",  
      image_url: "",
      abv: "",
      ibu: "",
      ingredients: "",
      food_pairing: "",
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavbarPage/>
          {/* <h1 className="App-title">Beertastic</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/beers">Beers</NavLink>
          <NavLink to="/breweries">Breweries</NavLink>
          <NavLink to="/spin">Spin</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          {api.isAdmin && <NavLink to="/secret">Secret</NavLink>} */}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />          
          <Route path="/breweries" component={Breweries} />
          <Route path="/spin" component={Spin} />
          <Route path="/beers" component={Beers} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}






