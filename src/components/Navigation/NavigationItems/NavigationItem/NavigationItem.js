import React from 'react'

import classes from './NavigationItem.module.css'

function NavigationItem() {
  return (
    <React.Fragment>
      <a href="#home" className={classes.NavLink}> Home </a>
      <a href="#movies" className={classes.NavLink}> Movies </a>
      <a href="#tv-shoes" className={classes.NavLink}> TV Shows </a>
      <a href="#people" className={classes.NavLink}> People </a>
    </React.Fragment>
  )
}

export default NavigationItem
