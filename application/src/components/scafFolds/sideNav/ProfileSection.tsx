import React from 'react'
import styles from './styles/profileSection.module.css'
import Link from 'next/link'
import Image from 'next/image'

type profileSection = {
  name: string,
  ffUid: string,
  userName: string,
  profileSrc: string
}

const ProfileSection :React.FC<profileSection> = ({
  name, ffUid, userName, profileSrc
}) => {
  
  return (
    <div className={styles.profile}>
      {name?<Link href="/profile" className={styles.linkContainer}>
        <div className={styles.profilePic}>
          <Image height={60} width={60} alt='' src={profileSrc} />
          {/* <img src="/men.png" alt="" /> */}
        </div>
        <div className={styles.identity}>
          <div className={styles.name}>{userName}</div>
          <div className={styles.uid}>{ffUid}</div>
        </div>
      </Link>:<div className={styles.loginContainer}>
        <Link className={styles.loginLink} href="/login"> Login </Link>
      </div>}
    </div>
  )
}

export default ProfileSection
