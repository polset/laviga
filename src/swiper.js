// Import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// Import styles bundle
import 'swiper/css/bundle';

// Initialize Categories Swiper
document.addEventListener('DOMContentLoaded', function() {
  // Categories Carousel
  const categoriesSwiper = new Swiper('#categories-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 6,
        spaceBetween: 12,
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 7,
        spaceBetween: 12,
      },
    }
  });

  // Hero Carousel
  const heroSwiper = new Swiper('#hero-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-swiper-button-next',
      prevEl: '.hero-swiper-button-prev',
    },
  });
}); 