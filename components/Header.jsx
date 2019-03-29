import React from 'react'
import styles from '../assets/styles/Header.module.css'
import logo from '../assets/assets_logo-sf-small.png'

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="logo" />
    <h1>MESSAGE VIEWER</h1>
  </header>
)

export default Header