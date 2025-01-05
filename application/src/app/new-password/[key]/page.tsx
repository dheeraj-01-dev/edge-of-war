import CreateNewPassword from '@/components/new-password/CreateNewPassword'
import React from 'react'
import styles from './page.module.css'
import { createNewPassword } from '@/api/user';


type Params = Promise<{
  key: string;
}>;

const page = async ({params}: {params: Params}) => {
  const { key } = await params;


  console.log({key})
  
  return (
    <div className={styles.page}>
      <div style={{ width: "100dvw", padding: 20}}>
        <CreateNewPassword createNewPassowrd={createNewPassword} token={key} />
      </div>
    </div>
  )
}

export default page