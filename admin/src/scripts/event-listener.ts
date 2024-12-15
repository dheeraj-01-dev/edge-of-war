
const toggleSideNav = ()=>{
  const sideNavContainer = document.getElementsByClassName("sideNavContainer")[0];
  sideNavContainer.classList.toggle("activeSideNav");
  
  const sideNavCover = document.getElementById("sideNavCover");
  sideNavCover?.classList.toggle("activeSideNav");
};

export { toggleSideNav }