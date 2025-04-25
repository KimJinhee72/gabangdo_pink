<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useReservationStore } from "@/stores/reservationStore";

const reservationStore = useReservationStore();
const selectedPayment = ref("");
const showModal = ref(false);
const router = useRouter();

const basicPayments = {
  bank: "계좌이체",
  card: "카드결제",
  phone: "휴대폰이체",
 };
 const easyPayments = {
  toss: "토스",
  naver: "네이버페이",
  kakao: "카카오페이",
};

const paymentNames = {
  ...basicPayments,
  ...easyPayments,
};
const confirmPayment = () => {
  if (!selectedPayment.value) {
    alert("결제 수단을 선택해주세요.");
    return;
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  router.push({
    path: "/yeyak5",
    query: { payment: selectedPayment.value },
  });
};
</script>

<template>
  <div class="st_wrap">
        <div class="yy_title1">
          <div class="title_txt1">
            <h1>결제하기</h1>
          </div>
        </div>
    <div class="st_line">
      <div class="payment-page">
        <!-- 결제 정보 -->
        <div class="payment-info-box">
          <div class="info-row">
            <span class="label">이름</span>
            <span class="value">{{ reservationStore.name }}</span>
          </div>
          <div class="info-row">
            <span class="label">날짜</span>
            <span class="value">{{ reservationStore.selectedDate }}</span>
          </div>
          <div class="info-row">
            <span class="label">예약시간</span>
            <span class="value">
              {{ reservationStore.selectedHour }}시
              {{ reservationStore.selectedMinute }}분</span
            >
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
              </p></span
            >
          </div>
          <div class="info-row">
            <span class="label">결제 금액</span>
            <span class="value red">{{ reservationStore.totalPrice }}</span>
          </div>
        </div>

        <!-- 결제 수단 -->
        <div class="payment-section">
          <span class="payment">결제 수단</span>
          <!-- 기본 결제 수단 -->
<div class="payment-methods">
  <label
    v-for="(label, key) in basicPayments"
    :key="key"
    class="method-btn">
    <input type="radio" :value="key" v-model="selectedPayment" />
    <span>{{ label }}</span>
  </label>
</div>

<!-- 간편 결제 수단 -->
<div class="easy-payments">
  <h3 class="payment-section">간편결제</h3>
  <label
    v-for="(label, key) in easyPayments"
    :key="key"
    class="easy-option">
    <input type="radio" :value="key" v-model="selectedPayment" />
    <img :src="`/images/cr/yy_${key}.png`" :alt="label" />
  </label>
</div>

          <button class="st_reser" @click="confirmPayment">결제완료</button>
        </div>
      </div>

      <!-- 모달 -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-box">
          <p>
            선택하신 <strong>{{ paymentNames[selectedPayment] }}</strong
            >로 결제가 완료되었습니다.
          </p>
          <button @click="closeModal" class="st_reser">확인</button>
        </div>
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


.page-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}

.payment-info-box {
  width: 80%;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  background-color: #f8f9fa;
  padding: 20px;
margin: 10px auto;
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

.payment-section {
  text-align: center;
}
.payment {
  font-size: 20px;
  margin: 15px auto;
  display: inline-block;
}

.payment-methods {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 5px;
}

.method-btn {
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 10px 10px;
  font-weight: 500;
  cursor: pointer;
  width: 48%;
  text-align: center;
  transition: all 0.2s;

  input[type="radio"] {
    display: none;
  }

  span {
    color: #333;
  }

  input[type="radio"]:checked + span {
    color: #03c75a;
    font-weight: 700;
  }
}

.easy-payments {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px; // 버튼 사이 간격
  margin: 15px auto;
  padding: 2px 0;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: #fff;
  width: 100%;
  transition: all 0.2s;
}
.payment-section h3 {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 10px;
  display: block;
}
.easy-option {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 5px;
  transition: border-color 0.2s ease;
  cursor: pointer;

  input[type="radio"] {
    display: block;
  }

  img {
    width: 75px;
    height: auto;
    display: block;
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
  color: rgb(255, 255, 255);
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
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
  }

  .info-row {
    align-items: flex-start;

  }

  .payment-methods {
    gap: 12px;

    .method-btn {
      width: 100%;
    }
  }
   .easy-option {
    width: 100%;
    height: auto;
    display: flex;

    img {
      width: 100%;   
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


  .payment-methods {
    gap: 12px;

    .method-btn {
      width: 100%;
      font-size: 14px;
    }
  }
  .easy-payments {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px; // 버튼 사이 간격
   border: 2px solid #ddd;
  border-radius: 12px;
  background: #fff;
  width: 100%;
  transition: all 0.2s;
}
.payment-section h3 {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0;
  display: block;
}
   .easy-option {
    width: 100%;
        img {
      width: 80%;   
    }
  }


  .modal-box {
    width: 90%;
    padding: 1.5rem;

    p {
      font-size: 16px;
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
</style>
