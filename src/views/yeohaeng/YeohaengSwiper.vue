<template>
  <swiper
    :scrollbar="{
      hide: true,
    }"
    :slidesPerView="1"
    :spaceBetween="10"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper">
    <swiper-slide
      ><h4>군위시장투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_02.jpg"
          alt="군위전통시장투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>현풍투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_03.jpg"
          alt="현풍전통시장투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>사시사철투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_04.jpg"
          alt="사시사철투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>낙동강투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_05.jpg"
          alt="낙동강투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>군위군돋보기투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_06.jpg"
          alt="군위군돋보기투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>팔공산투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_07.jpg"
          alt="팔공산투어" /></a
    ></swiper-slide>
    <swiper-slide
      ><h4>야경투어</h4>
      <a href="#"
        ><img
          src="/public/images/geen/1/KakaoTalk_20250410_194237551_01.jpg"
          alt="야경투어" /></a
    ></swiper-slide>
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>

<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
    };
  },
};
</script>
<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
h4 {
  margin: 10px 0;
  font-size: 20px;
  color: $main-color;
}
.swiper-slide {
  width: 100% !important;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    width: 100%;
    max-width: 700px;
    height: 100%;
    @media (max-width: 630px) {
      width: 100%;
    }
  }
  img {
    width: 100%;

    height: auto;
    object-fit: cover; // 또는 contain
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.autoplay-progress {
  display: none;
}
::v-deep(.swiper-pagination) {
  display: none !important ;
}
::v-deep(.swiper-slide > img) {
  margin: 0 !important;
}
::v-deep(.swiper-button-prev) {
  color: #ee2b2b;
  left: var(--swiper-navigation-sides-offset, 230px);
}

::v-deep(.swiper-button-prev::after) {
  font-size: 25px;
}
::v-deep(.swiper-button-next) {
  color: #ee2b2b;
  right: var(--swiper-navigation-sides-offset, 230px);
}
::v-deep(.swiper-button-next::after) {
  font-size: 25px;
}
::v-deep(.swiper-scrollbar-drag) {
  background-color: #ee2b2b !important;
}
@media screen and (max-width: 1280px) {
  ::v-deep(.swiper-button-prev) {
    left: var(--swiper-navigation-sides-offset, 50px);
  }
  ::v-deep(.swiper-button-next) {
    right: var(--swiper-navigation-sides-offset, 50px);
  }
}
@media screen and (max-width: 890px) {
  ::v-deep(.swiper-button-prev) {
    left: var(--swiper-navigation-sides-offset, 0px);
  }
  ::v-deep(.swiper-button-next) {
    right: var(--swiper-navigation-sides-offset, 0px);
  }
}
@media screen and (max-width: 760px) {
  ::v-deep(.swiper-button-prev) {
    display: none;
  }
  ::v-deep(.swiper-button-next) {
    display: none;
  }
}
</style>
