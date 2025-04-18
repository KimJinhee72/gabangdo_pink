<template>
<div class="macontent1_wrap1">
    <div class="inner">
      <!-- 아래 -->
      <div class="macontent1_down">
 <Swiper
  :modules="[Scrollbar, Autoplay, Pagination, Navigation]"
  :scrollbar="{ el: '.swiper-scrollbar', hide: true }"
  :spaceBetween="30"
  :centeredSlides="true"
  :autoplay="{ delay: 2000, disableOnInteraction: false }"
  :pagination="{ clickable: true }"
  :navigation="true"
  :slides-per-view="1"
  class="mySwiper masize1"
>
    <!-- 각 슬라이드 -->
    <!-- s사이즈 -->
    <SwiperSlide>
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>S 사이즈</h2>
            <h4>기내용 캐리어,소형 배낭 등</h4>
            <h5>21인치이하/55cm이하/10kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <img src="/public/images/gh/ma_content1/s_size.png" alt="S사이즈" />
            <!-- <img src="/public/images/ma/ma_content1/s_size.png" alt="S사이즈" /> -->
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 10,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>12,000원</h2>
          </div>
    </SwiperSlide>
        <!-- m사이즈 -->
<SwiperSlide>
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>M 사이즈</h2>
            <h4>화물용 캐리어, 등산 가방 등</h4>
            <h5>25인치이하/65cm이하/20kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/m_size.png" alt="m사이즈" /> -->
            <img src="/public/images/gh/ma_content1/m_size.png" alt="m사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 14,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>16,000원</h2>
          </div>
</SwiperSlide>
        <!-- l사이즈 -->
<SwiperSlide>
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>L 사이즈</h2>
            <h4>대형 캐리어, 배낭, 골프백 등</h4>
            <h5>26인치이상/66cm이상/30kg미만</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/l-size.png" alt="l사이즈" /> -->
            <img src="/public/images/gh/ma_content1/l-size.png" alt="l사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5>사전예약시 16,000원</h5>
          </div>
          <!-- 당일예약시 -->
          <div class="masize_aftercash">
            <h4>당일예약</h4>
            <h2>18,000원</h2>
          </div>
</SwiperSlide>
      <!-- ?사이즈 -->
<SwiperSlide>
          <!-- 사이즈 섹션 상단 설명 -->
          <div class="masize_txt">
            <h2>? 사이즈</h2>
            <h4>기타 물품 및 표시 외 사이즈</h4>
            <h5>가방도 문의 후 협의된 물품에 한함</h5>
          </div>
          <!-- 아이콘 -->
          <div class="masize_icon">
            <!-- <img src="/public/images/ma/ma_content1/size.png" alt="?사이즈" /> -->
            <img src="/public/images/gh/ma_content1/size.png" alt="?사이즈" />
          </div>
          <!-- 사전예약시 -->
          <div class="masize_beforecash">
            <h5></h5>
          </div>
          <!-- 카카오톡 문의 -->
          <div class="masize_aftercash">
            <h2>카카오톡 문의</h2>
          </div>
</SwiperSlide>
<div class="swiper-scrollbar"></div>
  </Swiper>
      </div>
    </div>
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar, Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Scrollbar, Autoplay, Pagination, Navigation]

</script>

<style scoped>
@import "@/assets/Home.scss";
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
