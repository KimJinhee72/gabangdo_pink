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
  const dummy = generateDummyReservations(5);
  reservations.value = dummy;
  selectedReservation.value = getRandomItem(dummy);

  console.log("선택된 예약 정보:", selectedReservation.value); // ✅ 콘솔 확인
});
</script>
<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1">
        <h1>예약확인</h1>
      </div>
    </div>
    <div class="st_check" v-if="selectedReservation">
      <table class="st_table">
        <tbody>
          <tr>
            <th>
              <span class="fix th-number"
                ><span>예</span><span>약</span><span>번</span><span>호</span
                ><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.reservationNumber }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-name"
                ><span>이</span><span>름</span><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.name }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-phone"
                ><span>전</span><span>화</span><span>번</span><span>호</span
                ><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.phone }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-date"
                ><span>날</span><span>짜</span><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.date }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-time"
                ><span>시</span><span>간</span><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.time }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-start"
                ><span>출</span><span>발</span><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.start }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix th-stop"
                ><span>도</span><span>착</span><span>:</span></span
              >
            </th>
            <td>{{ selectedReservation.stop }}</td>
          </tr>
          <tr>
            <th class="th-bag">
              <span class="fix th-bag"
                ><span>가</span><span>방</span><span>수</span><span>량</span
                ><span>:</span></span
              >
            </th>
            <td>
              <p v-for="(bag, i) in selectedReservation.bags" :key="i">
                {{ bag.label }} ({{ bag.count }}개)
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/" class="st_button st_reser">처음으로</router-link>
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
  width: 80px;
  text-align: center;
  white-space: nowrap;
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
  border: none;
  text-decoration: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
@media screen and (max-width: 768px) {
  .st_wrap {
    padding: 0 16px;
    margin: 60px auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
    text-align: center;
  }

  .st_check {
    padding: 16px;
  }

  .st_table {
    width: 90%;
    display: block;
  }

  .st_table th,
  .st_table td {
    display: block;
    width: 90%;
    padding: 8px 0;
    text-align: left;
  }

  .st_table th {
    font-weight: bold;
    background-color: #f2f2f2;
    border-radius: 6px;
  }

  .fix {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 3px;
  }

  .fix span {
    font-size: 14px;
  }

  .st_reser {
    font-size: 15px;
    padding: 12px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 390px) {
  .st_wrap {
    padding: 0 12px;
    margin: 40px auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
  }

  .st_check {
    padding: 12px;
  }

  .st_table th,
  .st_table td {
    font-size: 14px;
    padding: 6px 0;
  }

  .fix span {
    font-size: 13px;
  }

  .st_reser {
    font-size: 15px;
    padding: 12px;
    margin-top: 20px;
  }
}
</style>
