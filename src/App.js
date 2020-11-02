import React from 'react';

import MovieFetcher from './containers/MovieFetcher/MovieFetcher'

function App() {
  return (
    <div>
      <MovieFetcher />
    </div>
  );
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