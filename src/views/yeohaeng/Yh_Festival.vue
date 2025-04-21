<template>
  <div id="festivalBanner">
    <div class="main-slide-list2">
      <div class="main-slide-list2-title">
        <i class="ico_bright"></i>
        <!-- 순환버스 제목 -->
        <div class="bb_title1">
          <div class="festival-title"></div>
          <div class="title_txt1">
            <h1>대구 {{ activeTab === "CDF018.001" ? "봄" : "가을" }} 축제</h1>
          </div>
        </div>
      </div>
      <!-- 봄/가을 탭 -->
      <div class="festival-month">
        <a
          :class="{ active: activeTab === 'CDF018.001' }"
          @click="changeTab('CDF018.001')"
          >봄</a
        >
        <a
          class="festivalTab"
          :class="{ active: activeTab === 'CDF018.002' }"
          @click="changeTab('CDF018.002')"
          >가을</a
        >
      </div>
      <!-- Swiper (슬라이드 내용) -->
      <div id="main-swiper" class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(festival, index) in festivalData[activeTab]"
            :key="index"
            class="swiper-slide">
            <div class="slide-wrap">
              <div class="left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.002"
                  height="39.998"
                  viewBox="0 0 40.002 39.998">
                  <path
                    id="합치기_22"
                    data-name="합치기 22"
                    d="M0,40V12.666H0A12.665,12.665,0,0,1,12.666,0H40V12.666H12.668V40Z"
                    :fill="
                      activeTab === 'CDF018.001' ? '#ee2b2b' : 'yellow'
                    "></path>
                </svg>
                <div class="slide-info-wrap">
                  <div class="slide-info-title">
                    {{ festival.title }} <br />{{ festival.title1 }}
                    <p></p>
                    <a
                      v-if="festival.href"
                      :href="festival.href"
                      class="festi-more"
                      target="_blank"
                      rel="noopener noreferrer"
                      >자세히 보기
                    </a>
                  </div>
                  <div class="slide-info-cont">
                    <ul>
                      <li><span>· 개최기간</span></li>
                      <li>{{ festival.date }}</li>
                    </ul>
                    <ul>
                      <li><span>· 장소</span></li>
                      <li>{{ festival.location }}</li>
                    </ul>
                  </div>
                </div>
                <div
                  class="left-bg"
                  :style="{
                    background:
                      activeTab === 'CDF018.001' ? '#fa6d6d' : 'yellow',
                  }"></div>
              </div>
              <div class="right">
                <div
                  class="right-thumb"
                  :style="{ backgroundImage: `url(${festival.image})` }"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="swiper-btn-wrap">
        <div
          class="swiper-button-prev2"
          tabindex="0"
          role="button"
          aria-label="Previous slide"></div>
        <div class="swiper-pagination2 swiper-pagination-fraction">
          <span class="swiper-pagination-current">10</span> /
          <span class="swiper-pagination-total">11</span>
        </div>
        <div
          class="swiper-button-next2"
          tabindex="0"
          role="button"
          aria-label="Next slide"></div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from "vue";
import Swiper from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

Swiper.use([Navigation, Pagination, Autoplay]);

const activeTab = ref("CDF018.001");
let swiperInstance = null;

