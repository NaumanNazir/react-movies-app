import React from 'react'

import classes from './SearchMovie.module.css'

function SearchMovie(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          className={classes.Search_input} 
          type="search" 
          placeholder="Search for a movie"
          value={props.searchInput}
          onChange={props.handleChange} 
        />
        <button 
          className={classes.SearchBtn}
          onClick={props.handleSubmit}
        > 
          Search 
        </button>
      </form>
    </div>
  )
}

export default SearchMovie