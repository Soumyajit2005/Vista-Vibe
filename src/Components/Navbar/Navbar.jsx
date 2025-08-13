import React from 'react'
import { getImageUrl } from '../../utils';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navheading}>
            <h1>VISTAVIBE</h1>
            <p>unique designs</p>
        </div>
        <ul className={styles.navlinks}>
            <li><a href="">HOME</a></li>
            <li><a href="">DESIGNS</a></li>
            <li><a href="">SERVICES</a></li>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">CONTACT US</a></li>
            <div className={styles.searchicon}>
                <img src={getImageUrl("nav/searchIcon.png")} alt="" />
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