const festivalData = {
  "CDF018.001": [
    {
      title: "파워풀",
      title1: "대구페스티벌",
      date: "2025.5.10.(토) ~ 5.11.(일)",
      location: "국채보상로",
      image: "/public/images/geen/power_poster.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000070",
    },
    {
      title: "대구약령시",
      title1: "한방문화축제",
      date: "2025.5.8.(목) ~ 5.11.(일)",
      location: "약령시 일원",
      image: "/public/images/geen/yak.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000130",
    },
    {
      title: "대구 생활문화제",
      date: "2025.5.10.(토) ~ 5.11.(일)",
      location: "국채보상운동기념공원",
      image: "/public/images/geen/kukchae.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000040",
    },
    {
      title: "대구TOP밴드",
      title1: " 경연대회",
      date: "2025.5.10.(토)",
      location: "코오롱야외음악당",
      image: "/public/images/geen/music.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000041",
    },
    {
      title: "동성로",
      title1: "청년버스킹",
      date: "2025.5.15.(목) ~ 5.17.(토)",
      location: "동성로 일원",
      image: "/public/images/geen/busking.jpeg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000065",
    },
    {
      title: "동성로 축제",
      date: "2025.5.9.(금) ~ 5.11.(일)",
      location: "동성로 일대",
      image: "/public/images/geen/dong.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000069",
    },
    {
      title: "장미꽃 필 무렵",
      date: "2025.5.16.(금) ~ 5.18.(일)",
      location: "이곡장미공원 일대",
      image: "/public/images/geen/rose.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000067",
    },
    {
      title: "YES!키즈존",
      date: "2025.5.10.(토)~11.(일), 2025.5.31.(토)~6.1.(일)",
      location: "강정보 디아크 /  국립대구과학관 일원",
      image: "/public/images/geen/ai.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000172",
    },
    {
      title: "대구무용제",
      date: "2025.5.11.(일)",
      location: "대구문화예술회관 팔공홀",
      image: "/public/images/geen/palgong.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_000173",
    },
    {
      title: "대구간송미술관 기획전",
      date: "2025.4 ~",
      location: "대구간송미술관",
      image: "/public/images/geen/gansong.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.001&searchFESTV_ID=FESTV_0000175",
    },
  ],
  "CDF018.002": [
    {
      title: "대구국제오페라축제 축제 1",
      date: "2025.9.26.(금) ~ 11.8.(토)",
      location: "대구오페라하우스",
      image: "/public/images/geen/opera.jpg",
      href: "https://fantasiafesta.or.kr/Festival-October?searchFESTV_MONTH_DCD=CDF018.002",
    },
    {
      title: "월드오케스트라페스티벌",
      date: "2025.9.26.(금) ~ 11.8.(토)",
      location: "2025.9~11월",
      image: "/public/images/geen/orchestra.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.002&searchFESTV_ID=FESTV_000095",
    },
    {
      title: "대구포크페스티벌",
      date: "2025.9.",
      location: "김광석거리 일대",
      image: "/public/images/geen/folk.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.002&searchFESTV_ID=FESTV_000090",
    },
    {
      title: "대구콘텐츠페어",
      date: "2025.9.26.(금) ~ 9.27.(토)",
      location: "엑스코",
      image: "/public/images/geen/content.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.002&searchFESTV_ID=FESTV_000094",
    },
    {
      title: "대구국제힐링공연예술제",
      date: "2025.9 ~ 10월",
      location: "대명공연거리",
      image: "/public/images/geen/hilling.jpg",
      href: "https://fantasiafesta.or.kr/festival.do?searchFESTV_MONTH_DCD=CDF018.002&searchFESTV_ID=FESTV_000092",
    },
  ],
};


// 탭 변경
const changeTab = (tabId) => {
  activeTab.value = tabId;
};

// Swiper 초기화 함수
const initSwiper = () => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true); // 이전 인스턴스 제거
  }

  swiperInstance = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    watchOverflow: true,
  });

  //  swiperInstance가 생성된 후에 실행
  const nextButton2 = document.querySelector(".swiper-button-next2");
  const prevButton2 = document.querySelector(".swiper-button-prev2");

  if (nextButton2) {
    nextButton2.addEventListener("click", () => {
      swiperInstance.slideNext();
    });
  }

  if (prevButton2) {
    prevButton2.addEventListener("click", () => {
      swiperInstance.slidePrev();
    });
  }
};

// 탭 변경 후 DOM이 업데이트된 다음 Swiper 다시 초기화
watch(activeTab, async () => {
  await nextTick();
  initSwiper();
});

// 최초 마운트 시 초기화
onMounted(() => {
  initSwiper();
});
</script>

<style lang="scss" scoped>
@charset "UTF-8";
@use "/src/assets/Variables" as *;
@use "/src/assets/Variables" as *;
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

// 제목
.bb_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  .title_txt1 h1 {
    font-size: 35px;
  }
}
header.main {
  position: fixed;
}
header.main.fix {
  background: #e32c39;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
}
header.main.fix {
  background: #fff;
}
header.main.fix .logo > a {
  filter: invert(1);
}
header.main.fix .hd-gnb .hd-menu > li > a {
  color: #000;
}

header.main.fix .hd-gnb .hd-menu > li:after {
  background: #000;
}

/* main-bg */
.main-banner-bg {
  width: 100%;
  height: 100%;
  min-height: 838px;
  position: relative;
  overflow: hidden;
}
.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat bottom / cover;
}
.banner-bg.main-bg {
  background-image: url("../../images/user/main/main-banner_bg3.png");
  z-index: 2;
}
.main-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat 50% / cover;
  /*background-image: url("../../images/user/main/main-banner_bg2.png");*/
}
.main-bg2 {
  background-image: url("../../images/user/main/main-banner_bg2.png");
  z-index: 5;
}
.main-banner-bg #canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  opacity: 0.5;
}
.canvas-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.canvas-bg::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 48px;
  background: no-repeat 50% / cover;
  background-image: url("../../images/user/main/canvas-bt.png");
  overflow: hidden;
  z-index: 11;
}
.main-txt {
  background-image: url(../../images/user/main/main-txt.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 6 / 4;
  height: 400px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 11;
}
.circle-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: no-repeat 50% / cover;
  background-image: url("../../images/user/main/circle_red.svg");
}

