<script setup>
import { ref, onMounted } from "vue";

const reservations = ref([]);
const selectedReservation = ref(null);

const names = ["김철수", "이영희", "박지민", "최준호", "장서연"];
const places = ["공항", "동대구역", "숙소", "기타"];
const bagTypes = ["S", "M", "L", "기타"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
  const today = new Date();
  const randomOffset = Math.floor(Math.random() * 7);
  const newDate = new Date(today.setDate(today.getDate() + randomOffset));
  return newDate.toISOString().split("T")[0];
}

function generateRandomBags() {
  return bagTypes
    .map((type) => ({
      label: type,
      count: getRandomInt(0, 3),
    }))
    .filter((bag) => bag.count > 0);
}

function generateDummyReservations(count = 5) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      reservationNumber: `R${Date.now()}${i}`,
      name: getRandomItem(names),
      phone: `010-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`,
      date: generateRandomDate(),
      time: `${String(getRandomInt(0, 23)).padStart(2, "0")}:${String(
        getRandomInt(0, 59)
      ).padStart(2, "0")}`,
      start: getRandomItem(places),
      stop: getRandomItem(places),
      bags: generateRandomBags(),
    });
  }
  return result;
}

onMounted(() => {
  const dummy = generateDummyReservations(5);
  reservations.value = dummy;
  selectedReservation.value = getRandomItem(dummy);
});
</script>

<template>
  <div class="st_wrap">
        <div class="yy_title1">
          <div class="title_txt1">
            <h1>예약확인</h1>
          </div>
        </div>
    <div class="st_line">
      <div class="payment-page">
        <div class="payment-info-box" v-if="selectedReservation">
          <div class="info-row">
            <span class="label">예약조회</span>
            <span class="value">{{
              selectedReservation.reservationNumber
            }}</span>
          </div>
          <div class="info-row">
            <span class="label">이름</span>
            <span class="value">{{ selectedReservation.name }}</span>
          </div>
          <div class="info-row">
            <span class="label">전화번호</span>
            <span class="value">{{ selectedReservation.phone }}</span>
          </div>
          <div class="info-row">
            <span class="label">날짜</span>
            <span class="value">{{ selectedReservation.date }}</span>
          </div>
          <div class="info-row">
            <span class="label">시간</span>
            <span class="value">{{ selectedReservation.time }}</span>
          </div>
          <div class="info-row">
            <span class="label">출발지</span>
            <span class="value">{{ selectedReservation.start }}</span>
          </div>
          <div class="info-row">
            <span class="label">도착지</span>
            <span class="value">{{ selectedReservation.stop }}</span>
          </div>
          <div class="info-row">
            <span class="label">가방 종류 및 수량</span>
            <span class="value">
              <p v-for="(bag, i) in selectedReservation.bags" :key="i">
                {{ bag.label }} ({{ bag.count }}개)
              </p>
            </span>
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
    width: 100%;
    .info-row {
      align-items: flex-start;
      gap: 4px;
      .label,
      .value {
        font-size: 15px;
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

  .info-row {
    .label,
    .value {
      font-size: 13px;
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
