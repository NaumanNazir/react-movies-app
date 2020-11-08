import React from "react";

import dayjs from "dayjs";
import { CgOptions } from "react-icons/cg";
import classes from "./Movie.module.css";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function Movie(props) {
  const { title, poster_path, release_date } = props.movie;
  const releaseDate = dayjs(release_date).format("MMM DD, YYYY");

  return (
    <div className={classes.Movie}>
      <div className={classes.ImageContainer}>
        <a href="#0">
          <img src={IMAGE_API + poster_path} alt={title} />
        </a>
        <a className={classes.Tooltip} href="#0">
          <CgOptions />
        </a>
      </div>
      <div className={classes.Content}>
        <h3> {title} </h3>
        <small> {releaseDate} </small>
      </div>
    </div>
  );
}

export default Movie;
