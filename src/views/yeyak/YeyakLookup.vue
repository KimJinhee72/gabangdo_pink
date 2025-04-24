<script setup>
import { ref, nextTick, computed } from "vue";
import { useRouter } from "vue-router";

const name = ref("");
const reservationNumber = ref("");

const telPrefix = ref("010");
const middlePhone = ref("");
const lastPhone = ref("");

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

const moveFocus = (event, nextRef) => {
  if (event.target.value.length >= event.target.maxLength) {
    nextTick(() => {
      nextRef?.focus();
    });
  }
};

const handleLookup = () => {
  console.log("조회하기 클릭됨");
  if (!name.value) {
    showToast("이름을 입력해주세요.", 0);
    return;
  }
  if (middlePhone.value.length !== 4 || lastPhone.value.length !== 4) {
    showToast("연락처를 정확히 입력해주세요.", 1);
    return;
  }
  if (!reservationNumber.value) {
    showToast("예약번호를 입력해주세요.", 2);
    return;
  }

  const fullPhone = `${telPrefix.value}-${middlePhone.value}-${lastPhone.value}`;
  console.log("최종 전화번호:", fullPhone);
};
</script>

<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1">
        <h1>예약조회</h1>
      </div>
    </div>
    <div class="st_lookup">
      <div class="tooltip-container">
        <input class="st_name" v-model="name" type="text" placeholder="이름" />
        <transition name="fade">
          <div v-if="toastTargetIndex === 0" class="tooltip-bottom">
            {{ toastMessage }}
          </div>
        </transition>
      </div>

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
          <span>-</span>
          <input
            v-model="middlePhone"
            maxlength="4"
            class="st_phone-input"
            placeholder="1234"
            ref="middlePhoneRef"
            @input="moveFocus($event, lastPhoneRef)" />
          <span>-</span>
          <input
            type="text"
            v-model="lastPhone"
            maxlength="4"
            class="st_phone-input"
            placeholder="5678"
            ref="lastPhoneRef" />
          <transition name="fade">
            <div v-if="toastTargetIndex === 1" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </transition>
        </div>

        <div class="tooltip-container">
          <input
            class="st_look"
            v-model="reservationNumber"
            type="text"
            placeholder="예약번호" />
          <transition name="fade">
            <div v-if="toastTargetIndex === 2" class="tooltip-bottom">
              {{ toastMessage }}
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- router-link로 변경, 클릭 시 예약조회2 페이지로 이동 -->
    <router-link
      :to="'/yeyaklookup2'"
      class="st_reser"
      @click.native="handleLookup">
      조회하기
    </router-link>
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
  height: 100vh;
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
    font-size: 40px;
    font-family: "omyu_pretty";
  }
}
.st_lookup {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  border: 1px solid #007bff;
  box-shadow: $box-shadow;
  border-radius: 30px;
  padding: 30px 0;
  margin: 0 auto;
}

.tooltip-container {
  width: 100%;
  max-width: 350px;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.st_name,
.st_look {
  width: 100%;
  max-width: 350px;
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
  max-width: 350px; // base-width가 350px일 경우
  height: 44px;
  padding: 10px;
  margin: 8px auto;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  box-sizing: border-box;
}

span {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.st_phone-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.st_phone-group {
  display: flex;
  width: 100%;
  max-width: 350px;
  margin: 8px auto;
  gap: 8px;
}
.st_phone-select {
  width: 80px; // 고정
}

.st_phone-input {
  flex-grow: 1;
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
  width: 0;
  height: 0;
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
@media screen and (max-width: 768px) {
  .st_wrap {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_lookup {
    border-radius: 16px;
    width: 90%;
  }

  .tooltip-container {
    width: 100%;
  }

  .tooltip-bottom {
    font-size: 13px;
    padding: 6px 10px;
    left: 4px;
  }
  .st_reser {
    font-size: 15px;
    padding: 12px 24px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 390px) {
  .st_wrap {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }
  .st_name,
  .st_look {
    width: 80%; /* 100%에서 80%로 변경 */
    max-width: 280px; /* 350px의 80%로 설정 */
    height: 44px;
    padding: 10px;
    margin: 8px auto;
    border: 1px solid #b5b5b5;
    border-radius: 10px;
    box-sizing: border-box;
  }

  input,
  select {
    width: 80%; /* 100%에서 80%로 변경 */
    max-width: 280px; /* 350px의 80%로 설정 */
    height: 44px;
    padding: 10px;
    margin: 8px auto;
    border: 1px solid #b5b5b5;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .st_phone-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .st_phone-group {
    display: flex;
    width: 80%; /* 100%에서 80%로 변경 */
    max-width: 280px; /* 350px의 80%로 설정 */
    margin: 8px auto;
    gap: 8px;
  }

  .st_phone-select {
    width: 64px; /* 80px의 80%로 변경 */
  }

  .st_phone-input {
    flex-grow: 1;
  }
  .tooltip-bottom {
    font-size: 12px;
    padding: 5px 8px;
    left: 2px;
  }

  .tooltip-bottom::before {
    left: 14px;
  }
  .st_reser {
    font-size: 15px;
    padding: 12px 24px;
    margin-top: 20px;
  }
}
</style>
