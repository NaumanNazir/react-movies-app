import React from "react";

import classes from "./Movie.module.css";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function Movie(props) {
  const { title, poster_path, release_date } = props.movie;

  return (
    <div className={classes.Movie}>
      <div className={classes.ImageContainer}>
        <a href="#0">
          <img src={IMAGE_API + poster_path} alt={title} />
        </a>
      </div>
      <div className={classes.Content}>
        <h3> {title} </h3>
        <small> {release_date} </small>
      </div>
    </div>
  );
}

export default Movie;
