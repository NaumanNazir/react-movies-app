import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

function NavigationItems() {
  return (
    <nav className={classes.NavLinks}>
      <section>
        <NavigationItem link='#home'> Home </NavigationItem>
        <NavigationItem link='#movies'> Movies </NavigationItem>
        <NavigationItem link='#tv-shoes'> TV shows </NavigationItem>
        <NavigationItem link='#people'> People </NavigationItem>
      </section>
      <section>
        <NavigationItem link='#login'> Login </NavigationItem>
        <NavigationItem link='#join-now'> Join now </NavigationItem>
      </section>
    </nav>
  )
}

export default NavigationItems
