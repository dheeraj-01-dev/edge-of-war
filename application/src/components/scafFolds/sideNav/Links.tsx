"use client"
import React from 'react'
import Link from 'next/link'
import styles from './styles/links.module.css'
import { toggleSideNav } from '@/scripts/event-listener'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import Image from 'next/image'

const links = [
  {
    text: "Home",
    src: "/icons/home-a7.png",
    href: "/",
    width: 20,
    height: 20
  },
  {
    text: "Contest",
    src: "/icons/cart-a7.png",
    href: "/contest",
    width: 20,
    height: 20
  },
  // {
  //   text: "Tournament",
  //   src: "/icons/trophy-a7.png",
  //   href: "/tournament",
  //   onlyForPc: true,
  //   width: 20,
  //   height: 20
  // },
  {
    text: "Leaderboard",
    src: "/icons/poll-a7.png",
    href: "/leaderboard",
    onlyForPc: true,
    width: 20,
    height: 20
  },
  {
    text: "Profile",
    src: "/icons/user-a7.png",
    href: "/profile",
    width: 20,
    height: 20
  },
  {
    text: "Friends",
    src: "/icons/friends-a7.png",
    href: "/friends",
    width: 20,
    height: 15
  },
  {
    text: "Refrals",
    src: "/icons/share-a7.png",
    href: "/refer",
    width: 20,
    height: 20
  },
  {
    text: "Support",
    src: "/icons/headset-a7.png",
    href: "/support",
    width: 20,
    height: 20
  },
  {
    text: "About",
    src: "/icons/terminal-a7.png",
    href: "/about",
    width: 13,
    height: 20
  },
  {
    text: "terms & condition",
    src: "/icons/terminal-a7.png",
    href: "/terms",
    width: 13,
    height: 20
  },
]


const Links = () => {
  const router = useRouter();
  let pathName = usePathname();

  const logOut = ()=>{
    const outConfirm = confirm("confirm to log Out");
    if(outConfirm){
      deleteCookie("u_state")
      router.push("/");
      router.refresh();
      toggleSideNav();
    }
  };


  const LinkTab = ({text, src, href, onlyForPc = false, width, height}: {text: string, src: string, href: string, onlyForPc?: boolean, width: number, height: number})=>{
    return(
      <div className={`${styles.linkContainer} ${onlyForPc&&styles.hideInMobile}`}>
        <Link onClick={toggleSideNav} className={`${styles.links} ${pathName===href&&styles.active}`} href={href}><span className={styles.iconContainer}><Image width={width} height={height} alt='' src={src} /></span>{text}</Link>
      </div>
    )
  }
  
  return (
    <div>
      {
        links.map((link)=>{
          const { text, src, href, onlyForPc, width, height } = link;
          return(
            <div key={link.href}>
              <LinkTab text={text} src={src} href={href} onlyForPc={onlyForPc} width={width} height={height} />
            </div>
          )
        })
      }
      {/* <div className={styles.linkContainer}>
        <Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/"&&styles.active}`} href="/"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/home-a7.png" /></span>Home</Link>
      </div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/contest"&&styles.active}`} href="/contest"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/cart-a7.png" /></span>Contest</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/profile"&&styles.active}`} href="/profile"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/user-a7.png" /></span>Profile</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/friends"&&styles.active}`} href="/friends"><span className={styles.iconContainer}><Image width={20} height={15} alt='' src="/icons/friends-a7.png" /></span>Friends</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/refer"&&styles.active}`} href="/refer"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/share-a7.png" /></span>Refral</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/support"&&styles.active}`} href="/support"><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/headset-a7.png" /></span>Support</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/about"&&styles.active}`} href="/about"><span className={styles.iconContainer}><Image width={13} height={20} alt='' src="/icons/terminal-a7.png" /></span>About us</Link></div>
      <div className={styles.linkContainer}><Link onClick={toggleSideNav} className={`${styles.links} ${pathName==="/terms"&&styles.active}`} href="/terms"><span className={styles.iconContainer}><Image width={13} height={20} alt='' src="/icons/terminal-a7.png" /></span>terms & condition</Link></div> */}
      <div className={styles.logoutContainer} onClick={logOut}><span className={styles.iconContainer}><Image width={20} height={20} alt='' src="/icons/logout-a7.png" /></span>Log Out</div>
    </div>
  )
}

export default Links
