"use client"

const toast = ( message: string|number|undefined|null )=>{
  
  const globalToast = document.getElementById("globalToast");
  const toastText = document.getElementById("toastText");

  if(!globalToast||!toastText)return;

  // toastText.innerHTML = `${message}`;
  toastText.innerHTML = `${message===undefined?"Invalid icomming!":message}`;
  globalToast.style.display = "flex"

  // const ti = setTimeout(() => {
  //   globalToast.style.display = "none"
  // }, 3000);
};

export default toast;