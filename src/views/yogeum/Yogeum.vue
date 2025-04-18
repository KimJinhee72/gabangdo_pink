<template>
  <div class="yg_container">
    <div class="inner">
      <!-- 제목 스타일 -->
      <div class="bb_title1">
        <div class="title_txt1">
          <h1>요금안내</h1>
        </div>
      </div>
      <Content1 v-if="!isMobile" />
      <Homeswiper1 v-if="isMobile" />
      <!-- 요금 안내 후 알림사항 -->
      <div class="yg_infoWrapper">
        <!-- 알림 왼쪽(할인) -->
        <div class="yg_leftInfo">
          <p>2개 이상 예약시부터 1,000원씩 추가할인 무한적용</p>
          <p>(3개 예약시 2,000원 / 4개 예약시 3,000원 할인)</p>
        </div>
        <!-- 알림 오른쪽(주의사항) -->
        <div class="yg_rightInfocaution">
          <a href="#">추가요금 발생지역 > </a>
          <p>
            <img
              src="/public/images/geen/caution_icon.png"
              alt="주의표시" />수하물 개당요금
          </p>
        </div>
      </div>
      <!-- 결제환불제목 -->
      <div class="bb_title1 yg_accoutNrefund">
        <div class="title_txt1">
          <h1>결제&nbsp;&nbsp;및&nbsp;&nbsp;환불</h1>
        </div>
        <!-- 환불 절차 -->
        <div class="yg_refundProcess">
          <ul>
            <li class="yg_refunddLi1">
              <img src="/public/images/geen/1/announce.png" alt="알림이미지" />
            </li>
            <li class="yg_refunddLi2">
              <a>환불신청</a><span> > </span> <a>환불여부확인</a>
              <span> > </span>
              <a>환불처리</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 결제환불 내용 -->
      <div class="yg_accoutNrefundexplain">
        <p>
          <strong>결제 계좌 및 카드결제 안내</strong> <br /><br /><span
            >1. 계좌이체 안내</span
          >
          <br />입금 계좌 정보 :<br />
          <span class="accCard">대구은행 123-456-78910 가방도 도용달</span>
          <br />입금 시 유의사항 : <br />입금자명과 주문자명이 다를 경우, 반드시
          고객센터로 연락. 입금 확인은 최대 1시간 내에 처리. <br /><br /><span
            >2. 카드 결제 안내</span
          >
          <br />사용 가능한 카드 : <br />VISA, Mastercard, AMEX, 국내
          신용/체크카드 전부 가능 <br />할부 안내 5만원 이상 결제 시, 2~3개월
          무이자 할부 가능 (일부 카드사 제외) <br />결제 실패 시 확인 사항 :
          카드 한도 초과 여부 / 카드사 승인 문자 / 인터넷 결제 차단 여부 확인

          <br /><br /><span>3. 카드사 간편앱 결제 안내</span> <br />지원하는
          카드사 간편결제 앱:<br />
          삼성페이, 네이버페이, 카카오페이, 페이코, L.pay 등
          <br />결제 방법 결제 단계에서 원하는 간편결제 앱 선택 본인 인증 후
          결제 진행 결제 완료 후 주문 확인 유의사항 일부 간편결제 앱은 특정
          카드사만 지원. <br />결제 실패 시, 앱 내 카드 등록 상태를 확인.
          <br /><br /><span>4. 기타 결제 관련 문의</span><br />
          고객센터: 1234-5678 <br />(운영시간: 평일 09:00~18:00) <br />카카오톡
          상담: @○○○ <br />(고객센터 운영시간내 문의 가능)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Content1 from "../b_main/Content1.vue";
import Homeswiper1 from "../b_main/Homeswiper1.vue";

//  반응형 관련 상태
// - isMobile: 현재 화면이 모바일인지 여부 (true: 모바일 화면)
// - isMenuOpen: 현재 메뉴가 열려 있는지 여부 (여기선 모바일에서 true)
const isMobile = ref(window.innerWidth < 635);
//  창 크기 변경 시 실행되는 함수
const handleResize = () => {
  const width = window.innerWidth;

  // 화면 너비에 따라 모바일 여부와 메뉴 오픈 여부 업데이트
  isMobile.value = width < 635;
};

//  컴포넌트가 마운트될 때: 이벤트 등록 + 최초 한 번 실행
onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize(); // 초기 실행
});

//  컴포넌트가 언마운트될 때: 이벤트 제거 (메모리 누수 방지)
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
@use "/src/assets/Home.scss" as *;

