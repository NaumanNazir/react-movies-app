import React from "react";

import Movie from "./Movie/Movie";
import MovieCategories from "./MovieCategories/MovieCategories";
import classes from "./Movies.module.css";

function Movies(props) {
  const movies = props.movies;
  return (
    <div className={classes.Container}>
      <MovieCategories onSelectCategory={props.handleSelectCategory} />
      <div className={classes.MoviesContainer}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
