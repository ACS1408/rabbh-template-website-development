const bannerSlider = new Swiper(".home-banner__slider", {
  slidesPerView: 1.2,
  spaceBetween: 15,
  navigation: {
    prevEl: ".home-banner__slider ~ .swiper-button-prev",
    nextEl: ".home-banner__slider ~ .swiper-button-next",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

const templateSliders = document.querySelectorAll(".template-slider");
templateSliders.forEach((slider, sliderIndex) => {
  const prevArrow = slider
    .closest(".template-slider-wrap")
    .querySelector(".template-slider-navigation .swiper-nav-prev");
  const nextArrow = slider
    .closest(".template-slider-wrap")
    .querySelector(".template-slider-navigation .swiper-nav-next");
  const tempSlider = new Swiper(slider, {
    slidesPerView: 1.2,
    spaceBetween: 15,
    navigation: {
      prevEl: prevArrow,
      nextEl: nextArrow,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
});

const sideHeadSlider = new Swiper(".side-head-slider__slider", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  navigation: {
    prevEl: ".side-head-slider__slider ~ .swiper-button-prev",
    nextEl: ".side-head-slider__slider ~ .swiper-button-next",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});

const creativeImageSlider = new Swiper(".creative-slider__imageSlider", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
const creativeTextSlider = new Swiper(".creative-slider__textSlider", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0],
    },
  },
  pagination: {
    el: ".creative-slider-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".creative-nav-prev",
    nextEl: ".creative-nav-next",
  },
});

creativeImageSlider.controller.control = creativeTextSlider;
creativeTextSlider.controller.control = creativeImageSlider;

const productSlider = new Swiper(".product-slider", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
