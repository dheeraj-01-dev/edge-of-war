import React from 'react'
import styles from './styles/sideNav.module.css'
import CloseSidenavButton from './CloseSidenavButton'
import ProfileSection from './ProfileSection'
import Links from './Links'

const SideNav = () => {
  return (
    <>
      <CloseSidenavButton />
      <div className={`${styles.sideNavContainer} sideNavContainer`}>
        <ProfileSection name='' userName='' ffUid='' profileSrc='' />
        <Links />
      </div>
    </>
  )
}

export default SideNav
