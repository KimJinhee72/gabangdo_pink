<template>
  <!-- 탭아래 이미지영역 -->
  <div class="inner">
    <transition name="fade">
      <!-- 탭1:축제안내  -->
      <div v-if="currentTab === 'guide1'" key="guide1">
        <Yh_Festival/>
      </div>
      <!-- 탭2:시티투어버스 -->
      <div v-else key="guide2">
        <!-- 순환버스 -->
        <div class="yh_roundBus">
          <!-- 순환버스 제목 -->
          <div class="bb_title1">
            <div class="title_txt1">
              <h1>순환버스</h1>
            </div>
          </div>
          <!-- 순환버스 이미지 -->
          <div class="yh_content-box">
            <a href="#">
              <img v-if="imgSrc" :src="imgSrc" alt="순환버스지도" />
            </a>
          </div>
          <!-- 테마버스 제목 -->
          <div class="bb_title1">
            <div class="title_txt1">
              <h1>테마버스</h1>
            </div>
          </div>
          <!-- 테마버스 이미지 -->
          <div class="yh_themaBus">
            <YeohaengSwiper />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import Yh_Festival from "./Yh_Festival.vue";
import YeohaengSwiper from "./YeohaengSwiper.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";



const currentTab = ref("guide2");
// 순환버스 이미지 크기
const imgSrc = ref(null); // 이미지 경로 바인딩용
const updateImage = () => {
  const width = window.innerWidth;
  if (width <= 390) {
    imgSrc.value = "/images/geen/1/cititour-round2.jpg";
  } else if (width <= 500) {
    imgSrc.value = "/images/geen/1/cititour-round1.jpg";
  } else if (width <= 768) {
    imgSrc.value = "/images/geen/1/cititour-round0.jpg";
  } else {
    imgSrc.value = "/images/geen/1/cititour-round.jpg";
  }
};

onMounted(() => {
  updateImage();
  window.addEventListener("resize", updateImage);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateImage);
});
</script>

<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
// 전체
.yh_themaBus{

  margin: 0 auto;
  margin-bottom: 50px;
}
// 제목
.bb_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  padding-bottom: 10px;
  margin-top: 100px; 
  .title_txt1 h1 {
    font-size: 35px;
  }
}
.yh_tab-container {
  width: 100%;
  height: 100%;
}

.inner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.yh_tab-container .inner {
  padding: 20px;
  @media (max-width: 1170px) {
    padding: 40px 0 0;
  }
}
.yh_tab-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
}

.yh_tab {
  flex: 1;
  text-align: center;
  padding: 18px 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  background-color: #e0e0e0;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
  user-select: none;

  &:hover {
    background-color: #3399ff;
    color: white;
  }

  &.active {
    background-color: #007bff;
    color: white;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 14px 0;
    font-size: 16px;
  }

  @media (max-width: 376px) {
    padding: 12px 0;
    font-size: 15px;
  }
}

.iframe-view {
  width: 100%;
  height: 900px;
  border: none;
  border-radius: 8px;

  @media (max-width: 600px) {
    height: 600px;
  }

  @media (max-width: 376px) {
    height: 500px;
  }
}

.yh_content-box {
  width: 100%;
  max-width: 700px;
  margin: 40px auto 0;
  border-radius: 12px;
}

.yh_content-box img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block; /* 불필요한 공간 제거 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
