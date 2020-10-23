import React, { Component } from 'react';

import Movies from './components/Movies/Movies'
import axios from 'axios'
import SearchMovie from './components/SearchMovie/SearchMovie'
import Spinner from './components/Spinner/Spinner'

const API_KEY = 'eb73f2959b63226925762febe27af005'
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

class App extends Component {
  state = {
    movies: [],
    loading: false,
    searchInput: '',
  }
  
  // we had two functions with the same behavior, so we made a new function.
  // responsible for fetching movies.
  getMovies = (API) => {
    this.setState({loading: true})
    axios.get(API)
      .then(response => {
        this.setState({
          movies: response.data.results,
          loading: false,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    // two approaches you can take

    // 1 - make a function and call it here, like the line below
    this.getMovies(FEATURED_API)

    // 2 - put all the functionality here, like the code given below
    // axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`)
    //   .then(response => {
    //     this.setState({
    //       movies: response.data.results
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    
    const search = this.state.searchInput
    if (!!search) {
      // same we did in componentDidMount
      this.getMovies(SEARCH_API+search)

      this.setState({
        searchInput: ''
      })


      // same we did in componentDidMount
      // axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${search}`)
      //   .then(response => {
      //     this.setState({
      //       movies: response.data.results
      //     })
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })

      //   this.setState({
      //     searchInput: ''
      //   })
      }
  }

  handleOnChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    let renderMovies = 
      (this.state.loading) 
        ? <Spinner />
        : <Movies movies={this.state.movies} />

    return (
      <div>
        <header>
          <SearchMovie 
            searchInput={this.state.searchInput} 
            handleSubmit={this.handleOnSubmit}
            handleChange={this.handleOnChange}
          />
        </header>
        {renderMovies}
      </div>
    );
  }
}

export default App;
