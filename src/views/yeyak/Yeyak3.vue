<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useReservationStore } from "@/stores/reservationStore";
import { useRouter } from "vue-router";

const reservationStore = useReservationStore();
const router = useRouter();

// 상태
const name = ref("");
const phone = ref("");
const selectedDate = ref("");
const selectedHour = ref("--");
const selectedMinute = ref("--");
const selectedStart = ref(null);
const selectedStop = ref(null);
const showModal = ref(false);

// 에러 토스트
const toastMessage = ref("");
const toastTarget = ref("");

const showToast = (msg, target) => {
  toastMessage.value = msg;
  toastTarget.value = target;
  setTimeout(() => {
    toastMessage.value = "";
    toastTarget.value = "";
  }, 3000);
};

const startPlaces = ["공항", "동대구역", "숙소", "기타"];
const stopPlaces = ["공항", "동대구역", "숙소", "기타"];

// 사이즈 정보와 가격 정의
const sizes = reactive([
  {
    label: "S사이즈",
    tag: "기내용 캐리어,소형 배낭 등",
    count: 0,
    price: 12000,
  },
  {
    label: "M사이즈",
    tag: "화물용 캐리어, 등산 가방 등",
    count: 0,
    price: 16000,
  },
  {
    label: "L사이즈",
    tag: "대형 캐리어, 배낭, 골프백 등",
    count: 0,
    price: 18000,
  },
  {
    label: "기타사이즈",
    tag: "기타 물품 및 표시 외 사이즈",
    count: 0,
    price: 25000,
  },
]);

const totalPrice = computed(() =>
  sizes.reduce((sum, item) => sum + item.count * item.price, 0)
);

const formatCurrency = (num) => new Intl.NumberFormat("ko-KR").format(num);

const submitReservation = () => {
  if (!name.value) return showToast("이름을 입력해주세요", "name");
  if (!phone.value) return showToast("전화번호를 입력해주세요", "phone");
  if (!selectedDate.value) return showToast("날짜를 선택해주세요", "date");
  if (selectedHour.value === "--" || selectedMinute.value === "--")
    return showToast("시간을 선택해주세요", "time");
  if (!selectedStart.value) return showToast("출발지를 선택해주세요", "start");
  if (!selectedStop.value) return showToast("도착지를 선택해주세요", "stop");

  const bagCount = sizes.reduce((sum, item) => sum + item.count, 0);
  if (bagCount === 0) return showToast("가방 수량을 선택해주세요", "bag");

  reservationStore.setReservation({
    name: name.value,
    phone: phone.value,
    selectedDate: selectedDate.value,
    selectedHour: selectedHour.value,
    selectedMinute: selectedMinute.value,
    selectedStart: selectedStart.value,
    selectedStop: selectedStop.value,
    sizes: sizes.map((i) => ({ ...i })),
    totalPrice: totalPrice.value,
  });

  router.push("/yeyak4");
};

const closeModal = () => {
  showModal.value = false;
};

onMounted(() => {
  showModal.value = true;
});
</script>

<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1"><h1>사전예약</h1></div>
    </div>

    <div class="st_top">
      <p class="st_section-title">예약자 정보</p>
      <div class="st_user">
        <div class="tooltip-container">
          <input type="text" placeholder="이름" v-model="name" />
          <div v-if="toastTarget === 'name'" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </div>
        <div class="tooltip-container">
          <input type="number" placeholder="전화번호" v-model="phone" />
          <div v-if="toastTarget === 'phone'" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </div>
      </div>

      <div class="st_time">
        <p class="st_section-title">이용 날짜 및 시간</p>
        <div class="st_datetime">
          <div class="tooltip-container">
            <input type="date" v-model="selectedDate" />
            <div v-if="toastTarget === 'date'" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </div>
          <div class="tooltip-container st_select-time">
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
            <div v-if="toastTarget === 'time'" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </div>
        </div>

        <p class="st_section-title">출발 장소</p>
        <div class="tooltip-container">
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
          <div v-if="toastTarget === 'start'" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </div>

        <p class="st_section-title">도착 장소</p>
        <div class="tooltip-container">
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
          <div v-if="toastTarget === 'stop'" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </div>

        <p class="st_section-title">여행가방 종류 및 수량</p>
        <div class="tooltip-container">
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
          <div v-if="toastTarget === 'bag'" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </div>
      </div>
    </div>

    <button @click="submitReservation" class="st_reserve-btn">예약하기</button>
  </div>
  /
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h3>예약 안내</h3>
      <p>장소[기타] · 가방[기타] 예약은 가방도와 협의 후 선택해주세요.</p>
      <button @click="closeModal">확인</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

// 공통 너비 변수
$base-width: 350px;

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
input[type="text"],
input[type="tel"],
input[type="date"] {
  height: 44px;
}

select {
  height: 40px; // 선택창은 조금 작게
}

button {
  height: auto; // 버튼은 내용 따라 조절
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
.st_datetime {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  max-width: $base-width;
  margin: 0 auto;

  .st_select-time {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: nowrap;

    select {
      width: 70px;
      height: 44px;
      text-align: center;
    }

    span {
      font-weight: bold;
    }
  }
}

.tooltip-container {
  position: relative; // 중요: 에러 메시지가 해당 영역에 종속되게
  width: 100%;
  max-width: $base-width;
  .st_datetime & {
    flex: 1;
    max-width: none;
  }
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
  margin: 15px auto;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.st_reserve-btn {
  margin: 20px auto;
  width: 150px;
  background-color: $main-color;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.st_reserve-btn:hover {
  background-color: $hover;
}
// 모달창
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

.tooltip-bottom {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  background-color: #ff4d4f;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;
  z-index: 10;
  animation: float 1.8s ease-in-out infinite;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.tooltip-bottom::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 14px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ff4d4f;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
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

  .st_reserve-btn {
    width: 150px;
    font-size: 16px;
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
  .st_start,
  .st_stop {
    width: 100% !important; // 너비 줄이고
    margin: 0 auto; // 중앙 정렬
  }

  .st_place {
    font-size: 12px;
    padding: 6px;
  }

  .st_counter button {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }

  .st_reserve-btn {
    font-size: 16px;
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
