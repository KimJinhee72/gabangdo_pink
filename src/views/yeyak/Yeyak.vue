<script setup>
import { ref } from "vue";

const dataUsageList = ref([
  {
    title: "개인정보이용내역",
    purpose: `본 예약 서비스는 원활한 예약 처리 및 고객 응대를 위해 이름과 전화번호를 수집합니다. 수집된 개인정보는 예약 일정 확인, 이용자 본인 여부 확인, 서비스 제공을 위한 연락 등 정해진 목적 내에서만 이용되며, 해당 목적이 달성된 후에는 즉시 파기됩니다. 구체적으로는 예약이 완료되고 서비스가 제공된 후 1개월 간 보관되며, 이후에는 재생이 불가능한 방식으로 안전하게 삭제됩니다. 이용자는 개인정보 제공에 동의하지 않을 권리가 있으나, 동의하지 않을 경우 예약 서비스 이용이 제한될 수 있습니다.
`,
    dataItems: "개인정보이용내역에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용약관",
    purpose: `제1조 (목적)  
이 약관은 [가방도]에서 제공하는 예약 서비스의 이용 조건 및 절차, 이용자와 회사 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (서비스의 제공)  
회사는 이용자에게 사전예약, 일정 확인, 예약 정보 제공 등의 서비스를 제공합니다.

제3조 (이용자의 의무)  
이용자는 본 서비스를 이용함에 있어 다음 각 호의 행위를 해서는 안 됩니다.  
1. 타인의 정보를 도용하거나 허위 정보를 입력하는 행위  
2. 서비스 운영을 방해하는 행위  
3. 법령 또는 공서양속에 반하는 행위

제4조 (개인정보 수집 및 보호)  
회사는 서비스 제공을 위해 최소한의 개인정보를 수집하며, 수집된 정보는 관련 법령에 따라 안전하게 관리됩니다. 개인정보 수집 및 이용에 대한 자세한 사항은 개인정보처리방침을 따릅니다.

제5조 (면책조항)  
천재지변, 통신장애 등 회사의 책임 없는 사유로 서비스를 제공할 수 없는 경우, 회사는 이에 대한 책임을 지지 않습니다.

제6조 (약관의 변경)  
회사는 필요한 경우 약관을 변경할 수 있으며, 변경 시 사전에 공지합니다. 변경된 약관은 공지 시 명시된 시행일부터 효력이 발생합니다.

제7조 (준거법 및 재판관할)  
본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련된 분쟁은 회사 본사 소재지를 관할하는 법원을 제1심 법원으로 합니다.
`,
    dataItems: "이용약관에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용시 주의사항",
    purpose: `본 서비스는 고객님의 편의를 위해 사전예약 방식으로 운영됩니다. 예약은 최소 이용 1시간 전까지 완료해주시기 바라며, 예약 후 변경이나 취소가 필요한 경우 고객센터를 통해 반드시 사전에 연락주시기 바랍니다.

고객님의 부주의로 인한 시간 지연, 연락 두절, 정확하지 않은 정보 입력 등으로 발생하는 불이익에 대해서는 당사가 책임지지 않습니다.

서비스 이용 시 기재한 연락처로 안내 메시지 또는 확인 전화를 드릴 수 있으므로, 정확한 정보를 입력해주시기 바랍니다.

천재지변, 시스템 장애 등 불가피한 사유로 인해 서비스가 지연되거나 취소될 수 있으며, 이 경우 고객님께 별도 안내를 드립니다.

예약 후 무단으로 서비스를 이용하지 않으실 경우, 이후 예약 제한이 발생할 수 있으니 유의해주시기 바랍니다.
`,
    dataItems: "주의사항을 숙지하였습니다.",
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
      <!-- 제목 스타일 -->

      <!-- 제목 -->
      <div class="title_txt1">
        <h1>예약하기</h1>
      </div>
    </div>
    <!-- 이미지 영역 -->
    <div class="st_img">
      <img src="/images/cr/st_reservation01.jpg" alt="사전예약" />
      <img src="/images/cr/st_reservation02.jpg" alt="일반예약" />
    </div>

    <!-- toggle -->
    <div class="st_toggle">
      <div
        v-for="(item, index) in dataUsageList"
        :key="index"
        class="st_togglemenu">
        <div @click="toggleDetails(index)" class="st_toggleheader">
          <span class="st_toggletitle">{{ item.title }}</span>
          <span @click="toggleDetails(index)" class="st_togglebtn">
            {{ item.isOpen ? "▲" : "▼" }}
          </span>
        </div>

        <!-- 토글 내용 -->
        <div v-if="item.isOpen" class="st_details">
          <p class="yy_purpose">{{ item.purpose }}</p>
        </div>
        <div class="st_checkbox">
          <label>
            {{ item.dataItems }}
            <input type="checkbox" v-model="item.isChecked" />
          </label>
        </div>
      </div>
    </div>
    <div class="st_button">
      <router-link to="/yeyak2" class="st_reser">사전예약</router-link>
      <router-link to="/yeyak3" class="st_reser">당일예약</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 700px;
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

.st_img {
  margin-bottom: $margin-m;
}

img {
  margin: $margin-sss;
}
.st_toggle {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.st_togglemenu {
  width: 100%;
}

.st_toggleheader {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #c6eeff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.st_togglebtn {
  font-size: 13px;
  cursor: pointer;
}
.yy_purpose {
  text-align: left;
}
.st_details {
  margin-top: 10px;
  padding: 10px;
}

.st_checkbox {
  margin: 10px auto;
  width: 90%;
}

.st_checkbox label {
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: flex-end;
}

.st_checkbox input {
  margin-right: 8px;
}
.st_button {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.st_reser {
  display: inline-block;
  padding: 12px 24px;
  background-color: $main-color;
  color: white;
  font-size: 16px;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s;
}

.st_reser:hover {
  background-color: $hover;
}
@media (max-width: 768px) {
  .st_wrap {
    width: 90%;
    margin: 50px auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
  }

  .st_reser {
    width: 100%;
    font-size: 16px;
  }

  .st_toggleheader {
    font-size: 15px;
    padding: 8px;
  }

  .yy_purpose {
    font-size: 14px;
  }

  .st_checkbox label {
    font-size: 14px;
  }

  .st_button {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
}

@media (max-width: 390px) {
  .st_wrap {
    width: 95%;
    margin: 30px auto;
  }

  .yy_title1 .title_txt1 h1 {
    font-size: 25px;
  }

  .st_toggleheader {
    font-size: 14px;
  }

  .yy_purpose {
    font-size: 13px;
  }

  .st_checkbox label {
    font-size: 13px;
  }

  .st_reser {
    font-size: 15px;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
