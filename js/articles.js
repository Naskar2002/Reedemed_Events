var swiper = new Swiper("#article", {
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


  // AOS INtialization 

        AOS.init();
 