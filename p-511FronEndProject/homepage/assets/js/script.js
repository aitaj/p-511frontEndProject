let mainUl = document.querySelectorAll(".main-ul-li");
let listUl = document.querySelectorAll(".listing-ul");
let listingUlLi = document.querySelectorAll(".listing-ul-li");
mainUl.forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    if (e.target.children[1].classList.contains("listing-ul")) {
      this.children[1].classList.remove("d-none");
    }
  });
});
listUl.forEach((item) => {
  item.addEventListener("mouseleave", function (e) {
    if (!item.classList.contains("d-none")) {
      item.classList.add("d-none");
    }
  });
});
listingUlLi.forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    this.children[2].classList.remove("d-none");
  });
  item.addEventListener("mouseleave", function (e) {
    this.children[2].classList.add("d-none");
  });
});

//#house-in,#latest-properties layer

let cardHeaders = document.querySelectorAll(
  " .house-in-card .img-wrapper"
);

cardHeaders.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.children[1].classList.remove("d-none");
  });
  item.addEventListener("mouseleave", function () {
    item.children[1].classList.add("d-none");
  });
});


//lifestyle item layer
let lifestyleItems=document.querySelectorAll("#lifestyles .item");

lifestyleItems.forEach((item) => {
  item.addEventListener("mouseenter",function(){
    item.classList.add("border");
    item.children[0].children[1].classList.remove("d-none");
    item.children[0].children[0].classList.add("d-none");
  })
  item.addEventListener("mouseleave",function(){
    item.classList.remove("border");
    item.children[0].children[1].classList.add("d-none");
    item.children[0].children[0].classList.remove("d-none");
  })
})


//sliders 

$(document).ready(function () {
//#home-id slider
$(".home-id-slider").owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  dots:true,
  nav:false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 4,
    },
  },
});


//#comments slider
$(".comment-slider").owlCarousel({
  
  margin: 30,
  responsiveClass: true,
  dots:true,
  nav:false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
}); 

//#news-articles slider

  $(".news-articles-slider").owlCarousel({
  
    margin: 30,
    responsiveClass: true,
    dots:false,
    nav:false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
});

