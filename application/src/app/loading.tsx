import React from 'react'

const loading = () => {
  return (
    <div style={{background: "#000", height: "100dvh", width: "100dvw", display: "grid", placeItems: "center"}}>
        <video src="/loading.mp4" style={{width:"50dvw"}} loop autoPlay muted></video>
    </div>
  )
}

export default loading