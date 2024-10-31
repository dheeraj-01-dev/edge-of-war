"use client"
import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const Footer = () => {
  const pathname = usePathname();

  let home, contest, leaderboard, tournament, friends;
  if(pathname==="/"){home=true}
  if(pathname==="/contest"){contest=true}
  if(pathname==="/tournament"){tournament=true}
  if(pathname==="/leaderboard"){leaderboard=true}
  if(pathname==="/friends"){friends=true}

  
  return (
    <div className={styles.footerContainer}>
      {/* <Link href="/tournament">
        <Image className={`${tournament&&styles.active}`} height={21} width={23} alt='' src="/icons/trophy-a7.png" />
      </Link> */}
      <Link href="/leaderboard">
        <Image className={`${leaderboard&&styles.active}`} height={23} width={23} alt='' src="/icons/poll-a7.png" />
      </Link>
      <Link href="/">
        <Image className={`${home&&styles.active}`} height={23} width={23} alt='' src="/icons/home-a7.png" />
      </Link>
      <Link href="/contest">
        <Image className={`${contest&&styles.active}`} height={23} width={23} alt='' src="/icons/cart-a7.png" />
      </Link>
      <Link href="/friends">
        <Image className={`${friends&&styles.active}`} height={23} width={30} alt='' src="/icons/friends-a7.png" />
      </Link>
    </div>
  )
}

export default Footer
