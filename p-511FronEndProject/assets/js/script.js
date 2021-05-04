//navbar started

//hiding navbar
let logInBtnNav = document.querySelector("#navbar .sign-in-btn");
let closeLoginBtns = document.querySelectorAll(".pop-up .fa-times");
let logInBtn = document.querySelectorAll(".pop-up .log-in");
let registBtn = document.querySelectorAll(".pop-up .register");
logInBtnNav.addEventListener("click", function () {
  document.querySelector("#navbar .pop-up").classList.remove("d-none");
  document.querySelector("#navbar .log-in-wrapper").classList.remove("d-none");
});
closeLoginBtns.forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector("#navbar .pop-up").classList.add("d-none");
  });
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

//opening responsive navbar

let barIcon = document.querySelector(".nav-bar-icon");
let navWrapper = document.querySelector(".nav-main-ul");
let main = document.querySelector("main");
let header = document.querySelector("header");
barIcon.addEventListener("click", function (e) {
  navWrapper.style.height = `${window.screen.height}px`;
  navWrapper.parentNode.classList.toggle("active");
  if (navWrapper.parentNode.classList.contains("active")) {
    main.style.transform = `translateX(${navWrapper.offsetWidth}px)`;
    header.style.transform = `translateX(${navWrapper.offsetWidth}px)`;
    navWrapper.style.transform = `translateX(-${navWrapper.offsetWidth}px)`;
    main.style.animationName = "smooth-main";
    main.style.animationDuration = "2s";
    header.style.animationName = "smooth-main";
    header.style.animationDuration = "2s";
  } else {
    main.style.transform = `translateX(${0}px)`;
    header.style.transform = `translateX(${0}px)`;
  }
});

//advanced-features

let advancedBtn = document.querySelector("#advanced-search .advance-open");
let advanceSection = document.querySelector("#advanced-search .advanced-items");

advancedBtn.addEventListener("click", function () {
  advanceSection.classList.toggle("d-none");
  if (!advanceSection.classList.contains("d-none")) {
    document.querySelector("#advanced-search").style.paddingBottom = "50px";
    this.children[0].classList.replace("fa-plus-circle", "fa-minus-circle");
  } else {
    document.querySelector("#advanced-search").style.paddingBottom = "0px";
    this.children[0].classList.replace("fa-minus-circle", "fa-plus-circle");
  }
});
let otherFeaturesBtn = document.querySelector(
  "#advanced-search .other-features-btn"
);
let otherFeaturesSection = document.querySelector(
  "#advanced-search .other-feature-items"
);
otherFeaturesBtn.addEventListener("click", function () {
  otherFeaturesSection.classList.toggle("d-none");
});

//advanced features responsive

let settingBtn = document.querySelector(".keyword .fa-cog");

settingBtn.addEventListener("click", function () {
  advanceSection.classList.toggle("d-none");
  if (!advanceSection.classList.contains("d-none")) {
    document.querySelector("#advanced-search").style.paddingBottom = "50px";
  } else {
    document.querySelector("#advanced-search").style.paddingBottom = "0px";
  }
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

//agent section api

const url = "https://json-fake-api.herokuapp.com/agents";

async function getAgents() {
  const result = await fetch(url);

  const data = await result.json();

  const html = data.map((item) => {
    return `
           <div class="custom-card">
                  <div class="custom-card-header text-center">
                    <div class="img-wrapper">
                      <img
                        src="${item.image}"
                        alt=""
                      />
                    </div>
                    <h5>${item.name}</h5>
                    <p>${item.job}</p>

                    <div class="star">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="custom-card-body">
                    <ul>
                      <li>
                        <p>Office</p>
                        <span>${item.office_phone}</span>
                      </li>
                      <li>
                        <p>Mobile</p>
                        <span>${item.phone}</span>
                      </li>
                      <li>
                        <p>Fax</p>
                        <span>+98 0900 098 888</span>
                      </li>
                      <li>
                        <p>Email</p>
                        <span>${item.email}</span>
                      </li>
                      <li>
                        <p>Social</p>
                        <div class="social d-inline-block">
                          <span><i class="fab fa-facebook-f"></i></span>
                          <span><i class="fab fa-twitter"></i></span>
                          <span><i class="fab fa-linkedin-in"></i></span>
                          <span><i class="fab fa-instagram"></i></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
    `;
  });

  document.querySelector("#agents .agent-cards").innerHTML = html.join("");
}

getAgents();

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
    console.log("test");
  });
  item.addEventListener("mouseleave", function (e) {
    this.classList.remove("active");
    this.classList.add("hide");
  });
});

//
