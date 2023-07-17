import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate modi,
            tempore assumenda adipisci dolor hic atque quod consequuntur cupiditate. Quasi, nobis veritatis!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact</h2>
          <span>Phone +254 707 606 757</span>
          <span>Twitter: DevRojas</span>
          <span>Github: omondi8399</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Kenya</span>
          <span>Current Location: Kenya</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer