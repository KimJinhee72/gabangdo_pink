<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const inputs = ref([
  { label: "이름", value: "", placeholder: "이름" },
  { label: "연락처", value: "", placeholder: "연락처" },
  { label: "예약번호", value: "", placeholder: "예약번호" },
]);

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
  for (let i = 0; i < inputs.value.length; i++) {
    if (!inputs.value[i].value) {
      showToast(`${inputs.value[i].label}을(를) 입력해주세요.`, i);
      return;
    }
  }
  router.push("/yeyaklookup2");
};

</script>
<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>예약조회</h1>
      </div>
    </div>
    <div class="st_lookup">
  <div
    v-for="(input, index) in inputs"
    :key="index"
    class="tooltip-container"
  >
    <input
      v-model="input.value"
      :placeholder="input.placeholder"
      :type="index === 1 ? 'tel' : index === 2 ? 'number' : 'text'"
    />
    <transition name="fade">
      <div v-if="toastTargetIndex === index" class="tooltip-bottom">
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</div>

<button @click="handleLookup">조회하기</button>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
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
.st_lookup {
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
    padding: 30px auto;
    margin: 30px auto;
}

input {
  width: 90%;
  max-width: 300px;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
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
// 에러메세지
.tooltip-container {
  position: relative;
  width: 90%;
  max-width: 300px;
  margin-bottom: 28px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
}

.tooltip-bottom {
  position: absolute;
  top: 100%;
  left: 0; // ✅ 왼쪽 기준 정렬
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

  // ✅ 말풍선 둥둥 애니메이션
  animation: float 1.8s ease-in-out infinite;
}

/* 👇 말풍선 꼬리 */
.tooltip-bottom::before {
  content: "";
  position: absolute;
  top: -6px; /* 말풍선 위쪽에 붙이기 */
  left: 20px; /* 말풍선 왼쪽에서 조금 오른쪽으로 */
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ff4d4f; /* 말풍선 배경색과 동일해야 함 */
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


</style>
