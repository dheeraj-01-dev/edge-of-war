import React from 'react'
import styles from './styles/navbar.module.css'
import Profile from './Profile'
import Hamburger from './Hamburger'

type navbar = {
  isLogin: boolean
}

const Navbar :React.FC<navbar> = ({isLogin}) => {
  
  return (
    <div className={styles.navbar}>
      <Hamburger />
      <div className={styles.rightComponent}>
        <Profile isLogin={isLogin}/>
      </div>
    </div>
  )
}

export default Navbar
