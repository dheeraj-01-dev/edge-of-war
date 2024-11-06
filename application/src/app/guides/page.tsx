import React from 'react'
import styles from './page.module.css'
import Guide from '@/components/guides/Guides'

const page = () => {
  return (
    <div className={styles.guides}>
      <Guide />
    </div>
  )
}

export default page
