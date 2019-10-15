import React, { Component } from 'react'
import axios from 'axios'

export default class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      filteredBeers: [],
    } 
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
    .then((response) => {
      console.log(response.data)
      this.setState({
        beers: response.data,
        filteredBeers: response.data
      })
    })
      .catch(err => console.log(err))
  }

  searchBeers = (e) => {
    let search = e.target.value
    let filteredBeers = this.state.beers.filter(entry => {
      return entry.name.toLowerCase().includes(search.toLowerCase())
    });
    this.setState({
      filteredBeers: filteredBeers
    });    
    console.log(this.state.filteredBeers)
  };

  addFavorite = (e) => {
    
  }
  

  render() {
    return (
      <div className = "background">
        <h2>Brews</h2>
      <form className="brewSearch">
      <input
        onChange={this.searchBeers} 
        placeholder=" Search all brews"
        id="search"
        type="text"
        className='search'
      />
      </form>
      <div className="Beers">
        {this.state.filteredBeers.map((eachBeer, i) => (
          <div key={i} className = "eachBeer">
          <img  src={eachBeer.image_url} alt=""/>
          <ul className = "beerDeets">
          <p key={i+'a'}>Name: {eachBeer.name}</p>
          <p key={i+'b'}>ABV: {eachBeer.abv}%</p>
          <p key={i+'c'}>Tag: {eachBeer.tagline}</p>
          </ul>
          <button className='favorite button' onclick="addFavorite()">Add Favorite</button>
          </div>
        ))}
      </div>
      </div>
    )
  }
}


