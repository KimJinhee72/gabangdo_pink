<script setup>
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const reservationNumber = ref("");
const telPrefix = ref("010");
const middlePhone = ref(""); // 8자리 입력

const toastMessage = ref("");
const toastTargetIndex = ref(null);

const router = useRouter();

const showToast = (message, index) => {
  toastMessage.value = message;
  toastTargetIndex.value = index;
  setTimeout(() => {
    toastMessage.value = "";
    toastTargetIndex.value = null;
  }, 3000);
};

const handleLookup = () => {
  if (!name.value) {
    showToast("이름을 입력해주세요.", 0);
    return;
  }
  if (middlePhone.value.length !== 8) {
    showToast("연락처를 정확히 입력해주세요.", 1);
    return;
  }
  if (!reservationNumber.value) {
    showToast("예약번호를 입력해주세요.", 2);
    return;
  }

  const fullPhone = `${telPrefix.value}-${middlePhone.value}`;
  console.log("최종 전화번호:", fullPhone);

  router.push("/yeyaklookup2");
};
</script>

<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1">
        <h1>예약조회</h1>
      </div>
    </div>

    <div class="st_line">
      <!-- 이름 입력 -->
      <div class="container">
        <div class="tooltip-container">
          <input
            class="st_name"
            v-model="name"
            type="text"
            placeholder="이름을 입력해주세요." />
          <transition name="fade">
            <div v-if="toastTargetIndex === 0" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </transition>
        </div>

        <!-- 연락처 입력 -->
        <div class="tooltip-container st_phone-wrapper">
          <div class="st_phone-group">
            <select v-model="telPrefix" class="st_phone-select">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            <input
              v-model="middlePhone"
              maxlength="8"
              class="st_phone-single"
              placeholder="010을 제외한 번호를 입력해주세요." />
          </div>
          <transition name="fade">
            <div v-if="toastTargetIndex === 1" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </transition>
        </div>

        <!-- 예약번호 입력 -->
        <div class="tooltip-container">
          <input
            class="st_look"
            v-model="reservationNumber"
            type="text"
            placeholder="예약번호를 입력해주세요." />
          <transition name="fade">
            <div v-if="toastTargetIndex === 2" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </transition>
        </div>
      </div>
      <!-- 조회 버튼 -->
      <button class="st_reser" @click="handleLookup">조회하기</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

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

.st_line {
  width: 100%;
  padding: 20px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 380px;
  margin: 10px auto;
}
.tooltip-container {
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.st_name,
.st_look {
  width: 100%;
  height: 44px;
  padding: 10px;
  margin: 8px auto;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  box-sizing: border-box;
}

input,
select {
  width: 100%;
  height: 44px;
  padding: 10px;
  margin: 5px auto;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  box-sizing: border-box;
}

.st_phone-wrapper {
  display: flex;
  flex-direction: column;
}

.st_phone-group {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin: 10px auto;

  select {
    width: 80px; // 010 선택 부분은 고정 너비
    text-align: center;
    height: 44px;
    border-radius: 10px;
    padding: 6px;
    border: 1px solid #b5b5b5;
  }

  input {
    flex: 1;
    width: calc($base-width - 90px); // 80px (select의 너비)만큼 차감
    height: 44px;
    border-radius: 10px;
    padding: 6px 10px;
    border: 1px solid #b5b5b5;
  }

  span {
    font-size: 18px;
    font-weight: bold;
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
.tooltip-bottom {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background-color: #ff4d4f;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid red;
  z-index: 10;
  animation: float 1.8s ease-in-out infinite;
}

.tooltip-bottom::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 20px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ff4d4f;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0px);
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
  .tooltip-container {
    max-width: 100%;
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 20px;
  }

  .st_name,
  .st_look {
    font-size: 14px;
    height: 42px;
  }

  input,
  select {
    font-size: 14px;
    height: 42px;
  }
}

@media (max-width: 390px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .tooltip-bottom {
    font-size: 12px;
    padding: 4px 10px;
    margin-top: 4px;
  }

  .tooltip-bottom::before {
    left: 16px;
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
