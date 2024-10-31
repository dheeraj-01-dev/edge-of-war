"use client"
import Image from 'next/image'
import React from 'react'
import styles from './styles/left-hamburger.module.css'
import { toggleSideNav } from '@/scripts/event-listener'

const Hamburger = () => {
  return (
    <div onClick={toggleSideNav}>
      <Image className={styles.hamburger} src={"/icons/hamburger.png"} height={12} width={22} alt="hamburger" />
    </div>
  )
}

export default Hamburger;

// export { toggleSideNav };