.main-txt.eng {
  background-image: url(../../images/user/main/main-txt-eng.svg);
  background-position: center;
  width: 100%;
}
.planet-img {
  position: absolute;
  background: no-repeat 50% / cover;
  z-index: 4;
}
.planet-img.img01 {
  top: 20%;
  left: 5%;
  background-image: url("../../images/user/main/planet01.svg");
  width: 344px;
  height: 505px;
}
.planet-img.img02 {
  top: 30%;
  right: 18%;
  background-image: url("../../images/user/main/planet02.svg");
  width: 238px;
  height: 207px;
}
.star-img {
  position: absolute;
  background: no-repeat 50% / cover;
  z-index: 4;
}
.star-img.img01 {
  bottom: 0;
  left: -2%;
  background-image: url("../../images/user/main/star-left.svg");
  width: 496px;
  height: 515px;
}
.star-img.img02 {
  top: 10%;
  right: 9%;
  background-image: url("../../images/user/main/star-right.svg");
  width: 313px;
  height: 462px;
}
.banner-bg.people-img {
  top: auto;
  bottom: 0;
  height: 0;
  padding-bottom: 23.54%;
  z-index: 4;
  background-image: url("../../images/user/main/people.svg");
}

.move-img {
  position: absolute;
  bottom: -4%;
  right: 6%;
  z-index: 1;
}

.nomove-img {
  background-image: url(../../images/user/main/nomove-img.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  width: 354px;
  height: 239px;
  position: absolute;
  left: 7%;
  bottom: 20%;
}
.wave-img {
  background-image: url(../../images/user/main/wave.svg);
  width: 7700px;
  height: 60px;
  position: absolute;
  bottom: -2px;
  transform-origin: center bottom;
  animation: wave 35s linear infinite;
}
.wave-img2 {
  background-image: url(../../images/user/main/wave.svg);
  width: 7700px;
  height: 60px;
  position: absolute;
  bottom: -3px;
  transform-origin: center bottom;
  animation: wave2 35s linear infinite;
}
@keyframes wave {
  0% {
    transform: translate3D(0, 0, 0) scaleY(0.8);
  }
  50% {
    transform: translate3D(-25%, 0, 0) scaleY(0.7);
  }
  100% {
    transform: translate3D(-50%, 0, 0) scaleY(0.8);
  }
}
@keyframes wave2 {
  0% {
    transform: translate3D(0, 0, 0) scaleY(1);
  }
  50% {
    transform: translate3D(-25%, 0, 0) scaleY(1.2);
  }
  100% {
    transform: translate3D(-50%, 0, 0) scaleY(1);
  }
}

.main-slide-list2-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $margin-L;
}
.main-slide-list2-title .festival-title {
  font-size: 25px;
  font-family: "RecipekoreaM";
}
// 탭
.festival-month {
  display: flex;
  justify-content: center;
  margin: 25px 0 40px;
}
.festival-month a {
  width: 100%;
  max-width: 100px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #acacac;
  border: 1px solid #e4e4e4;
}
.festival-month a:first-child {
  margin-right: 15px;
}
.festival-month a:last-child.active {
  background: yellow !important;
  color: #ee2b2b;
}
.festival-month .active {
  background: #e32c39;
  color: #fff;
  font-weight: 600;
  border: 0;
}

