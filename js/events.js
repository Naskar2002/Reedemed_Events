var swiper = new Swiper("#events", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class=  "' + className + '">' + (index + 1) + "</span>";
    },
    // breakpoints: {
    //   576: {
    //     slidesPerView: 2,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //   },
    // },
  },
});

var swiper = new Swiper("#agent", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// <!-- AOS INtialization -->

AOS.init();
