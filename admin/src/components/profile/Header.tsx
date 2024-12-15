import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import React from 'react'
import styles from './styles/header.module.css'

const Header = ({userName}: {userName: string}) => {
  return (
    <div className={styles.header}>
      <NavigateBack styles={{height: 15, width: 15}}>
        <Image height={15} width={15} alt='' src="/icons/arrowLeftWhite.png"/>
      </NavigateBack>
      <div className={styles.userNameLable}>{userName}</div>
    </div>
  )
}

export default Header
