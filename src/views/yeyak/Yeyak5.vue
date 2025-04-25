<script setup>
import { useReservationStore } from "@/stores/reservationStore";
import { useRoute, useRouter } from "vue-router";

const reservationStore = useReservationStore();
const route = useRoute();
const router = useRouter();

const payment = route.query.payment;
const paymentNames = {
  bank: "계좌이체",
  card: "카드결제",
  kakao: "카카오페이",
  naver: "네이버페이",
  toss: "토스",
  phone: "휴대폰이체",
};
</script>

<template>
  <div class="st_wrap">
        <div class="yy_title1">
          <div class="title_txt1">
            <h1>예약완료</h1>
          </div>
        </div>
    <div class="st_line">
      <div class="payment-page">
        <!-- 예약 정보 -->
        <div class="payment-info-box">
          <div class="info-row">
            <span class="label">예약번호</span>
            <span class="value">
              {{
                "R" + Date.now().toString() + Math.floor(Math.random() * 1000)
              }}
            </span>
          </div>
          <div class="info-row">
            <span class="label">이름</span>
            <span class="value">{{ reservationStore.name }}</span>
          </div>
          <div class="info-row">
            <span class="label">전화번호</span>
            <span class="value">{{ reservationStore.phone }}</span>
          </div>
          <div class="info-row">
            <span class="label">날짜</span>
            <span class="value">{{ reservationStore.selectedDate }}</span>
          </div>
          <div class="info-row">
            <span class="label">시간</span>
            <span class="value">
              {{ reservationStore.selectedHour }}시
              {{ reservationStore.selectedMinute }}분
            </span>
          </div>
          <div class="info-row">
            <span class="label">출발지</span>
            <span class="value">{{ reservationStore.selectedStart }}</span>
          </div>
          <div class="info-row">
            <span class="label">도착지</span>
            <span class="value">{{ reservationStore.selectedStop }}</span>
          </div>
          <div class="info-row">
            <span class="label">가방 종류 및 수량</span>
            <span class="value">
              <p v-for="(item, i) in reservationStore.sizes" :key="i">
                {{ item.label }} ({{ item.count }}개)
              </p>
            </span>
          </div>
          <div class="info-row">
            <span class="label">총 금액</span>
            <span class="value red"
              >{{ (reservationStore.totalPrice || 0).toLocaleString() }}원</span
            >
          </div>
          <div class="info-row">
            <span class="label">결제방식</span>
            <span class="value">{{
              paymentNames[payment] || "선택되지 않음"
            }}</span>
          </div>
        </div>

        <router-link to="/" class="st_reser">처음으로</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 100%;
  max-width: 700px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
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
  padding-bottom: 30px;
  .title_txt1 h1 {
    font-size: 40px;
    font-family: "omyu_pretty";
  }
}

.st_line{
  width: 100%;
  padding: 20px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.payment-page {
  width: 100%;
  color: #333;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment-info-box {
  width: 80%;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  padding: 20px;
  margin: 10px auto;
  background-color: #f8f9fa;

  .info-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    .label {
      font-weight: 500;
      color: #666;
    }
    .value {
      font-weight: 600;
    }
    &.total .value {
      color: #ff3b30;
      font-weight: 700;
    }
  }
}

.st_reser {
  width: 150px;
  height: 50px;
  line-height: 25px;
  margin: 20px auto;
  display: inline-block;
  padding: 12px 24px;
  background-color: $main-color;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
@media (max-width: 768px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_line {
    padding: 15px;
    width: 90%;
  }

  .payment-info-box {
    width: 95%;
    padding: 16px;
    .info-row {
      align-items: flex-start;
      gap: 4px;

      .label,
      .value {
        font-size: 14px;
      }
    }
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 20px;
  }
}

@media (max-width: 390px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }
  .st_line {
    padding: 15px;
    width: 90%;
  }
  .payment-info-box {
    width: 95%;
    padding: 16px;
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 20px;
  }
}

</style>
