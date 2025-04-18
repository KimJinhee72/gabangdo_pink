<template>
  <div class="yy_wrap">
    <div class="yy_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>예약조회</h1>
      </div>
    </div>

    <div class="yy_check" v-if="selectedReservation">
      <div class="reservation-item">
        <table class="reservation-table">
          <tbody>
            <tr>
              <th>예약번호 :</th>
              <td>{{ selectedReservation.reservationNumber }}</td>
            </tr>
            <tr>
              <th>이름 :</th>
              <td>{{ selectedReservation.name }}</td>
            </tr>
            <tr>
              <th>연락처 :</th>
              <td>{{ selectedReservation.phone }}</td>
            </tr>
            <tr>
              <th>날짜 :</th>
              <td>{{ selectedReservation.date }}</td>
            </tr>
            <tr>
              <th>시간 :</th>
              <td>{{ selectedReservation.time }}</td>
            </tr>
            <tr>
              <th>출발 :</th>
              <td>{{ selectedReservation.start }}</td>
            </tr>
            <tr>
              <th>도착 :</th>
              <td>{{ selectedReservation.stop }}</td>
            </tr>
            <tr>
              <th>가방 수량 :</th>
              <td>
                <p v-for="(bag, i) in selectedReservation.bags" :key="i">
                  {{ bag.label }} 사이즈 ({{ bag.count }}개)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link to="/"><button>처음으로</button></router-link>
  </div>
</template>

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
      count: getRandomInt(0, 3), // 0~3개 랜덤
    }))
    .filter((bag) => bag.count > 0);
}

// 예약 더미 데이터 생성
function generateDummyReservations(count = 5) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      reservationNumber: `R${Date.now()}${i}`, // 예약번호 추가
      name: getRandomItem(names),
      phone: `010-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`, // 연락처 추가
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
  const dummy = generateDummyReservations(5); // 전체 생성
  reservations.value = dummy;
  selectedReservation.value = getRandomItem(dummy); // 하나만 랜덤 선택
});
</script>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.yy_wrap {
  width: 90%;
  max-width: 700px;
  margin: 100px auto;
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
  padding-bottom: 10px;
  .title_txt1 h1 {
    font-size: 35px;
  }
}
.yy_check {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  border-radius: 20px;
}
.reservation-table {
  width: 100%;
  max-width: 600px;
  border-collapse: separate; // ✅ border 간격 조정 가능
  border-spacing: 0 10px; // ✅ 행 간격 부여
  margin: 20px auto;
  table-layout: fixed; // ✅ 열 너비 균일하게 설정
}

.reservation-table th,
.reservation-table td {
  padding: 12px 16px; // ✅ 여백 넉넉히
  padding: 10px;
  text-align: left;
  vertical-align: top;
}
.reservation-table td {
  width: 60%; // ✅ 오른쪽 열 고정
  word-wrap: break-word;
  background-color: #f9f9f9;
  border-radius: 6px;
  text-align: justify;
}
.reservation-table th {
  width: 40%; // ✅ 왼쪽 열 고정
  max-width: 500px;
  white-space: nowrap; // 줄바꿈 방지
  font-weight: bold;
  color: #333;
  text-align: justify;
  position: relative;
}
th:after{
	content: '';
  display: inline-block;
  width: 100%;
}

button {
  padding: $padding-sss $margin-ss;
  margin: $margin-ss;
  font-size: $basic-font-size-L;
  font-family: $font-family;
  color: #fff;
  background-color: $main-color;
  border: none;
  border-radius: $border-radius-sm;
  cursor: pointer;
}
button:hover {
  background-color: $hover;
}
</style>
