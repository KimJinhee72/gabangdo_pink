<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const toastMessage = ref("");
const toastTargetIndex = ref(null);

const showToast = (message, index) => {
  toastMessage.value = message;
  toastTargetIndex.value = index;
  setTimeout(() => {
    toastMessage.value = "";
    toastTargetIndex.value = null;
  }, 3000);
};

const goToReservation = (routeName) => {
  const firstUncheckedIndex = dataUsageList.value.findIndex(
    (item) => !item.isChecked
  );
  if (firstUncheckedIndex !== -1) {
    showToast("이 항목에 동의해주세요.", firstUncheckedIndex);
    return;
  }

  router.push(`/${routeName}`);
};

const dataUsageList = ref([
  {
    title: "개인정보이용내역",
    color: "#E3F2FD",
    purpose: `
  본 예약 서비스는 원활한 예약 처리 및 고객 응대를 위해 이름과 전화번호를 수집합니다.<br><br>
  수집된 개인정보는 예약 일정 확인, 이용자 본인 여부 확인, 서비스 제공을 위한 연락 등 정해진 목적 내에서만 이용되며, 해당 목적이 달성된 후에는 즉시 파기됩니다.<br><br>
  구체적으로는 예약이 완료되고 서비스가 제공된 후 1개월 간 보관되며, 이후에는 재생이 불가능한 방식으로 안전하게 삭제됩니다.<br><br>
  이용자는 개인정보 제공에 동의하지 않을 권리가 있으나, 동의하지 않을 경우 예약 서비스 이용이 제한될 수 있습니다.
`,
    dataItems: "개인정보 수집에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용약관",
    color: "#FFF3E0",
    purpose: `
 제1조 (목적)<br>
이 약관은 [가방도]에서 제공하는 예약 서비스의 이용 조건 및 절차, 이용자와 회사 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.<br><br>

제2조 (서비스의 제공)<br>
회사는 이용자에게 사전예약, 일정 확인, 예약 정보 제공 등의 서비스를 제공합니다.<br><br>

제3조 (이용자의 의무)<br>
이용자는 본 서비스를 이용함에 있어 다음 각 호의 행위를 해서는 안 됩니다.<br>
- 타인의 정보를 도용하거나 허위 정보를 입력하는 행위<br>
- 서비스 운영을 방해하는 행위<br>
- 법령 또는 공서양속에 반하는 행위<br><br>

제4조 (개인정보 수집 및 보호)<br>
회사는 서비스 제공을 위해 최소한의 개인정보를 수집하며, 수집된 정보는 관련 법령에 따라 안전하게 관리됩니다. 개인정보 수집 및 이용에 대한 자세한 사항은 개인정보처리방침을 따릅니다.<br><br>

제5조 (면책조항)<br>
천재지변, 통신장애 등 회사의 책임 없는 사유로 서비스를 제공할 수 없는 경우, 회사는 이에 대한 책임을 지지 않습니다.<br><br>

제6조 (약관의 변경)<br>
회사는 필요한 경우 약관을 변경할 수 있으며, 변경 시 사전에 공지합니다. 변경된 약관은 공지 시 명시된 시행일부터 효력이 발생합니다.<br><br>

제7조 (준거법 및 재판관할)<br>
본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련된 분쟁은 회사 본사 소재지를 관할하는 법원을 제1심 법원으로 합니다.<br>
`,
    dataItems: "이용약관에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용시 주의사항",
    color: "#E8F5E9",
    purpose: `
  본 서비스는 고객님의 편의를 위해 사전예약 방식으로 운영됩니다.<br><br>
  예약은 최소 이용 1시간 전까지 완료해주시기 바라며, 예약 후 변경이나 취소가 필요한 경우 고객센터를 통해 반드시 사전에 연락주시기 바랍니다.<br><br>
  고객님의 부주의로 인한 시간 지연, 연락 두절, 정확하지 않은 정보 입력등으로 발생하는 불이익에 대해서는 당사가 책임지지 않습니다.<br><br>
  서비스 이용 시 기재한 연락처로 안내 메시지 또는 확인 전화를 드릴 수 있으므로, 정확한 정보를 입력해주시기 바랍니다.<br><br>
  천재지변, 시스템 장애 등 불가피한 사유로 인해 서비스가 지연되거나 취소될 수 있으며, 이 경우 고객님께 별도 안내를 드립니다.<br><br>
  예약 후 무단으로 서비스를 이용하지 않으실 경우, 이후 예약 제한이 발생할 수 있으니 유의해주시기 바랍니다.
`,
    dataItems: "주의사항을 모두 확인하였습니다.",
    isOpen: false,
    isChecked: false,
  },
]);

