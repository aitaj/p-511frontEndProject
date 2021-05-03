//blog section started
let sideInfo = document.querySelector("#blogs .side-info");
let footer = document.querySelector("footer");
let diffScroll = document.body.offsetHeight - footer.offsetHeight;
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 923&&window.scrollY < 7000 ) {
    sideInfo.style.position = "fixed";
    sideInfo.style.bottom = "0";
    sideInfo.style.width = `${sideInfo.parentNode.offsetWidth}px`;
  } 
  else if(window.scrollY > 7000 ){
    sideInfo.style.position = "absolute";
    sideInfo.style.bottom = "0";
  }
  else{
    sideInfo.style.position = "static";
  }
});