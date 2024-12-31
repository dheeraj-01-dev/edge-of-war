import React from 'react'
import styles from './page.module.css'
import S2 from '@/components/support/S2'
import Link from 'next/link'
// import Support from '@/components/chatgpt/Support'

const page = () => {
  return (
    <div className={styles.support}>
      {/* <Support /> */}
      <S2 />
      <div className={styles.chatNowContainer}>
        <Link href={"https://wa.me/8235681352?text=Hello%20I%20need%20help%20with%20my%20order&utm_source=website&utm_medium=chat_button&utm_campaign=customer_support"}>Chat Now</Link>
      </div>
    </div>
  )
}

export default page
