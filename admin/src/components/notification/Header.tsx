import React from 'react'
import Image from 'next/image'
import styles from './styles/header.module.css'
import NavigateBack from '@/hooks/Navigate.back'

const Header = () => {
  return (
    <div className={styles.header}>
      <NavigateBack styles={{display: "inline", height: 18}}>
        <Image width={15} height={15} alt='' src="/icons/arrowLeftWhite.png" />
      </NavigateBack>
      <span className={styles.notificationBanner}>Notifications</span>
    </div>
  )
}

export default Header
