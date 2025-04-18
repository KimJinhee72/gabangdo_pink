<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>사전예약</h1>
      </div>
    </div>
    <div class="st_top">
      <p class="st_section-title">예약자 정보</p>
      <div class="st_user">
        <input type="text" placeholder="이름" v-model="name" />
        <input type="tel" placeholder="전화번호" v-model="phone" />
      </div>
      <div class="st_time">
        <p class="st_section-title">이용 날짜 및 시간</p>
        <div class="st_date">
          <input type="date" class="st_date" v-model="selectedDate" />
          <div class="st_select-time">
            <select v-model="selectedHour">
              <option>--</option>
              <option v-for="hour in 24" :key="hour">
                {{ hour === 24 ? "00" : String(hour).padStart(2, "0") }}
              </option>
            </select>
            <span>시</span>
            <select v-model="selectedMinute">
              <option>--</option>
              <option v-for="minute in [0, 10, 20, 30, 40, 50]" :key="minute">
                {{ String(minute).padStart(2, "0") }}
              </option>
            </select>
            <span>분</span>
          </div>
        </div>
        <div class="st_middle">
          <p class="st_section-title">출발 장소</p>
          <div class="st_start">
            <button
              v-for="(place, index) in startPlaces"
              :key="'start-' + index"
              class="st_place"
              :class="{ active: selectedStart === place }"
              @click="selectedStart = place">
              {{ place }}
            </button>
          </div>
          <p class="st_section-title">도착 장소</p>
          <div class="st_stop">
            <button
              v-for="(place, index) in stopPlaces"
              :key="'stop-' + index"
              class="st_place"
              :class="{ active: selectedStop === place }"
              @click="selectedStop = place">
              {{ place }}
            </button>
          </div>
          <p class="st_section-title">여행가방 종류 및 수량</p>
          <div class="st_price">
            <div class="st_size" v-for="(item, index) in sizes" :key="index">
              <div class="st_text">
                <p class="st_label">{{ item.label }}</p>
                <p class="st_tag">{{ item.tag }}</p>
              </div>
              <div class="st_pm">
                <div class="st_counter">
                  <button @click="item.count > 0 && item.count--">-</button>
                  <span>{{ item.count }}</span>
                  <button @click="item.count++">+</button>
                </div>
                <span class="st_price"
                  >{{ formatCurrency(item.count * item.price) }}원</span
                >
              </div>
            </div>
            <div class="st_total">
              총 <strong>{{ formatCurrency(totalPrice) }}</strong
              >원
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="submitReservation" class="st_reserve-btn">예약하기</button>
  </div>

  <!-- 모달창 -->
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h3>예약 안내</h3>
      <p>장소[기타] · 가방[기타] <br />예약은 가방도와 협의 후 선택해주세요.</p>
      <button @click="closeModal">확인</button>
    </div>
  </div>
</template>

<script setup>
import { useReservationStore } from "../../stores/reservationStore";
const reservationStore = useReservationStore();
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, computed, reactive, onMounted } from "vue";
//출발, 도착장소
const startPlaces = ["공항", "동대구역", "숙소", "기타"];
const stopPlaces = ["공항", "동대구역", "숙소", "기타"];

const name = ref("");
const phone = ref("");
const selectedDate = ref("");
const selectedHour = ref("--");
const selectedMinute = ref("--");

const selectedStart = ref(null);
const selectedStop = ref(null);
//모달창
const showModal = ref(false);

onMounted(() => {
  showModal.value = true;
});

const closeModal = () => {
  showModal.value = false;
};
// 사이즈 정보와 가격 정의
const sizes = reactive([
  {
    label: "S사이즈",
    tag: "기내용 캐리어,소형 배낭 등",
    count: 0,
    price: 10000,
  },
  {
    label: "M사이즈",
    tag: "화물용 캐리어, 등산 가방 등",
    count: 0,
    price: 14000,
  },
  {
    label: "L사이즈",
    tag: "대형 캐리어, 배낭, 골프백 등",
    count: 0,
    price: 16000,
  },
  {
    label: "기타사이즈",
    tag: "기타 물품 및 표시 외 사이즈",
    count: 0,
    price: 20000,
  },
]);

