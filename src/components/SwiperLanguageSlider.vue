<template>
   <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :autoplay="{
      delay: 2700,
      disableOnInteraction: false,
    }"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      >
        <img
          src="../assets/screencapture-127-0-0-1-5502-First-project-final-project-index-html-2022-10-24-12_32_43.png" height="300" width="600" />


          </swiper-slide
            >

      <swiper-slide
      ><img
        src="../assets/screencapture-fresh-cssninja-io-2022-10-28-14_44_47.png" height="400" width="700" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/لقطة الشاشة 2023-01-13 214031.png" height="300" width="600" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/ezgif.com-gif-maker.gif" height="300" width="600" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/screencapture-127-0-0-1-5504-training-website1-index-html-2022-12-01-21_40_05.png" height="300" width="600" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/screencapture-engrahafdouia-github-io-makeup-float-2022-12-06-01_10_03.png" height="300" width="600" /></swiper-slide
    ><swiper-slide
      ><img
        src="../assets/screencapture-127-0-0-1-5504-training-website-green-index-html-2022-12-01-21_53_58.png" /></swiper-slide
    >
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide  } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "../assets/main.css";

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,

  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination , Autoplay],
    };
  },
};
</script>


<style>
 .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top:10px
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }


</style>
