<script setup>
import { useReservationStore } from "../../stores/reservationStore";
import { useRoute } from "vue-router";

const reservationStore = useReservationStore();
const route = useRoute();

// 쿼리로 전달된 결제 수단
const payment = route.query.payment;

// 보기 좋게 이름으로 변환
const paymentNames = {
  bank: "계좌이체",
  card: "카드결제",
  kakao: "카카오페이",
  naver: "네이버페이",
};
</script>
<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1">
        <h1>예약완료</h1>
      </div>
    </div>

    <div class="st_check">
      <table class="st_table">
        <tbody>
          <tr>
            <th>
              <span class="fix"
                ><span>예</span><span>약</span><span>번</span><span>호</span
                ><span>:</span></span
              >
            </th>
            <td>
              {{
                "R" + Date.now().toString() + Math.floor(Math.random() * 1000)
              }}
            </td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>이</span><span>름</span><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.name }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>전</span><span>화</span><span>번</span><span>호</span
                ><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.phone }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>날</span><span>짜</span><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.selectedDate }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>시</span><span>간</span><span>:</span></span
              >
            </th>
            <td>
              {{ reservationStore.selectedHour }}시
              {{ reservationStore.selectedMinute }}분
            </td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>출</span><span>발</span><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.selectedStart }}</td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>도</span><span>착</span><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.selectedStop }}</td>
          </tr>
          <tr>
            <th rowspan="{{ reservationStore.sizes.length }}" class="th-bag">
              <span class="fix"
                ><span>가</span><span>방</span><span>수</span><span>량</span
                ><span>:</span></span
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
              <span class="fix"
                ><span>총</span><span>금</span><span>액</span
                ><span>:</span></span
              >
            </th>
            <td>{{ reservationStore.totalPrice.toLocaleString() }}원</td>
          </tr>
          <tr>
            <th>
              <span class="fix"
                ><span>결</span><span>제</span><span>방</span><span>식</span
                ><span>:</span></span
              >
            </th>
            <td>{{ paymentNames[payment] || "선택되지 않음" }}</td>
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
    font-size: 14px;
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

  .st_reser {
    font-size: 15px;
    padding: 12px;
    margin-top: 20px;
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
  .title_txt1 h1 {
    font-size: 25px;
  }

  button {
    font-size: 16px;
    padding: 0.75rem;
  }
}
</style>
