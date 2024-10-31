"use client"
import React from 'react'
import styles from './styles/sideNav.module.css'
import { toggleSideNav } from '@/scripts/event-listener'

const CloseSidenavButton = () => {
  return (
    <div>
      <div onClick={toggleSideNav} className={styles.sideNavCover} id="sideNavCover"></div>
    </div>
  )
}

export default CloseSidenavButton
