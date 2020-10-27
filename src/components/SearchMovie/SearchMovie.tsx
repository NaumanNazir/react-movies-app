import React from 'react'

import classes from './SearchMovie.module.css'

function SearchMovie(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input 
          className={classes.Search_input} 
          type="search" 
          placeholder="Search..."
          value={props.searchInput}
          onChange={props.handleChange} 
        />
      </form>
    </div>
  )
}

export default SearchMovie