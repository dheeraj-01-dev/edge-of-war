import React from 'react'
import styles from './page.module.css'
import S2 from '@/components/support/S2'
// import Support from '@/components/chatgpt/Support'

const page = () => {
  return (
    <div className={styles.support}>
      {/* <Support /> */}
      <S2 />
    </div>
  )
}

export default page
