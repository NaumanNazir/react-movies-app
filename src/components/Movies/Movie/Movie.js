import React from 'react'

import classes from './Movie.module.css'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

function Movie(props) {
  const {title, poster_path, vote_average} = props.movie
   
  return (
    <div className={classes.Movie}>
      <div className={classes.ImageContainer}>
        <a href="#0">
          <img src={IMAGE_API + poster_path} alt={title}/>
        </a>
        <h3> hello </h3>
      </div>
      <div className={classes.Content}>

      </div>
    </div>
  )
}

export default Movie
