<script setup>
import { useReservationStore } from "../../stores/reservationStore";
import { ref } from "vue";

const selectedPayment = ref("");
const reservationStore = useReservationStore();
</script>

<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>예약·결제하기</h1>
      </div>
    </div>
    <div class="st_check">
      <table class="st_table">
        <tbody>
          <tr>
            <th><span class="fix th-name">이름 :</span></th>
            <td>{{ reservationStore.name }}</td>
          </tr>
          <tr>
            <th><span class="fix th-phone">전화번호 :</span></th>
            <td>{{ reservationStore.phone }}</td>
          </tr>
          <tr>
            <th><span class="fix th-date">날짜 :</span></th>
            <td>{{ reservationStore.selectedDate }}</td>
          </tr>
          <tr>
            <th><span class="fix th-time">시간 :</span></th>
            <td>
              {{ reservationStore.selectedHour }}시
              {{ reservationStore.selectedMinute }}분
            </td>
          </tr>
          <tr>
            <th><span class="fix th-start">출발 :</span></th>
            <td>{{ reservationStore.selectedStart }}</td>
          </tr>
          <tr>
            <th><span class="fix th-stop">도착 :</span></th>
            <td>{{ reservationStore.selectedStop }}</td>
          </tr>
          <tr>
            <th rowspan="{{ reservationStore.sizes.length }}">
              <span class="fix th-bag">가방수량 :</span>
            </th>
            <td>
              <p v-for="(item, i) in reservationStore.sizes" :key="i">
                {{ item.label }} ({{ item.count }}개)
              </p>
            </td>
          </tr>
          <tr>
            <th><span class="fix th-total">총 금액 :</span></th>
            <td>{{ reservationStore.totalPrice.toLocaleString() }}원</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="yy_credit">
      <label class="credit-option">
        <input type="radio" value="bank" v-model="selectedPayment" />
        <span>계좌이체</span>
      </label>
      <label class="credit-option">
        <input type="radio" value="card" v-model="selectedPayment" />
        <span>카드결제</span>
      </label>
      <label class="credit-option">
        <input type="radio" value="kakao" v-model="selectedPayment" />
        <span>카카오페이</span>
      </label>
      <label class="credit-option">
        <input type="radio" value="naver" v-model="selectedPayment" />
        <span>네이버페이</span>
      </label>
    </div>

    <div v-if="selectedPayment === 'bank'" class="payment-info">
      <h4>계좌이체</h4>
      <p>대구은행 123-456-78910 예금주: 도용달</p>
    </div>

    <div v-if="selectedPayment === 'card'" class="payment-info">
      <h4>카드결제</h4>
      <img src="/images/cr/yy_card.jpg" />
    </div>

    <div v-if="selectedPayment === 'kakao'" class="payment-info">
      <h4>카카오페이결제</h4>
      <img src="/images/cr/yy_kakao.jpg" />
    </div>

    <div v-if="selectedPayment === 'naver'" class="payment-info">
      <h4>네이버페이결제</h4>
      <img src="/images/cr/yy_naver.jpg" />
    </div>
    <router-link to="/yeyak5" class="st_btn">결제하기</router-link>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 100%;
  max-width: 700px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.st_check {
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
}
.st_table {
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  border-collapse: collapse;
}
.st_table th {
  position: relative;
  text-align: left;
  width: 180px; /* 고정된 너비 */
  letter-spacing: 2px; /* 자간 설정 */
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
}

th,
td {
  padding: 10px;
  text-align: left;
  vertical-align: top;
}
th {
  width: 100px;
  text-align: center;
  white-space: nowrap;
}

.yy_credit {
  display: flex;
  gap: 1rem;
  margin: 15px auto;
  padding: 20px auto;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  width: 100%;
  border-radius: 20px;
}
.credit-option {
  padding: 15px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  gap: 0.5rem;
}

.credit-option input[type="radio"] {
  display: none;
}

.credit-option span {
  position: relative;
  padding-left: 28px; /* 원형 체크박스를 위한 여백 */
  line-height: 1.5;
  display: inline-flex;
  align-items: center; /* span 내부 요소 정렬 */
  height: 24px; /* 체크 원과 동일한 높이 */
}

.credit-option span::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  border-radius: 50%;
  background-color: #fff;
}

.credit-option input[type="radio"]:checked + span::before {
  border-color: #007bff;
  background-color: #007bff;
}

.credit-option input[type="radio"]:checked + span {
  font-weight: bold;
  color: #007bff;
}
.payment-info {
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
}
.st_button {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.st_reser {
  display: inline-block;
  padding: 12px 24px;
  background-color: $main-color;
  color: white;
  font-size: 16px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
@media (max-width: 390px) {
  .st_wrap {
    margin: 50px auto;
    padding: 0 16px;
  }

  .st_table {
    width: 100%;
    font-size: 14px;
    th,
    td {
      padding: 6px;
    }
  }

  .yy_credit {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }

  .credit-option {
    width: 100%;
    font-size: 15px;
    padding: 0.75rem;
    justify-content: flex-start;
  }

  .payment-info {
    font-size: 14px;
    padding: 10px;
    margin: 10px;
  }

  .title_txt1 h1 {
    font-size: 20px;
  }

  button {
    width: 100%;
    font-size: 16px;
    padding: 0.75rem;
  }
}
</style>
