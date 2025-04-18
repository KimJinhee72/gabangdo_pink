<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>예약조회</h1>
      </div>
    </div>
    <div class="st_lookup">
      <input type="text" placeholder="이름" />
      <input type="tel" placeholder="연락처" />
      <input type="number" placeholder="예약번호" />
    </div>
    <router-link to="/yeyaklookup2"><button>조회하기</button></router-link>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 90%;
  max-width: 700px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: $font-family;
}

.yy_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  padding-bottom: 10px;
  .title_txt1 h1 {
    font-size: 35px;
  }
}
.st_lookup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
    border-radius: 20px;
    padding: 30px auto;
    margin: 30px auto;
}

input {
  width: 90%;
  max-width: 300px;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
}
button {
  padding: $padding-sss $margin-ss;
  margin: $margin-ss;
  font-size: $basic-font-size-L;
  font-family: $font-family;
  color: #fff;
  background-color: $main-color;
  border: none;
  border-radius: $border-radius-sm;
  cursor: pointer;
}
button:hover {
  background-color: $hover;
}
</style>
