<template>
  <div class="macontent2_wrap">
    <div class="inner">
      <div class="macontent2_icon">
        <!-- 1. 가방도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <router-link to="/bangbeob1"><img
              src="/public/images/gh/ma_content2/bangbeobdo_icon.png"
              alt="방법도 아이콘"
            /></router-link>
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>운송 보관<br />어디든지</h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>가방도</h4>
          </div>
        </div>
        <!-- 2. 예약도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <router-link to="/yeyak"><img
              src="/public/images/gh/ma_content2/reservation_icon.png"
              alt="예약도 아이콘"
            /></router-link>
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                가방맡기기
                <br />지금 예약
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>예약도</h4>
          </div>
        </div>
        <!-- 3. 요금도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <router-link to="/yogeum"><img src="/public/images/gh/ma_content2/cash_icon.png" alt="요금도 아이콘" /></router-link>
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                서비스 요금<br> 결제 방법<br />
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>요금도</h4>
          </div>
        </div>
        <!-- 4. 소통도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <router-link to="/sotong"><img
              src="/public/images/gh/ma_content2/comunity_icon.png"
              alt="소통도 아이콘"
            /></router-link>
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>
                공지사항<br> 이용후기
              </h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>소통도</h4>
          </div>
        </div>
        <!-- 5. 여행도 -->
        <div class="macontent2_iconimg">
          <a href="#">
            <!-- 아이콘 이미지 -->
            <router-link to="/yeohaeng"><img src="/public/images/gh/ma_content2/trip_icon.png" alt="여행도 아이콘" /></router-link>
            <!-- hover시 보일 텍스트 -->
            <div class="macontent2_icon_hover">
              <h5>대구 축제<br/>시티투어</h5>
            </div>
          </a>
          <!-- 항상 보이는 텍스트 -->
          <div class="macontent2_icontxt">
            <h4>여행도</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@use "/src/assets/Variables" as *;

</style>
