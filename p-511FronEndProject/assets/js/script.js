//home page started
//fixed-btn common

let btnFixed = document.querySelector(".sticky-btn");

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 230) {
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

//sign in & register

let logInBtnNav = document.querySelector("#navbar .sign-in-btn");
let closeLoginBtns = document.querySelectorAll(".pop-up .fa-times");
let logInBtn = document.querySelectorAll(".pop-up .log-in");
let registBtn = document.querySelectorAll(".pop-up .register");
logInBtnNav.addEventListener("click", function () {
  document.querySelector("#navbar .pop-up").classList.remove("d-none");
  document.querySelector("#navbar .log-in-wrapper").classList.remove("d-none");

  document.querySelector("#navbar .pop-up").style.height = `${screen.height}px`;
  document.body.style.overflow = "hidden";
});
closeLoginBtns.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("#navbar .pop-up").classList.add("d-none");
    document.body.style.overflow = "hidden";
  });
});
document
  .querySelector("#navbar .pop-up")
  .addEventListener("click", function (e) {
    if (
      e.target.classList.contains("pop-up") ||
      e.target.parentNode.classList.contains("pop-up")
    ) {
      document.querySelector("#navbar .pop-up").classList.add("d-none");
      document.body.style.overflow = "hidden";
    }
  });
logInBtn.forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelector("#navbar .log-in-wrapper")
      .classList.remove("d-none");
    document.querySelector("#navbar .register-wrapper").classList.add("d-none");
  });
});
registBtn.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("#navbar .log-in-wrapper").classList.add("d-none");
    document
      .querySelector("#navbar .register-wrapper")
      .classList.remove("d-none");
  });
});

//navbar started
//opening responsive navbar

let barIcon = document.querySelector(".nav-bar-icon");
let mainUlLi = document.querySelectorAll(".main-ul-li");
let listingUlLi = document.querySelectorAll(".listing-ul-li");
let body = document.querySelector("body");
let sidebar = document.querySelector(".sidebar-custom");
let sidebarItems = document.querySelectorAll(".sidebar-custom a");
let navLayer = document.querySelector(".nav-layer");
barIcon.addEventListener("click", function (e) {
  sidebar.style.height = `${screen.height}px`;
  sidebar.style.transform = `translateX(${0}px)`;
  sidebar.style.animation = `none`;
  body.style.transform = `translateX(${250}px)`;
  body.style.animationName = "smooth-main-open";
  body.style.animationDuration = `${0.7}s`;
  navLayer.style.display = "block";
  navLayer.style.opacity = "0.6";
  navLayer.style.animationName = "smooth-opacity";
  navLayer.style.height = `${screen.height}px`;
  navLayer.style.animationDuration = `${0.6}s`;
  document.body.style.overflow = "hidden";
  document.body.style.height = `${screen.height}px`;
});
//closing respo navbar

navLayer.addEventListener("click", function (e) {
  sidebar.style.transform = `translateX(${-250}px)`;
  sidebar.style.animationName = "smooth-sidebar-close";
  sidebar.style.animationDuration = `${2.9}s`;
  body.style.transform = `translateX(${0}px)`;
  navLayer.style.display = "none";
  navLayer.style.opacity = "0";
  document.body.style.overflow = "auto";
  document.body.style.height = `fit-content`;
  //   body.style.animationName = "smooth-main-close";
  //   body.style.animationDuration = `${0.7}s`;
  // document.body.style.width = `${screen.width}px`;
});

//respo-navbar li & ul
$(document).ready(function () {
  $(mainUlLi).each(function (index) {
    $(this).on("click", function () {
      $(this).children(".listing-ul").slideToggle();
      $(this).siblings().children(".listing-ul").slideUp();
    });
  });
  $(listingUlLi).each(function (index) {
    $(this).on("click", function (e) {
      e.stopPropagation();
      $(this).children("ul").slideToggle();
      $(this).siblings().children("ul").slideUp();
    });
  });
});

//advanced-search

$(document).ready(function () {
  let advancedBtn = document.querySelector("#advanced-search .advance-open");
  let advanceItems = document.querySelector("#advanced-search .advanced-items");

  let otherFeaturesBtn = document.querySelector(
    "#advanced-search .other-features-btn"
  );
  let otherFeaturesSection = document.querySelector(
    "#advanced-search .other-feature-items"
  );
  $(advancedBtn).on("click", function (e) {
    $(advanceItems).slideToggle();
    document.querySelector("#advanced-search").style.paddingBottom = "20px";
    this.children[0].classList.replace("fa-plus-circle", "fa-minus-circle");
  });
  $(otherFeaturesBtn).on("click", function () {
    $(otherFeaturesSection).slideToggle();
  });
});

//advanced-search mobile

let settingBtn = document.querySelector(
  "#advanced-search-mobile .keyword .fa-cog"
);
let otherFeaturesBtn = document.querySelector(
  "#advanced-search-mobile .other-features-btn"
);
$(settingBtn).click(function () {
  $("#advanced-search-mobile .advanced-items-mobile").slideToggle();
});
$(otherFeaturesBtn).click(function () {
  $("#advanced-search-mobile .other-features-mobile").slideToggle();
});

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

  var owl = $(".entry-slider");
  owl.owlCarousel();
  // Go to the next item
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });

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

  // #agent page slider

  $("#agents .item-slider").owlCarousel({
    margin: 30,
    responsiveClass: true,
    dots: true,
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

  //contact slider
  $("#contact .item-slider").owlCarousel({
    margin: 30,
    responsiveClass: true,
    dots: true,
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
});

//customizing select2 dropdowns

$(document).ready(function () {
  //agents section

  //dropdowns
  $("header .agency-dropdown-2").select2({
    width: `${100}%`,
  });
  $("header .agency-dropdown-1").select2({
    width: `${100}%`,
  });
  $(".agency-dropdown").select2({
    width: `${100}%`,
  });
  $(".sorting-names-dropdown").select2({
    width: `${70}%`,
  });

  ///about page started

  // #video-pop-up section
  $("#video-pop-up .play-btn").fancybox({});

  // #about us slide images

  $('[data-fancybox="images"]').fancybox({
    buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
    thumbs: {
      autoStart: false,
    },
  });
});
//about us page started

let leaders = document.querySelectorAll("#leadership .item");
leaders.forEach((item) => {
  item.addEventListener("mouseenter", function (e) {
    this.classList.add("active");
    this.classList.remove("hide");
  });
  item.addEventListener("mouseleave", function (e) {
    this.classList.remove("active");
    this.classList.add("hide");
  });
});
