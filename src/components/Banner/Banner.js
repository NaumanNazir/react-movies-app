import React from 'react'

import classes from './Banner.module.css'
import SearchMovie from '../SearchMovie/SearchMovie'

function Banner(props) {
  return (
    <div className={classes.MainBanner}>
      <h1> Welcome </h1>
      <h3> Millions of movies, TV shows and people to discover. Explore now</h3>
      <SearchMovie 
        searchInput={props.searchInput} 
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      /> 
    </div>
  )
}

export default Banner