/* main-banner slide */
.main-slide-list2 {
  overflow: hidden;
  margin: 0 auto;
}
.main-slide-list2 .swiper {
  position: relative;
}
.swiper-button-next2 {
  background-image: url(../../images/user/main/ico-next.svg);
  background-repeat: no-repeat;
  width: 46px;
  height: 46px;
  cursor: pointer;
  z-index: 20;
}
.swiper-button-prev2 {
  background-image: url(../../images/user/main/ico-prev.svg);
  background-repeat: no-repeat;
  width: 46px;
  height: 46px;
  cursor: pointer;
  z-index: 20;
}
.swiper-btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;
}
.swiper-btn-wrap .swiper-pagination2 {
  display: flex;
  justify-content: center;
  max-width: 90px;
  align-items: center;
  font-size: 20px;
  letter-spacing: 5px;
}
.swiper-btn-wrap .swiper-pagination2 span {
  font-weight: 600;
}
.swiper-btn-wrap .swiper-pagination2 .swiper-pagination-total {
  color: #acacac;
}
#main-swiper .swiper-slide {
  opacity: 0.5;
  display: flex;
  justify-content: center;
}
#main-swiper .swiper-wrapper .swiper-slide.swiper-slide-active {
  opacity: 1;
  display: flex;
  justify-content: center;
}
#main-swiper .slide-wrap {
  width: 100%;
  height: 560px;
  max-width: 700px;
  display: flex;
}
.slide-wrap .left {
  width: 62.6%;
  height: 100%;
  position: relative;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.slide-wrap .left .left-bg {
  content: "";
  opacity: 0.1;
  width: 100%;
  height: 100%;
  display: inline-block;
  top: 0;
  left: 0;
  position: absolute;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  z-index: -1;
}
.slide-wrap .left svg:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
}
.slide-wrap .left svg:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
}
.slide-wrap .left svg:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: 0;
}
.slide-wrap .left svg:nth-child(3) {
  position: absolute;
  top: 0;
  right: 0;
}
.slide-wrap .left .slide-info-wrap {
  width: 100%;
  height: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
.slide-wrap .left .slide-info-title {
  font-size: 30px;
  font-weight: 700;
}
.slide-wrap .left .slide-info-title p {
  font-size: 24px;
  font-weight: 500;
  margin-top: 15px;
}
.slide-wrap .left .slide-info-cont ul li {
  font-size: 20px;
}
.slide-wrap .left .slide-info-cont ul li span {
  font-weight: 700;
}
.slide-wrap .left .slide-info-cont ul + ul {
  margin-top: 30px;
}
.slide-wrap .left .slide-info-cont ul li + li {
  margin-top: 14px;
}

.slide-wrap .right {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.slide-wrap .right .right-thumb {
  width: 403px;
  height: 560px;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.slide-wrap .right .player {
  position: absolute;
  top: 0;
  max-width: 403px;
  height: 100%;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  opacity: 0;
}
.slide-wrap .right .right-thumb:hover .youtube-iframe {
  opacity: 1;
}
.yt-player {
  width: 403px;
}

/* main-slide */
.main-slide {
  height: 100vh;
}
.main-slide-list {
  background: no-repeat 50% / cover;
}
.main-slide-list:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: no-repeat 50% / cover;
  background-image: url(../../images/user/main/main-bg.png);
  background-color: rgba(0, 0, 0, 0.6);
}
.main-slide_cont {
  align-items: center;
  position: relative;
  z-index: 1;
  height: 100%;
}
.main-slide_cont .inner {
  max-width: calc(1680px + 32px);
  position: relative;
  height: 100%;
}
.main-slide_tit {
  padding-bottom: 80px;
  position: relative;
  z-index: 11;
}
.main-slide .main-slide_img {
  width: 650px;
}
.main-slide .main-slide_img img {
  width: 100%;
}
.main-slide .main-slide_txt {
  margin-top: 20px;
}
.main-slide .main-slide_txt > p {
  font-size: 40px;
  font-weight: 300;
  color: #fff;
}
.main-slide .main-slide_txt > p > span:nth-child(1) {
  padding-right: 30px;
  position: relative;
}
.main-slide .main-slide_txt > p > span:nth-child(1):after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 0.5px;
  height: 30px;
  background: #fff;
}
.main-slide .main-slide_txt > p > span:nth-child(2) {
  padding-left: 30px;
}
.main-slide .main-slide_control {
  position: absolute;
  z-index: 1;
  right: 50%;
  bottom: 50px;
  margin-right: -835px;
}
.main-slide .main-slide_control .btn {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  min-width: 25px;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  transition: 0.3s;
}
.main-slide .main-slide_control .btn:hover,
.main-slide .main-slide_control .btn:focus,
.main-slide .main-slide_control .btn:active {
  background-color: rgba(255, 255, 255, 0.5);
}
.main-slide .main-slide_control .btn > i {
  width: 11px;
  height: 11px;
}
.main-slide .main-slide_control .btn .ico_slide-prev {
  background-image: url(../../images/cmn/ico_slide-prev.svg);
  margin-left: 5px;
}
.main-slide .main-slide_control .btn .ico_slide-next {
  background-image: url(../../images/cmn/ico_slide-next.svg);
  margin-right: 3px;
}
.main-slide .main-slide_control .btn .ico_slide-play {
  background-image: url(../../images/cmn/ico_slide-play.svg);
  width: 9px;
}
.main-slide .main-slide_control .btn.pause .ico_slide-play {
  background-image: url(../../images/cmn/ico_slide-pause.svg);
  width: 7px;
  height: 10px;
}
.main-slide .main-slide_name {
  position: absolute;
  right: 140px;
  bottom: 50px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
}
.main-slide .search {
  z-index: 1;
  max-width: calc(1680px + 40px);
  width: 100%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translateY(340px);
  margin-left: -840px;
}
.main-slide .search .search-fix input {
  background-color: rgba(255, 255, 255, 0.49);
  border-radius: 30px;
  font-size: 16px;
  padding: 0 25px;
  color: #fff;
}
.main-slide .search .search-fix input::placeholder {
  color: #fff;
}
.main-slide_link {
  position: relative;
  width: 200px;
  height: 200px;
  margin-top: 280px;
}
.main-slide_link .main-slide_arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-slide_cont .inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@keyframes roundTxt {
  to {
    transform: rotate(360deg);
  }
}
.main-slide_roundTxt {
  animation: roundTxt 18s infinite linear;
}

/* main-contents */
.main-contents {
  margin-top: 130px;
  position: relative;
}

.main-contents:after {
  content: "";
  color: #eb6252;
  display: block;
  width: 176px;
  height: 145px;
  position: absolute;
  top: -42.5px;
  left: 13%;
  background: no-repeat 50% / cover;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.main-tit h2 {
  font-size: 40px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}
.main-tit h2:before {
  content: "";
  width: 68px;
  height: 65px;
  background: no-repeat 50% / cover;
}
.main-tit h2 .main-tit_en {
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  margin-left: 10px;
}
.main-banner-ft > ul li {
  width: 940px;
  height: 292px;
}
.main-banner-ft > ul li a {
  display: flex;
  width: 100%;
  height: 100%;
}
.main-banner-ft > ul li a > div {
  width: 50%;
  background: no-repeat 50% / cover;
}
.main-banner-ft > ul li .main-banner-ft_txt {
  padding: 40px 50px;
}
.main-banner-ft .main-banner-ft_info {
  font-size: 40px;
  font-weight: 700;
  position: relative;
  text-align: left;
}
.main-banner-ft .main-banner-ft_info p {
  word-break: keep-all;
  white-space: pre-line;
}
.main-banner-ft .main-banner-ft_info:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 62px;
  height: 43px;
  background: no-repeat 50% / cover;
  background-image: url(../../images/user/main/ico_main-ft_arrow.svg);
}
.top-btn.main.active {
  display: flex;
}
.slide-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* main-contents_notice*/
.main-contents_notice {
  padding-top: 20px;
  padding-bottom: 245px;
  position: relative;
}
.notice-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-slide-list2-title.v2 {
  flex-direction: unset;
  align-items: self-end;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: $margin-L;
  position: relative;
}
.ico_more {
  background-image: url(../../images/user/main/ico_more.svg);
  display: block;
  width: 55px;
  height: 55px;
  position: absolute;
  top: 50%;
  right: 0;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  100% {
    transform: rotate(-360deg);
  }
}

.notice-wrap {
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 30px;
  border-top: 1px solid #1a1311;
  /*padding-top: 10px;*/
}
.notice-wrap ul li {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid #bababa;
  border-style: dotted;
}
.notice-wrap ul li:hover {
  border-left: 2px solid #000;
  margin-left: -2px;
  background-color: #fff9f2;
}
.notice-title {
  font-size: 18px;
  border-left: 3px solid #bababa;
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-width: 70%;
}
.notice-title:hover {
  border-left: 3px solid #eb6252;
  text-decoration: underline;
}
.notice-wrap ul li .info-wrap {
  display: flex;
}
.notice-wrap ul li .info-wrap .line {
  border-left: 2px solid #bababa;
  height: 16px;
  margin-top: 2px;
  margin-left: 15px;
  margin-right: 15px;
}
.notice-wrap ul li .info-wrap .wr {
  color: #757575;
  white-space: pre;
}
.notice-wrap ul li .info-wrap .wr-date {
  color: #757575;
  min-width: 84px;
}

.festi-more {
  width: 115px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  background-color: #000000;
  color: #fff;
  border-radius: 25px;
  margin-top: 25px;
}

@media screen and (max-width: 1700px) {
  .main-slide .search {
    margin-left: calc(-50% + 20px);
    width: 650px;
  }
  .main-slide .main-slide_control {
    margin-right: calc(-50% + 20px);
  }
  .main-slide .main-slide_name {
    right: 135px;
  }
}

@media screen and (max-width: 1200px) {
  .main-slide_img {
    width: 587px;
  }
  .main-slide_cont {
    padding-bottom: 245px;
  }
  .main-slide_cont .inner {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 120px;
    justify-content: flex-start;
  }
  .main-slide_tit {
    padding-bottom: 50px;
  }
  .main-slide .main-slide_txt {
    margin-top: 10px;
  }
  .main-slide .main-slide_txt > p {
    font-size: 28px;
  }
  .main-slide .main-slide_txt > p > span:nth-child(1) {
    padding-right: 16px;
  }
  .main-slide .main-slide_txt > p > span:nth-child(2) {
    padding-left: 16px;
  }
  .main-slide .main-slide_txt > p > span:nth-child(1):after {
    height: 20px;
  }
  .main-slide .main-slide_name {
    display: none;
  }
  .main-slide .main-slide_control {
    display: none;
  }
  .main-slide_link {
    margin-top: 0;
    width: 150px;
    height: 150px;
  }
  .main-slide_roundTxt img {
    width: 100%;
  }
  .main-slide_arrow {
    width: 47px;
  }
  .main-slide_arrow img {
    width: 100%;
  }
  .main-slide .search {
    max-width: 100%;
    max-width: calc(1680px + 40px);
    left: 0;
    bottom: 30px;
    transform: none;
    margin-left: 0;
    padding: 0 20px;
    width: 100%;
  }
  .main-slide .search .input-wrap {
    width: 100%;
  }
  .main-slide .search .search-fix input {
    font-size: 14px;
  }
  .main-tit h2 {
    font-size: 26px;
  }
  .main-tit h2:before {
    width: 44px;
    height: 43px;
    margin-right: 3px;
  }
  .main-tit h2 .main-tit_en {
    font-size: 14px;
  }
  .main-banner-ft > ul li {
    width: 640px;
    height: 198px;
  }
  .main-banner-ft .main-banner-ft_info {
    font-size: 26px;
  }
  .main-banner-ft > ul li .main-banner-ft_txt {
    padding: 28px 34px;
  }
  .main-banner-ft .main-banner-ft_info:after {
    width: 42px;
    height: 30px;
  }
  .main-slide-list2 .swiper {
    padding: 0 40px;
  }
  #main-swiper .swiper-slide {
    opacity: 0;
  }

  .main-banner-bg {
    min-height: 523px;
  }
  .banner-bg.main-bg {
    background-image: url("../../images/user/main/main-banner_bg3_pad.png");
  }
  .main-txt {
    width: 336px;
    height: 205px;
  }
  .canvas-bg::after {
    background-image: url("../../images/user/main/canvas-bt_pad.png");
    height: 90px;
  }
  .planet-img.img01 {
    background-image: url("../../images/user/main/planet01_pad.svg");
    width: 133px;
    height: 303px;
  }
  .planet-img.img02 {
    background-image: url("../../images/user/main/planet02_pad.svg");
    width: 86px;
    height: 158px;
    right: 6%;
  }
  .star-img.img01 {
    background-image: url("../../images/user/main/star-left_pad.svg");
    width: 284px;
    height: 294px;
  }
  .star-img.img02 {
    background-image: url("../../images/user/main/star-right_pad.svg");
    width: 210px;
    height: 310px;
    top: 19%;
    right: 0;
  }
  .banner-bg.people-img {
    display: none;
  }
  .main-contents_notice {
    padding-bottom: 160px;
  }
  .main-contents_notice::after {
    height: 160px;
  }
  #ENGfantasia .slide-wrap .left .slide-info-title p {
    -webkit-box-orient: vertical;
    white-space: normal;
    text-align: left;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }
}

