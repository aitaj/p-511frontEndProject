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



//navbar started

let barIcon=document.querySelector(".nav-bar-icon");
let navWrapper=document.querySelector(".nav-main-ul")
barIcon.addEventListener("click", function(e){
 navWrapper.parentNode.style.display="inline-block";
 navWrapper.style.height=`${window.screen.height}px`;
})


//#house-in,#latest-properties layer

let cardHeaders = document.querySelectorAll(" .house-in-card .img-wrapper");

cardHeaders.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.children[1].classList.remove("d-none");
  });
  item.addEventListener("mouseleave", function () {
    item.children[1].classList.add("d-none");
  });
});

//lifestyle item layer


let lifestyleItems = document.querySelectorAll("#lifestyles .item");

lifestyleItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    item.classList.add("border");
    item.children[0].children[1].classList.remove("d-none");
    item.children[0].children[0].classList.add("d-none");
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("border");
    item.children[0].children[1].classList.add("d-none");
    item.children[0].children[0].classList.remove("d-none");
  });
});

//sliders carousels--started//////////////////

$(document).ready(function () {
//entry slider

$(".entry-slider ").owlCarousel({
  margin: 20,
  responsiveClass: true,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    992: {
      items: 1,
    },
  },
});

var owl = $('.entry-slider');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



  //#home-id slider
  $(".home-id-slider").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: true,
    nav: false,
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
    dots: true,
    nav: false,
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
    margin: 20,
    responsiveClass: true,
    dots: false,
    nav: false,
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
  //#testimonial slider

  $(".testimonial-slider ").owlCarousel({
    margin: 20,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
  });
});

//fixed-btn

let btnFixed = document.querySelector(".sticky-btn");

const scrollFunc = () => {

  let y = window.scrollY;

   if (y > 230) {
     console.log(y);
    btnFixed.className = "active sticky-btn";
  } else {
    btnFixed.className = "hide sticky-btn";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};
btnFixed.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
