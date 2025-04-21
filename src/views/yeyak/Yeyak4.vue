<script setup>
import { useReservationStore } from "../../stores/reservationStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedPayment = ref("");
const showModal = ref(false);
const reservationStore = useReservationStore();
const router = useRouter();

const paymentNames = {
  bank: "계좌이체",
  card: "카드결제",
  kakao: "카카오페이",
  naver: "네이버페이",
};

const confirmPayment = () => {
  if (!selectedPayment.value) {
    alert("결제 수단을 선택해주세요.");
    return;
  }

  showModal.value = true;

  setTimeout(() => {
    // 모달 닫고 페이지 이동
    showModal.value = false;
    router.push({
      path: "/yeyak5",
      query: {
        payment: selectedPayment.value,
      },
    });
  }, 3000); // 3초 후 이동
};
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
            <th>
              <span class="fix th-name"><span>이</span><span>름</span>:</span>
            </th>
            <td>{{ reservationStore.name }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-phone"
                ><span>전</span><span>화</span><span>번</span
                ><span>호</span>:</span
              >
            </th>
            <td>{{ reservationStore.phone }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-date"><span>날</span><span>짜</span>:</span>
            </th>
            <td>{{ reservationStore.selectedDate }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-time"><span>시</span><span>간</span>:</span>
            </th>
            <td>
              {{ reservationStore.selectedHour }}시
              {{ reservationStore.selectedMinute }}분
            </td>
          </tr>
          <tr>
            <th>
              <span class="fix th-start"><span>출</span><span>발</span>:</span>
            </th>
            <td>{{ reservationStore.selectedStart }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-stop"><span>도</span><span>착</span>:</span>
            </th>
            <td>{{ reservationStore.selectedStop }}</td>
          </tr>
          <tr>
            <th rowspan="{{ reservationStore.sizes.length }}" class="th-bag">
              <span class="fix th-bag"
                ><span>가</span><span>방</span><span>수</span
                ><span>량</span>:</span
              >
            </th>
            <td>
              <p v-for="(item, i) in reservationStore.sizes" :key="i">
                {{ item.label }} ({{ item.count }}개)
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <span class="fix th-total"
                ><span>총</span><span>금</span><span>액</span>:</span
              >
            </th>
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
    <button class="st_button st_reser" @click="confirmPayment">결제하기</button>
  </div>
  <!-- 모달창 -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-box">
      선택하신 <strong>{{ paymentNames[selectedPayment] }}</strong
      >로 결제가 되었습니다.
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
  height: 100vh;
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
  width: 50%;
  margin: 0 auto; /* 수평 가운데 정렬 */
  display: flex; /* block으로 강제 전환 */
  border-collapse: collapse;
  justify-content: center;
  table-layout: fixed;
}

.st_table th,
.st_table td {
  border: none; /* 선 제거 */
  padding: 4px 6px; /* 여백 좁게 */
  vertical-align: middle;
}

/* th: 작고 중앙 정렬 */
.st_table th {
  font-weight: bold;
  width: 80px;
  text-align: center;
  white-space: nowrap;
  font-weight: bold;
}

/* td: 왼쪽 정렬 */
.st_table td {
  text-align: left;
}
/* ✅ 가방수량 th만 위로 정렬 */
.st_table th.th-bag {
  vertical-align: top !important;
}
/* 라벨 span: 양끝 균등 정렬 */
.fix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  width: 100%;
  gap: 0.1em;
  justify-items: center;
}

.fix span {
  display: inline-block;
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
  width: calc(100% / 4);
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
  width: 10px;
  height: 10px;
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
  border: none;
}

.st_reser {
  width: 150px;
  margin: 10px auto;
  display: inline-block;
  padding: 12px 24px;
  background-color: $main-color;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  border: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
// 모달
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
}

@media screen and (max-width: 768px) {
  .st_wrap {
    margin: 50px auto;
    padding: 0 16px;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
    text-align: center;
  }

  .st_check {
    padding: 15px;
    width: 100%;
  }

  .st_table {
    width: 100%;
    table-layout: fixed; // ✅ 비율 유지
    border-collapse: collapse;
    margin: 0 auto;
  }

  .st_table th,
  .st_table td {
    padding: 8px;
    font-size: 15px;
    word-break: keep-all;
    vertical-align: middle;
    text-align: left; // ✅ 모바일에서도 읽기 쉽게
  }

  .st_table th {
    width: 100px; // ✅ th는 고정폭
    font-weight: bold;
    white-space: nowrap;
  }

  .st_table td {
    width: auto; // ✅ td는 남은 공간
  }

  .st_table th.th-bag {
    vertical-align: top !important;
  }

  .yy_credit {
    align-items: stretch;
    gap: 8px; // ✅ 세로 간격 줄이기
    padding: 10px; // ✅ 전체 여백 줄이기 (기존 padding이 있다면 확인)
  }

  .credit-option {
    width: calc(100% / 4);
    font-size: 15px;
    padding: 6px 10px; // ✅ 기존보다 작게
    display: flex;
    align-items: center;
    justify-content: flex-start; // ✅ space-between이 아니라 정렬 왼쪽
    border-radius: 8px;
  }

  .payment-info {
    font-size: 15px;
    padding: 8px 12px; // ✅ padding 줄이기
    margin-top: 10px; // ✅ 위아래 간격 확인
    line-height: 1.4;
  }

  .st_reser {
    font-size: 15px;
    padding: 12px;
    margin-top: 20px;
  }

  .modal-box {
    font-size: 16px;
    width: 90%;
  }
}

@media (max-width: 390px) {
  .st_wrap {
    margin: 50px auto;
    padding: 0 16px;
  }

  .st_table {
    width: 90%;
    font-size: 15px;
    th,
    td {
      padding: 6px;
    }
  }
  .yy_credit {
    display: flex;
    flex-wrap: wrap; // ✅ 줄바꿈 허용
    justify-content: space-between;
    gap: 10px;
  }

  .credit-option {
    width: calc(50% - 5px); // ✅ 2개씩 정렬 (gap 고려해서)
    font-size: 15px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    box-sizing: border-box; // ✅ padding 포함한 너비 계산
  }

  .payment-info {
    font-size: 15px;
    padding: 10px;
    margin: 10px;
  }
  .payment-info img {
    width: 100%;
    max-width: 350px;
    height: auto;
    margin-top: 8px;
  }
  .title_txt1 h1 {
    font-size: 25px;
  }

  button {
    font-size: 16px;
    padding: 0.75rem;
  }
}
</style>
