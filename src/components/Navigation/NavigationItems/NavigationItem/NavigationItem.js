import React from "react";

import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  return (
    <React.Fragment>
      <a href={props.link} className={classes.NavLink}>
        {props.children}
      </a>
    </React.Fragment>
  );
}

export default NavigationItem;
