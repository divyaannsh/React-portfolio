import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import { getImageUrl } from '../utils';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/"> Portfolio</a>
      <div className={styles.menu}>
        <img  className= {styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-button" />

        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#Experiencet">Experince</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Acheivementst">Achievement</a></li>
          <li><a href="#Skills">Skills</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