// 총합 계산
const totalPrice = computed(() =>
  sizes.reduce((sum, item) => sum + item.count * item.price, 0)
);
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("ko-KR", {
    currency: "KRW", //대한민국 원으로 표시
  }).format(amount); // 숫자를 읽기 쉬운 문자열로 바꿔줌
};
// 예약 저장 및 이동
function submitReservation() {
  reservationStore.setReservation({
    name: name.value,
    phone: phone.value,
    selectedDate: selectedDate.value,
    selectedHour: selectedHour.value,
    selectedMinute: selectedMinute.value,
    selectedStart: selectedStart.value,
    selectedStop: selectedStop.value,
    sizes: sizes.map((item) => ({ ...item })), // 깊은 복사
    totalPrice: totalPrice.value,
  });

  router.push("/yeyak4");
}
</script>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

// 공통 너비 변수
$base-width: 350px;

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
.st_top {
  width: 100%;
  padding: 20px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.st_section-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 15px auto;
  text-align: center;
}

input,
select,
button,
label {
  width: 100%;
  max-width: $base-width;
  height: 44px;
  padding: 10px;
  margin: 8px auto;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  box-sizing: border-box;
}

.st_user,
.st_time,
.st_price,
.st_size {
  width: 100%;
  max-width: $base-width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.st_date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%; // 넓게
  flex-wrap: wrap; // 화면 작을 때 줄바꿈 허용
  text-align: center;
}

.st_date input[type="date"] {
  flex: 1;
  max-width: 150px;
  height: 44px;
  padding: 10px;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
}

.st_select-time {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 2;
  min-width: 160px;
}

.st_select-time select {
  width: 70px;
  text-align: center;
  height: 44px;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  padding: 8px;
}

.st_select-time span {
  font-weight: bold;
}

.st_start,
.st_stop {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: $base-width;
  margin: 10px auto;
}

.st_place {
  flex: 1;
  min-width: 60px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.st_place.active {
  background-color: $main-color;
  color: #fff;
  border-color: $main-color;
}

.st_size {
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  margin: 10px 0;
}

.st_text {
  text-align: left;
}

.st_label {
  font-size: 20px;
  margin-bottom: 10px;
}

.st_tag {
  color: #7b7b7b;
  font-size: $basic-font-size-m;
}

.st_pm {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.st_counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.st_counter button {
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #0066b3;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.st_counter button:active {
  background-color: $point-color;
}

.st_total {
  width: 100%;
  max-width: $base-width;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  padding: 15px;
  margin: 15px auto ;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.st_reserve-btn {
  margin-top: 20px;
  width: 150px;
  background-color: $main-color;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.st_reserve-btn:hover {
  background-color: $hover;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: white;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
}

.modal h3 {
  margin-bottom: 12px;
  font-size: 20px;
}

.modal p {
  font-size: 16px;
  line-height: 1.6;
}

.modal button {
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
  }

  .st_top {
    padding: 15px;
    width: 90%;
  }

  .st_label {
    font-size: 18px;
  }

  .st_select-time {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .st_place {
    font-size: 14px;
    padding: 8px;
  }

  .st_size {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .st_pm {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  .st_reserve-btn {
    width: 100%;
    max-width: 300px;
    font-size: 1rem;
  }

  .modal {
    width: 90%;
    max-width: 90%;
  }

  .modal h3 {
    font-size: 18px;
  }

  .modal p {
    font-size: 14px;
  }
}

@media (max-width: 390px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
  }

  .st_section-title {
    font-size: 1rem;
  }

  input,
  select,
  button,
  label {
    height: 40px;
    font-size: 14px;
  }

  .st_place {
    padding: 6px;
    font-size: 13px;
  }

  .st_counter button {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }

  .st_reserve-btn {
    font-size: 0.95rem;
  }

  .st_total {
    font-size: 1rem;
  }

  .modal {
    padding: 20px;
  }

  .modal h3 {
    font-size: 16px;
  }

  .modal p {
    font-size: 13px;
  }

  .modal button {
    font-size: 14px;
  }
}

</style>
