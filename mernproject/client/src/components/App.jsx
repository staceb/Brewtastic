import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Breweries from './pages/Breweries'
import AddBeer from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import logo from '../logo.svg'

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MERN Boilerplate</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" component={Beers} />
          <Route path="/breweries" component={Breweries} />
          <Route path="/add-beer" component={AddBeer} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
