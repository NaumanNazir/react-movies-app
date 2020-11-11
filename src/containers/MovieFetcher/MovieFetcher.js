import React, { Component } from "react";

import axios from "axios";
import MenuBar from "../../components/Navigation/MenuBar/MenuBar";
import Banner from "../../components/Banner/Banner";
import Movies from "../../components/Movies/Movies";
import Spinner from "../../components/Spinner/Spinner";

const API_KEY = "eb73f2959b63226925762febe27af005";
// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const TRENDING_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

class App extends Component {
  state = {
    movies: [],
    activeCategory: "all",
    loading: false,
    searchInput: "",
  };

  // we had two functions with the same behavior, so we made a new function.
  // responsible for fetching movies.

  getMovies = (API) => {
    this.setState({ loading: true });
    axios
      .get(API)
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          movies: response.data.results,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getMovies(TRENDING_API);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.activeCategory !== this.state.activeCategory) {
  //     this.getMovies(TRENDING_API);
  //   }
  // }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const search = this.state.searchInput;
    if (!!search) {
      this.getMovies(SEARCH_API + search);
      this.setState({
        searchInput: "",
      });
    }
  };

  handleOnChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSelectCategory = (category) => {
    // this.setState({
    //   activeCategory: category,
    //   loading: true,
    // });

    console.log(category);
  };

  render() {
    let renderMovies = this.state.loading ? (
      <Spinner />
    ) : (
      <Movies
        movies={this.state.movies}
        handleSelectCategory={this.handleSelectCategory}
      />
    );

    return (
      <div>
        <MenuBar />
        <Banner
          searchInput={this.state.searchInput}
          handleSubmit={this.handleOnSubmit}
          handleChange={this.handleOnChange}
        />
        {renderMovies}
      </div>
    );
  }
}

export default App;

// This is the second way to fetch api.

// componentDidMount() {
//   axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`)
//     .then(response => {
//       this.setState({
//         movies: response.data.results
//       })
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// handleOnSubmit = (e) => {
//   e.preventDefault()

//   const search = this.state.searchInput
//   if (!!search) {
//     same we did in componentDidMount

//     axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${search}`)
//       .then(response => {
//         this.setState({
//           movies: response.data.results
//         })
//       })
//       .catch(error => {
//         console.log(error)
//       })

//       this.setState({
//         searchInput: ''
//       })
//     }
// }
