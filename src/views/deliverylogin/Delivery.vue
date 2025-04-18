<template>
    <div class="bb_tracking-container">
      <div class="bb_title1">
          <!-- 제목 -->
          <div class="bb_title_txt1">
            <h1>짐보관 이용절차</h1>
          </div>
        </div>
  
  <!-- 상단 프로그레스 -->
  <div class="bb_progress-bar">
    <div class="bb_step bb_completed">
      <div class="bb_circle">✓</div>
      <p>예약 완료</p>
    </div>
    <div class="bb_line bb_completed"></div>
  
    <div class="bb_step bb_completed">
      <div class="bb_circle">✓</div>
      <p>직원 만남</p>
    </div>
    <div class="bb_line bb_completed"></div>
  
    <div class="bb_step bb_current">
      <div class="bb_circle">✓</div>
      <p>짐 전달 완료</p>
    </div>
    <div class="bb_line"></div>
  
    <div class="bb_step">
      <div class="bb_circle"></div>
      <p>수령 확인</p>
    </div>
  </div>
  
  <!-- 하단 시간 로그 -->
  <div class="bb_log-list">
    <div class="bb_log-item">
      <div class="bb_dot bb_blue"></div>
      <span>예약 완료</span>
      <span class="bb_time">2025.03.28 19:00</span>
    </div>
    <div class="bb_log-item">
      <div class="bb_dot bb_blue"></div>
      <span>직원 만남</span>
      <span class="bb_time">2025.03.29 09:25</span>
    </div>
    <div class="bb_log-item">
      <div class="bb_dot bb_darkblue"></div>
      <span>짐 전달 완료</span>
      <span class="bb_time">2025.03.29 09:25</span>
    </div>
    <div class="bb_log-item">
      <div class="bb_dot bb_gray"></div>
      <span>수령 확인</span>
    </div>
  </div>
  
  
  </div>
  <div class="bb_allBg">
  <div class="bb_kakao-banner">
  <p>카카오톡으로 조회하고 싶다면?</p>
  <button class="bb_kakao-btn">
    <!-- <img src="kakao-icon.png" alt="카카오 아이콘" /> -->
    <span>가방도</span>
  </button>
  </div>
  </div>
  
  </template>
  
  <style lang="scss" scoped>
  @use "/src/assets/_Variables.scss" as *;
  .bb_tracking-container {
  width: 80%;
  position: relative;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
  font-family: 'Noto Sans KR', sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 4% 0 4% 0;
  .bb_title1 {
        display: flex;
        gap: 10px;
        line-height: 40px;
        flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
        align-items: center; /* 세로 중앙 정렬 */
        justify-content: center; /* 가로 중앙 정렬 */
        padding-bottom: 50px;
        .bb_titleLine {
          width: 3px;
          height: 35px;
          background-color: $main-color;
        }
        .bb_title_txt1 h1 {
          font-size: 30px;
        }
      }
  
  .bb_progress-bar {
    background-color: #f0f4fa;
    padding: 4% 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    .bb_step {
      display: flex;
      flex-direction: column;
      align-items: center;
  
      .bb_circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid #ccc;
        background-color: #ccc;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      p {
        margin-top: 10px;
        font-size: 13px;
      }
  
      &.bb_completed .bb_circle {
        background-color: #00aaff;
        border-color: #00aaff;
      }
  
      &.bb_current .bb_circle {
        background-color: white;
        border-color: #0070c0;
        color: #0070c0;
      }
    }
  
    .bb_line {
      flex: 1;
      height: 3px;
      background-color: #ccc;
      margin: 0 10px;
  
      &.bb_completed {
        background-color: #00aaff;
      }
    }
  }
  
  .bb_log-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 14% 0 14%;
  
    .bb_log-item {
  position: relative; // ::after 절대 위치 기준
  padding-left: 15px; // 선 여유 공간 확보
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  padding-bottom: 3%;
  
  .bb_dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    position: relative; // ::after 기준
  }
  
  // 점 아래 세로선 추가
  .bb_dot::after {
    content: "";
    position: absolute;
    top: 100%; // 점 아래에서 시작
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 30px; // 원하는 선 길이
    background-color: #ccc;
  }
  
  // 마지막 항목은 선 안 보이게
  &:last-child .dot::after {
    display: none;
  }
  
  .bb_blue {
    background-color: #00aaff;
  }
  
  .bb_darkblue {
    background-color: #005bac;
  }
  
  .bb_gray {
    background-color: #ccc;
  }
  
  .bb_time {
    margin-left: auto;
    color: #666;
    font-size: 13px;
  }
  }
  
  }
  }
  .bb_allBg{
  background-color: $main-color;
  .bb_kakao-banner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  color: white;
  font-size: 14px;
  padding: 2.5% 4%;
  margin-bottom: 4%;
  p{
    font-size: 25px;
    font-weight: bold;
  }
  .bb_kakao-btn {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  padding: 1% 2%;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  color: black;
  span{
    font-size: 20px;
  }
  //   .bb_kakao-btn img {
  //   width: 20px;
  //   height: 20px;
  //   margin-right: 6px;
  
  // }
  }
  }
  }
  
  
  
  
  
  
  
  </style>