@media screen and (max-width: 768px) {
  .festi-more {
    font-size: 14px;
    height: 35px;
    width: 90px;
    margin-top: 20px;
  }
  .main-slide {
    /* height: 90vh; */
    height: calc(var(--vh, 1vh) * 100);
  }
  .main-slide .main-slide_img {
    max-width: 322px;
    width: 100%;
  }
  .main-slide_cont .inner {
    padding-top: 100px;
  }
  .main-slide .main-slide_txt > p {
    font-size: 18px;
  }
  .main-slide_link {
    width: 125px;
    height: 125px;
  }
  .main-slide_link .main-slide_arrow {
    width: 39px;
  }
  /*.main-contents{padding-top: 120px;}*/
  .main-tit h2 {
    font-size: 20px;
  }
  .main-tit h2:before {
    width: 33px;
    height: 32px;
  }
  .main-tit h2 .main-tit_en {
    font-size: 10px;
  }
  .main-banner-ft > ul li {
    width: 400px;
    height: 128px;
  }
  .main-banner-ft .main-banner-ft_info {
    font-size: 16px;
  }
  .main-banner-ft > ul li .main-banner-ft_txt {
    padding: 18px 22px;
  }
  .main-banner-ft .main-banner-ft_info:after {
    width: 27px;
    height: 18px;
  }

  .notice-wrap ul li {
    padding: 30px 0;
  }
  .main-contents_notice {
    padding-bottom: 89px;
  }
}

