import React, { Component } from 'react';

import Movies from './components/Movies/Movies'
import axios from 'axios'
import SearchMovie from './components/SearchMovie/SearchMovie'

const API_KEY = 'eb73f2959b63226925762febe27af005'

class App extends Component {
  state = {
    movies: [],
    searchInput: ''
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`)
      .then(response => {
        this.setState({
          movies: response.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const search = this.state.searchInput
    axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${search}`)
      .then(response => {
        this.setState({
          movies: response.data.results
        })
      })
      .catch(error => {
        console.log(error)
      })

      this.setState({
        searchInput: ''
      })
  }

  handleOnChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <header>
          <SearchMovie 
            searchInput={this.state.searchInput} 
            handleSubmit={this.handleOnSubmit}
            handleChange={this.handleOnChange}
          />
        </header>
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
