import React from 'react'

import Movie from './Movie/Movie'
import classes from './Movies.module.css'

function Movies(props) {
  const movies = props.movies
  return (
    <div className={classes.Movies_container}>
      {
        movies.map(movie => <Movie className={classes.Movie} key={movie.id} movie={movie}/>)
      }
    </div>
  )
}

export default Movies