const toggleDetails = (index) => {
  dataUsageList.value[index].isOpen = !dataUsageList.value[index].isOpen;
};
</script>

<template>
  <div class="st_wrap">
    <div class="yy_title1">
      <div class="title_txt1"><h1>예약하기</h1></div>
    </div>
    <div class="st_line">
      <div class="st_img">
        <img src="/images/cr/st_reservation01.jpg" alt="사전예약" />
        <img src="/images/cr/st_reservation02.jpg" alt="일반예약" />
      </div>

      <div class="st_toggle">
        <div
          v-for="(item, index) in dataUsageList"
          :key="index"
          class="st_togglemenu"
          :style="{ backgroundColor: item.color }">
          <div class="st_toggleheader" @click="toggleDetails(index)">
            <span class="st_toggletitle">{{ item.title }}</span>
            <span class="st_togglebtn">
              <img
                :src="item.isOpen ? '/images/cr/up.png' : '/images/cr/down.png'"
                alt="toggle" />
            </span>
          </div>

          <transition name="fade-slide">
            <div v-if="item.isOpen" class="st_details">
              <div class="yy_purpose" v-html="item.purpose"></div>
            </div>
          </transition>

          <transition name="fade-bubble">
            <div
              v-if="toastTargetIndex === index && toastMessage"
              class="toast-bubble">
              {{ toastMessage }}
            </div>
          </transition>

          <div class="st_checkbox">
            <label class="checkbox-label">
              <input type="checkbox" v-model="item.isChecked" />
              <span class="label-text">{{ item.dataItems }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="st_button">
        <button class="st_reser" @click="goToReservation('yeyak2')">
          사전예약
        </button>
        <button class="st_reser" @click="goToReservation('yeyak3')">
          당일예약
        </button>
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

.st_img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.st_img img {
  width: 90%;
  max-width: 300px;
  margin: 10px;
}
.st_toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
}

.st_togglemenu {
  margin-top: 16px;
  margin-bottom: 16px; // 살짝만 여유 있게
  border-radius: 12px;
  padding: 3px 10px; // 줄여서 슬림하게
  width: 95%;
  max-width: 700px;
}

.st_toggleheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px; // 줄임
  padding: 4px 0; // 불필요한 여백 제거
}

.st_togglebtn img {
  width: 15px;
  height: auto;
}

.st_details {
  text-align: left;
  margin-top: 8px;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.yy_purpose {
  font-size: 14px;
  line-height: 1.5;
}
.st_checkbox {
  display: flex;
  justify-content: flex-end; // 전체 우측 정렬
  width: 100%;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px; // 간격 설정
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #1976d2;
}

.label-text {
  font-size: 14px;
  color: #333;
}

.toast-bubble {
  background-color: #ff5252;
  color: white;
  font-size: 14px;
  margin-top: 12px;
  padding: 10px 16px;
  border-radius: 10px;
  position: relative;
  animation: toast-slide 3s ease-in-out;
}

.toast-bubble::after {
  content: "";
  position: absolute;
  top: -8px;
  left: 20px;
  border-width: 0 8px 8px 8px;
  border-style: solid;
  border-color: transparent transparent #ff5252 transparent;
}

.st_button {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.st_reser {
  width: 150px;
  height: 50px;
  line-height: 25px;
  margin: 20px 20px;
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

@keyframes toast-slide {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-6px);
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-bubble-enter-active,
.fade-bubble-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-bubble-enter-from,
.fade-bubble-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
@media (max-width: 768px) {
  .st_line {
    padding: 15px;
    width: 90%;
  }
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 15px;
  }

  .st_toggleheader {
    font-size: 15px;
    padding: 5px;
  }
  .st_checkbox {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end; // ✅ 우측 정렬
    padding-right: 0; // ✅ 오른쪽 여백 없애기
    position: relative;
  }
  .yy_purpose {
    font-size: 14px;
  }

  .st_checkbox label {
    font-size: 14px;
  }
  .st_img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .st_img img {
    width: 100%;
    max-width: 280px;
    height: auto;
  }

  .st_button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 390px) {
  .yy_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_toggleheader {
    font-size: 14px;
  }
  .st_checkbox {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end; // ✅ 우측 정렬
    padding-right: 0; // ✅ 오른쪽 여백 없애기
    position: relative;
  }
  .yy_purpose {
    font-size: 13px;
  }

  .st_checkbox label {
    font-size: 13px;
  }
  .st_reser {
    width: 150px;
    height: 50px;
    line-height: 25px;
    font-size: 16px;
    padding: 12px 24px;
    margin-top: 10px;
  }
  .st_img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .st_img img {
    width: 80%;
    height: auto;
  }
  .st_button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
