"use strict"
//blog section started

let sideInfo = document.querySelector("#blogs .side-info");
window.addEventListener("scroll", function (e) {
  console.log(window.scrollY)
  if (window.scrollY > 923&&window.scrollY < 6500 ) {
    sideInfo.style.position = "fixed";
    sideInfo.style.bottom = "0";
    sideInfo.style.width = `${sideInfo.parentNode.offsetWidth}px`;
  } 
  else if(window.scrollY >= 6500 ){
    sideInfo.style.position = "absolute";
  }
  else{
    sideInfo.style.position = "static";
  }
});