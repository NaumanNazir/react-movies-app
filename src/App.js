import React, { Component } from 'react';

import Movie from './components/Movie/Movie'

const FEATURED_API = "https://api.themoviesdb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API = "https://api.themoviesdb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query"
const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

class App extends Component {
  state = {
    movies: ['1', '2', '3']
  }

  render() {
    return (
      <div className="App">
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
