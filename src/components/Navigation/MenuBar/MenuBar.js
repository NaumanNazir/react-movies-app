import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './MenuBar.module.css'


function MenuBar(props) {
  return (
    <header className={classes.MenuBar}>
      <Logo />
      <NavigationItems />
    </header>
  )
}

export default MenuBar
