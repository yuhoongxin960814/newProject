<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper qqqq">
        <div class="swiper-slide">
          <img src="../../static/img/Home/img/01.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../static/img/Home/img/02.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../static/img/Home/img/03.jpg" alt />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
        <span class="swiper-pagination-bullet" aria-label="Go to slide 1"></span>
        <span class="swiper-pagination-bullet" aria-label="Go to slide 2"></span>
        <span class="swiper-pagination-bullet" aria-label="Go to slide 3"></span>
      </div>
      <!-- <div class="swiper-button-next" aria-label="Next slide"></div>
      <div class="swiper-button-prev" aria-label="Previous slide"></div>-->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  //  data(){
  //    return {

  //    }
  //  },
  mounted() {
    new Swiper(".swiper-container", {
      // loop: true, // 循环模式选项
      speed: 300,
      autoplay:true, 
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      effect: "flip",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style >
@import "../../static/img/swiper/css/swiper.min.css";
.banner {
  margin-top: 2.5rem;
}
</style>