@media screen and (min-width: 1921px) {
  .main-contents {
    position: relative;
  }
  .main-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .main-banner-bg {
    min-height: 938px;
  }
  .canvas-bg::after {
    height: 75px;
  }
}

/* 팝업레이어{*/
.pop {
  z-index: 1000;
  position: relative;
  margin: 0 auto;
  height: 0;
}
.pop h2 {
  position: absolute;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.pop_wrap {
  position: absolute !important;
  border: 1px solid #bababa;
  background: #fff;
}
.pop_cont {
  /* width: 450px; */
  min-width: 165px;
  /* min-height: 300px; */
}
.pop_cont img {
  width: 100%;
  max-width: 100%;
}
.pop_ft {
  padding: 0;
  background: #ffffff;
  color: #3b3b3b;
  text-align: left;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  padding: 9px 13px;
  border-top: 0;
  user-select: none;
}
.pop_ft:after {
  display: block;
  visibility: hidden;
  clear: both;
  content: "";
}
.pop_ft label.sfchkra > span {
  color: inherit;
}
.pop_ft label.sfchkra > input:checked + i:after {
  background-color: #000000;
  border-color: #ffffff;
  border-width: 2px;
}
.pop_ft button {
  padding: 2px;
  border: 0;
  color: #3b3b3b;
}
.pop_ft .pop_cls_btn {
  background: #ffffff;
  position: absolute;
  top: 7px;
  right: 12px;
  font-size: 14px;
}
.pop_ft .pop_cls_btn:before {
  content: "[";
}
.pop_ft .pop_cls_btn:after {
  content: "]";
}
@media screen and (max-width: 768px) {
  .pop {
    position: fixed;
    width: 100%;
  }
  .pop_wrap {
    right: 0 !important;
    top: 0 !important;
    left: auto !important;
    position: static !important;
  }
  .pop_cont {
    width: 100% !important;
  }
  .pop_cont img {
    width: 100% !important;
    height: auto !important;
  }
}

/* }팝업레이어*/

@media screen and (max-width: 1250px) {
  .sub-star1 {
    width: 94px;
    height: 94px;
    left: 4%;
  }
  .sub-star2 {
    width: 70px;
    height: 70px;
    right: 15%;
  }
  .main-star {
    width: 120px;
    height: 120px;
    right: 4%;
  }
  .nomove-img {
    width: 223px;
    height: 150px;
    left: -4%;
  }
  .move-img {
    right: 1%;
  }
  .move-img .lottie {
    width: 257px !important;
    height: 236px !important;
  }
  .notice-wrap {
    margin-left: 40px;
    margin-right: 40px;
  }
  .notice-wrap ul li {
    margin: 0 auto;
  }
  .ico_more {
    margin-right: 25px;
  }
}

@media screen and (max-width: 768px) {
  .main-banner-bg {
    min-height: 460px;
  }
  .sub-star1 {
    width: 94px;
    height: 94px;
    left: 4%;
  }
  .sub-star2 {
    width: 70px;
    height: 70px;
    right: 15%;
  }
  .main-star {
    width: 120px;
    height: 120px;
    right: 4%;
  }
  .nomove-img {
    width: 223px;
    height: 150px;
    left: -6%;
  }
  .move-img {
    right: 1%;
  }
  .move-img .lottie {
    width: 257px !important;
    height: 236px !important;
  }
  /*main-banner*/
  #main-swiper .slide-wrap {
    height: 380px;
  }
  .main-slide-list2-title .festival-title {
    font-size: 32px;
  }
  .slide-wrap .left .slide-info-title {
    font-size: 26px;
  }
  .slide-wrap .left .slide-info-title p {
    font-size: 18px;
  }
  .slide-wrap .left .slide-info-cont ul li {
    font-size: 16px;
  }
  .slide-wrap .left svg:nth-child(1) {
    width: 30px;
    height: 30px;
  }
  .slide-wrap .left svg:nth-child(2) {
    width: 30px;
    height: 30px;
  }
  .slide-wrap .left svg:nth-child(3) {
    width: 195px;
    height: 195px;
  }
  .slide-wrap .left .slide-info-wrap {
    max-height: 380px;
  }
  .slide-wrap .left {
    max-height: 380px;
  }
  .slide-wrap .left .left-bg {
    max-height: 380px;
  }
  .slide-wrap .right .right-thumb {
    width: 274px;
    height: 380px;
    background-size: cover;
  }
  .yt-player {
    width: 274px;
    max-height: 380px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}

@media screen and (max-width: 670px) {
  a.festi-more {
    font-size: 12px;
    height: 30px;
    width: 80px;
  }
  /*main-banner*/
  .main-slide-list2 .swiper {
    padding: 0 20px;
  }
  #main-swiper .slide-wrap {
    flex-direction: column;
    height: auto;
  }
  .slide-wrap .left {
    width: 100%;
    height: 300px;
  }
  .slide-wrap .left .left-bg {
    height: 700px;
    max-height: 680px;
    border-radius: 20px;
  }
  .slide-wrap .left .slide-info-wrap {
    padding: 35px 15px;
  }
  .slide-wrap .left svg:nth-child(1) {
    width: 24px;
    height: 24px;
  }
  .slide-wrap .left svg:nth-child(2) {
    display: none;
  }
  .slide-wrap .left svg:nth-child(3) {
    width: 128px;
    height: 128px;
  }
  .slide-wrap .left .slide-info-title {
    font-size: 18px;
  }
  .slide-wrap .left .slide-info-title p {
    font-size: 14px;
  }
  .slide-wrap .left .slide-info-cont ul li {
    font-size: 14px;
  }
  .slide-wrap .left .slide-info-cont ul li span {
    font-size: 14px;
  }
  .slide-wrap .left .slide-info-cont {
    margin-top: 30px;
  }
  .slide-wrap .right {
    padding: 0 20px;
  }
  .slide-wrap .right .right-thumb {
    margin: 0 auto;
    height: 100%;
    min-height: 380px;
    background-size: cover;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .slide-wrap .right .player {
    top: unset;
    bottom: 0;
    height: 380px;
  }
  .yt-player {
    display: none;
  }
  .swiper-btn-wrap {
    margin-top: 70px;
  }

  /*footer*/
  .ft-top__menu {
    justify-content: center;
  }
  .ft-bottom .ft-bottom__info-wrap {
    flex-direction: column;
    align-items: center;
  }
  .ft-bottom .inner.footer {
    flex-direction: column;
  }
  .ft-bottom__info {
    margin-left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .ft-bottom .ft-bottom__info address p {
    text-align: center;
  }
  .ft-bottom .inner.footer {
    align-items: center;
    padding-bottom: 20px;
  }
  .ft-bottom .ft-bottom__info .ft-copyright {
    flex-direction: column;
    line-height: 1.8;
  }
  .ft-bottom {
    padding-bottom: 0;
  }
  .ft-bottom__site {
    margin-top: 20px;
  }
}

@media screen and (max-width: 500px) {
  .main-banner-bg {
    min-height: 460px;
  }
  -star1 {
    width: 54px;
    height: 54px;
  }
  .sub-star2 {
    display: none;
  }
  .main-star {
    width: 92px;
    height: 92px;
  }
  .nomove-img {
    width: 120px;
    height: 81px;
  }
  .move-img {
    bottom: 0;
  }
  .move-img .lottie {
    width: 141px !important;
    height: 140px !important;
  }

  /*main-banner*/
  .main-slide-list2-title .festival-title {
    font-size: 26px;
  }
  .festival-month a {
    max-width: 90px;
    height: 45px;
    font-size: 18px;
  }
  /*notice*/
  .notice-wrap {
    margin-left: 20px;
    margin-right: 20px;
  }
  .ico_more {
    margin-right: 5px;
  }
  .notice-wrap ul li {
    flex-direction: column;
  }
  .notice-title {
    max-width: 100%;
  }
  .notice-wrap ul li .info-wrap {
    margin-top: 10px;
    padding: 0 12px;
  }
}

.festival-month a {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.festival-month a.active {
  background-color: #ee2b2b;
  color: white;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 100px);
  @media (max-width: 980px) {
    left: var(--swiper-navigation-sides-offset, 10px);
  }
  @media (max-width: 670px) {
    display: none;
  }
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 100px);
  @media (max-width: 980px) {
    right: var(--swiper-navigation-sides-offset, 10px);
  }
  @media (max-width: 670px) {
    display: none;
  }
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: #ee2b2b;
  font-size: 25px;
}

.swiper-pagination-bullet-active {
  background: #ee2b2b;
}

.right-thumb {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}
::v-deep(.swiper-button-prev){
  color: #ee2b2b;
  left: var(--swiper-navigation-sides-offset, 390px);
  @media (max-width: 1530px) {
    left: var(--swiper-navigation-sides-offset, 150px) !important;
  }
  @media (max-width: 1190px) {
    left: var(--swiper-navigation-sides-offset, 50px) !important;
  }
  @media (max-width: 870px) {
    display: none;
  }
}
::v-deep(.swiper-button-prev::after){
  font-size: 25px;
  
}
::v-deep(.swiper-button-next){
  color: #ee2b2b;
  right: var(--swiper-navigation-sides-offset, 390px);
  @media (max-width: 1530px) {
    right: var(--swiper-navigation-sides-offset, 150px);
  }
  @media (max-width: 1190px) {
    right: var(--swiper-navigation-sides-offset, 50px);
  }
  @media (max-width: 870px) {
    display: none !important;
  }
}
</style>
