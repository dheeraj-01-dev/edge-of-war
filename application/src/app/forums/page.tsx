import React from 'react'
import styles from './page.module.css'
import Forums from '@/components/forums/Forums'
import Forums2 from '@/components/forums/Forums3'

const page = () => {
  return (
    <div className={styles.forms}>
      <Forums />
      <Forums2 />
    </div>
  )
}

export default page
