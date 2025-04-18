<template>
  <div class="bb_404Container">
    <!-- 404글씨 -->
    <div class="bb_404Letter">
      <h1>4</h1>
      <div class="bb_errorPic">
        <img
          src="/public/images/yr/loginpage/404Character.png"
          alt="용달눈물" />
      </div>
      <h1>4</h1>
    </div>
    <!-- 디테일글 -->
    <div class="bb_detailLetter">
      <div class="bb_blueLetter">
        <p>죄송합니다</p>
        <p>현재 찾을 수 없는 페이지를 요청 하셨습니다.</p>
      </div>
      <div class="bb_grayLetter">
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
        <p>
          궁금한 점이 있으시면 언제든 고객센터를 통해 문의해 주시기 바랍니다.
        </p>
      </div>
    </div>
    <!-- 버튼이동 -->
    <div class="bb_buttonPage">
      <button @click="toMain">메인으로</button>
      <button @click="toPrevious">이전 페이지</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toMain = () => {
  router.push("/");
};
const toPrevious = () => {
router.go(-1);
};
</script>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;
.bb_404Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .bb_404Letter {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 1%;
    h1 {
      text-align: center;
      flex: 1.3;
      font-size: 200px;
      font-weight: bold;
    }
    .bb_errorPic {
      flex: 1;
      img {
        width: 100%;
      }
    }
  }
  .bb_detailLetter {
    text-align: center;
    .bb_blueLetter {
      font-size: 20px;
      color: $main-color;
      font-weight: bold;
      margin-bottom: 30px;
      p {
        margin-bottom: 5px;
      }
    }
    .bb_grayLetter {
      font-size: 16px;
      color: rgb(150, 150, 150);
      margin-bottom: 30px;
      p {
        margin-bottom: 3px;
      }
    }
  }
  .bb_buttonPage {
    display: flex;
    width: 20%;
    gap: 7%;
    margin-bottom: 95px;
    button {
      width: 100%;
      border: 1.5px solid rgb(150, 150, 150);
      color: rgb(150, 150, 150);
      background-color: #fff;
      padding: 10px 12px;
      cursor: pointer;
    }
  }
}
</style>
