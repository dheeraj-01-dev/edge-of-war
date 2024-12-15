"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NavigateBack = ({ children, styles, home }: {children:React.ReactElement, styles?:React.CSSProperties, home?:boolean, auto?:boolean}) => {
  const router = useRouter();
  const navigateBack = ()=>{
    if(home){
      return router.push("/")
    }
    router.back();
  };
  
  return (
    <div style={styles}>
      <span onClick={navigateBack}>
        {children}  
      </span>
    </div>
  )
}

export default NavigateBack