// 요금 전체영역
.yg_container {
  width: 100%;
  h1 {
    text-align: center;
    font-size: $title-font-size-m;
  }
}
.yg_container > .inner {
  width: 100%;
  max-width: 1300px;
  margin: auto;
}
// 제목
.bb_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  flex-direction: column;
  padding-bottom: 10px;
  margin-top: 100px;
  .title_txt1 h1 {
    font-size: 35px;
  }
}
//    요금안내
::v-deep(.macontent1_wrap) {
  background-color: transparent !important;
}
::v-deep(.masize, .masize1) {
  border: 1px solid $main-color !important;
}
// 요금 안내 후 알림사항
// 알림 왼쪽(할인)
.yg_infoWrapper {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
}
.yg_leftInfo {
  line-height: 25px;
  color: #5a5a5a;
}
.yg_rightInfocaution {
  width: 45%;
  text-align: right;
  a {
    display: block;
    font-weight: bold;
    margin-bottom: 6px;
    color: #5a5a5a;
    text-decoration: underline;
    font-weight: normal;
  }

  p {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #ff6b6b; // 글씨 빨강
    font-size: 14px;
    img {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      filter: brightness(0) saturate(100%) invert(16%) sepia(96%)
        saturate(7484%) hue-rotate(357deg) brightness(93%) contrast(118%);
      // 빨강 필터 효과
    }
  }
}
// 결제 및 환불
.yg_accoutNrefund {
  margin-bottom: 50px;
}
// 다른 클라스 네임 bb_title1  display:flex 해놓음
// 타이틀
::v-deep(.bb_title1) {
  padding: 0 !important;
  gap: 50px !important;
}
// 환불 절차
.yg_refundProcess {
  width: 100%;
  max-width: 1300px;
  margin: auto;
  ul {
    width: 100%;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 620px) {
      justify-content: space-between;
    }

    li {
      display: flex;
      @media screen and (max-width: 470px) {
        display: block;
      }
      img {
        width: 60%;
        @media screen and (max-width: 620px) {
          width: 70%;
        }
      }
      a {
        width: 100%;
        display: block;
        text-align: center;
        border-radius: 30px;
        border: 2px solid $sub-color;
      }
      span {
        width: 150px;
        font-size: 30px;
        text-align: center;
        color: $sub-color;
      }
    }
  }
}
// 환불내용
.yg_refunddLi1 {
  width: 20%;
}
@media screen and (max-width: 470px) {
  ::v-deep(.yg_refunddLi1) {
    display: none !important;
  }
  ::v-deep(.yg_refunddLi2) {
    width: 100% !important;
    display: flex !important;
  }
}

.yg_refunddLi2 {
  width: 68%;
  @media screen and (max-width: 620px) {
    width: 78%;
  }
  a {
    width: 200px;
  }
}
.yg_accoutNrefundexplain {
  width: 100%;
  height: 70%;
  margin-bottom: 50px;
  background-color: rgba($sub-color, 0.04);
  p {
    padding: 50px 130px !important;
    font-size: 18px;
    line-height: 40px;
    color: #5a5a5a;
    strong {
      color: #333;
      font-size: 25px;
      line-height: 55px;
    }
    span {
      line-height: 45px;
      color: #333;
      font-size: 23px;
    }
  }
}

@media screen and (max-width: 1170px) {
  .macontent1_wrap {
    width: 100%;
    max-width: 80% !important;
  }
}
@media screen and (max-width: 974px) {
  ::v-deep(.macontent1_wrap) {
    width: 100% !important;
    max-width: 100% !important;
    margin: auto;
  }
  .macontent1_down {
    width: 200% !important;
  }
  ::v-deep(.macontent1_wrap) {
    width: 93%;
  }
  ::v-deep(.macontent1_wrap1) {
    display: block;
    background-color: transparent !important;
  }
  ::v-deep(.masize1) {
    max-width: 250px !important;
    border: 1px solid $main-color !important;
  }
  .yg_leftInfo {
    font-size: 0.8rem;
  }
  .yg_rightInfocaution a {
    font-size: 14px !important;
  }
}
@media screen and (max-width: 920px) {
  .yg_accoutNrefundexplain p {
    padding: 30px 50px !important;
  }
  .yg_accoutNrefundexplain {
    p {
      font-size: 15px;
      line-height: 35px;
      strong {
        font-size: 22px;
        line-height: 50px;
      }
      span {
        line-height: 40px;
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 570px) {
  ::v-deep(.yg_infoWrapper) {
    width: 100%;
    height: 150px;
    padding: 16px;
    flex-direction: column;
    text-align: center !important;
  }
  ::v-deep(.yg_rightInfocaution a) {
    text-align: center;
  }
  ::v-deep(.yg_rightInfocaution p) {
    justify-content: center;
  }
  .yg_accoutNrefundexplain p {
    padding: 30px !important;
  }
  .accCard {
    font-size: 17px !important;
  }
}
</style>
