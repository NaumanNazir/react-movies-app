import React from 'react'

import classes from './Movie.module.css'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

function Movie(props) {
  const {title, poster_path, overview, vote_average} = props.movie
   
  return (
    <div className={classes.Movie}>
      <img src={IMAGE_API + poster_path} alt={title}/>
      <div className={classes.Movie_info}>
        <h3> {title} </h3>
        <span className={ 
          (vote_average >= 8) ? classes.VoteGreen : (vote_average >= 6) ? classes.VoteOrange : classes.VoteRed}
        > 
          {vote_average} 
        </span>
      </div>

      <div className={classes.Movie_overview}>
        <h2> Overview </h2>
        <p> {overview} </p>
      </div>
    </div>
  )
}

export default Movie
