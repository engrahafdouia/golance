<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="(item,i) in items"
      :key="i"
      :src="item.src"></swiper-slide>

  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cards';


  // import required modules
  import { EffectCards , Autoplay } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
    return {
      items: [
                {
                    src: "../../public/img/slide_03.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },

            ],    };
  },
    setup() {
      return {
        modules: [EffectCards , Autoplay],
      };
    },
  };
</script>

<style>



.swiper {
    width: 240px;
    height: 320px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-slide:nth-child(1n) {
    background-image: url('../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg');
  background-color: #eee;
  background-size:contain
  }

  .swiper-slide:nth-child(2n) {
    background-image: url('../assets/html-5-svgrepo-com.svg');
    background-color: #eee;
    background-size:contain

  }

  .swiper-slide:nth-child(3n) {
    background-image: url('../assets/css-3-svgrepo-com.svg');

    background-color: #eee;
    background-size:contain

  }

  .swiper-slide:nth-child(4n) {
    background-image: url('../assets/bulma-svgrepo-com.svg');

    background-color: #eee;
  }

  .swiper-slide:nth-child(5n) {
  background-image: url('../assets/javascript-logo-svgrepo-com.svg');
  }

  .swiper-slide:nth-child(6n) {
    background-image: url('../assets/vuetify-logo-3BCF73C928-seeklogo.com.png');
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }

</style>
