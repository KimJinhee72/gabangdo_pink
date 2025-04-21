<template>
  <div class="macontent3_wrap">
    <div class="inner">
      <!-- 1. 여행도 -->
      <div class="macontent3_gp ma3trip">
        <div class="ma3bg">
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_1.png"
              alt="여행도" />
          </div>
          <div class="ma3txt">
            <span>가방도와 함께라면~</span>
            <h3>가벼운 여행도  </h3><strong>짐 어느 곳에서든 맡기기</strong>
            
          </div>
        </div>
      </div>
      <!-- 2. 배달도 -->
      <div class="macontent3_gp madily">
        <div class="ma3bg">
          <div class="ma3txt">
            <span>가방도와 함께라면~</span>
            <h3>보관도 &nbsp;배달도 </h3>           <span>안전 보관   , 책임 배송 </span>
          </div>
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_2.png"
              alt="배달도" />
          </div>
        </div>
      </div>
      <!-- 3. 배송조회도! -->
      <div class="macontent3_gp ma3shearch">
        <div class="ma3bg">
          <div class="ma3img">
            <img
              src="/public/images/gh/ma_content3/character_3.png"
              alt="배송조회도!" />
          </div>
          <div class="ma3txt">
            <span>가방도와 함께라면~</span>
            <h3>가방조회도 </h3>            <span>위치  실시간 확인 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
/* 전체영역 */
.macontent3_wrap {
  width: 100%;
  max-width: 40%;
  position: relative;
  margin: auto;
  line-height: 25px;
}
/* 중앙 원 */
.macontent3_wrap> .inner::before {
  display: none;
  content: "";
  position: absolute;
  top: 60%;
  left: 50%;
  width: 800px; /* 원 크기 */
  height: 800px;
  background-color: rgba(237, 237, 237, 1); /* 반투명 흰색 */
  border-radius: 50%;
  transform: translate(-50%, -50%); /* 정확한 중앙 정렬 */
  z-index: -2; /* 콘텐츠보다 뒤에 배치 */
}
/* 가운데 정렬 */
.macontent3_wrap .inner {
  position: relative;
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 개별 박스 */
.macontent3_gp {
  display: flex;
  width: 200%;
  max-width: 1050px;
  margin: 20px 0;
}

/* 기본적으로 왼쪽 정렬 */
.macontent3_gp .ma3bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 120px;
  background-color: #0066b3;
  border-radius: 90px;
  margin: 20px;
}

/* 짝수 번째 박스는 오른쪽 정렬 */
.macontent3_gp:nth-child(even) {
  justify-content: flex-end;  
}

/* 홀수 번째 박스는 왼쪽 정렬 */
.macontent3_gp:nth-child(odd) {
  justify-content: flex-start;
}
/* txt */
.ma3txt{ 
  font-size: 19px;
  margin-right: 30px;
  span, strong{
    font-size: 14px;
    color: #fff 
  }
  h3{
    width: 100%;
    font-size: 22px;
    line-height: 30px;
    color: #fff !important;     
  }
 
}
.madily{
  .ma3txt{
    margin-left: 40px;    
      
  }
}

</style>
