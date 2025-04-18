<template>
  <div class="macontent2_wrap1">
    <div class="inner">
      <div class="macontent2_icon">
        <swiper
          :slides-per-view="2.5"
          :space-between="1"
          :rewind="true"
          :navigation="true"
          :scrollbar="{
            hide: true,
          }"
          :modules="modules"
          class="mySwiper macontent2_iconimg1">
          <!-- 1. 가방도 -->
          <swiper-slide>
            <div class="macontent2_iconimg">
              <a href="#">
                <!-- 아이콘 이미지 -->
                <router-link to="/bangbeob1"
                  ><img
                    src="/public/images/gh/ma_content2/bangbeobdo_icon.png"
                    alt="방법도 아이콘"
                /></router-link>
                <!-- hover시 보일 텍스트 -->
                <div class="macontent2_icon_hover">
                  <h5>
                    짐운송, 보관,<br />차량 대절까지<br />당일 배송,
                    <br />안전한 픽업
                  </h5>
                </div>
              </a>
              <!-- 항상 보이는 텍스트 -->
              <div class="macontent2_icontxt">
                <h4>가방도</h4>
              </div>
            </div>
          </swiper-slide>
          <!-- 2. 예약도 -->
          <swiper-slide>
            <div class="macontent2_iconimg">
              <a href="#">
                <!-- 아이콘 이미지 -->
                <router-link to="/yeyak"
                  ><img
                    src="/public/images/gh/ma_content2/reservation_icon.png"
                    alt="예약도 아이콘"
                /></router-link>
                <!-- hover시 보일 텍스트 -->
                <div class="macontent2_icon_hover">
                  <h5>
                    특별 예약으로<br />
                    원하는 서비스를 빠르게 이용하세요.
                  </h5>
                </div>
              </a>
              <!-- 항상 보이는 텍스트 -->
              <div class="macontent2_icontxt">
                <h4>예약도</h4>
              </div>
            </div>
          </swiper-slide>
          <!-- 3. 요금도 -->
          <swiper-slide>
            <div class="macontent2_iconimg">
              <a href="#">
                <!-- 아이콘 이미지 -->
                <router-link to="/yogeum"
                  ><img
                    src="/public/images/gh/ma_content2/cash_icon.png"
                    alt="요금도 아이콘"
                /></router-link>
                <!-- hover시 보일 텍스트 -->
                <div class="macontent2_icon_hover">
                  <h5>
                    서비스 요금과<br />
                    결제 방법<br />
                    전체적으로 <br />확인하세요.
                  </h5>
                </div>
              </a>
              <!-- 항상 보이는 텍스트 -->
              <div class="macontent2_icontxt">
                <h4>요금도</h4>
              </div>
            </div>
          </swiper-slide>
          <!-- 4. 소통도 -->
          <swiper-slide>
            <div class="macontent2_iconimg">
              <a href="#">
                <!-- 아이콘 이미지 -->
                <router-link to="/sotong"
                  ><img
                    src="/public/images/gh/ma_content2/comunity_icon.png"
                    alt="소통도 아이콘"
                /></router-link>
                <!-- hover시 보일 텍스트 -->
                <div class="macontent2_icon_hover">
                  <h5>
                    공지사항과<br />
                    커뮤니티에서<br />가방도 프로모션과<br />
                    후기들을<br />만나보세요.
                  </h5>
                </div>
              </a>
              <!-- 항상 보이는 텍스트 -->
              <div class="macontent2_icontxt">
                <h4>소통도</h4>
              </div>
            </div>
          </swiper-slide>
          <!-- 5. 여행도 -->
          <swiper-slide>
            <div class="macontent2_iconimg">
              <a href="#">
                <!-- 아이콘 이미지 -->
                <router-link to="/yeohaeng"
                  ><img
                    src="/public/images/gh/ma_content2/trip_icon.png"
                    alt="여행도 아이콘"
                /></router-link>
                <!-- hover시 보일 텍스트 -->
                <div class="macontent2_icon_hover">
                  <h5>
                    대구 축제,<br />
                    관광지, 맛집<br />정보를 만나보세요.
                  </h5>
                </div>
              </a>
              <!-- 항상 보이는 텍스트 -->
              <div class="macontent2_icontxt">
                <h4>여행도</h4>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Scrollbar } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Scrollbar],
    };
  },
};
</script>
<style lang="scss" scoped>
@use "@/assets/Home.scss" as *;
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
  width: 85%;
  height: 100%;
}

.swiper-slide {
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
