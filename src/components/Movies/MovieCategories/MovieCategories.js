import React from "react";

import classes from "./MovieCategories.module.css";

function MovieCategories(props) {
  const categories = ["All", "Movie", "TV"];
  return (
    <div classes={classes.MovieCategoriesSection}>
      <h1> What's Trending </h1>
      <div className={classes.Selector}>
        {categories.map((category) => (
          <a
            href="#0"
            onClick={() => props.onSelectCategory(category)}
            key={category}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MovieCategories;
