<script setup>
import { computed, ref, watch, onMounted } from "vue";
import Modal from "@/views/b_main/Modal.vue"; // 모달 컴포넌트 불러오기

// 스와이프
const slides = ref([
  "/images/cr/st_notice01.jpg",
  "/images/cr/st_notice02.jpg",
  "/images/cr/st_notice03.jpg",
]);
const loopSlides = ref([
  slides.value[slides.value.length - 1],
  ...slides.value,
  slides.value[0],
]);
const position = ref(-100);
const slideWidth = 100;
const isTransitioning = ref(true);

// 자동 슬라이드 이동
const moveSlide = () => {
  position.value -= slideWidth;
  isTransitioning.value = true;

  setTimeout(() => {
    if (position.value <= -slideWidth * (loopSlides.value.length - 1)) {
      position.value = -slideWidth;
      isTransitioning.value = false;
    }
  }, 500);
};

onMounted(() => {
  setInterval(moveSlide, 3000);
});

// ✅ 모달 상태
const isModalVisible = ref(false);

// ✅ 3번 슬라이드 클릭 시 모달 표시
const handleSlideClick = (index) => {
  // loopSlides 인덱스 기준이므로 3번째 원본 이미지의 실제 위치를 계산
  if (index === 3) {
    isModalVisible.value = true;
  }
};

const closeModal = () => {
  isModalVisible.value = false;
};

// 공지사항
const notices = ref([
  {
    title: "가방도 서비스오픈",
    content: "사전예약시 2,000원 할인",
  },
  {
    title: "수하물 크기 제한 변경 안내",
    content:
      "2025년 4월 1일부터 수하물의 크기 제한이 변경됩니다. 기내 수하물은 최대 55cm x 40cm x 20cm로 제한되며, 체크인 수하물은 최대 23kg까지 허용됩니다. 이를 초과하는 수하물은 추가 요금이 부과될 수 있습니다.",
  },
  {
    title: "수하물 보험 서비스 추가 안내",
    content:
      "새롭게 수하물 보험 서비스가 추가되었습니다. 여행 중 분실, 파손, 지연 등 사고에 대비하여 최대 100만원까지 보상받을 수 있습니다. 보험 서비스는 결제 시 선택 가능합니다.",
  },
  {
    title: "수하물 분실 시 처리 절차 안내",
    content:
      "수하물이 분실된 경우, 고객 서비스센터에 즉시 신고해 주세요. 분실된 수하물은 최대 14일 이내에 추적되며, 분실 확인 후 보상 절차가 진행됩니다. 보상 관련 자세한 내용은 홈페이지에서 확인하실 수 있습니다.",
  },
  {
    title: "수하물 규격 초과 시 추가 요금 안내",
    content:
      "수하물 규격 초과 시, 초과된 무게와 크기에 따라 추가 요금이 부과됩니다. 추가 요금은 공항에서 결제 가능하며, 사전 예약을 통해 할인된 가격으로 처리할 수 있습니다.",
  },
  {
    title: "수하물 픽업 서비스 안내",
    content:
      "2025년 5월부터 수하물 픽업 서비스가 도입됩니다. 공항까지 수하물을 가져가실 필요 없이, 집에서 공항까지 수하물을 안전하게 운반해 드리는 서비스입니다. 예약은 웹사이트에서 가능합니다.",
  },
  {
    title: "수하물 지연 안내 및 보상",
    content:
      "수하물이 지연된 경우, 지연된 시간에 따라 보상 정책이 적용됩니다. 3시간 이상 지연된 경우, 식사 및 숙박 비용의 일부를 보상해 드리며, 24시간 이상 지연 시 추가 보상 혜택이 제공됩니다.",
  },
  {
    title: "기내 수하물 제한 품목 안내",
    content:
      "기내 수하물에 반입할 수 없는 품목에 대한 규정이 강화되었습니다. 액체, 젤, 스프레이 등 100ml 이상은 기내 반입이 금지되며, 해당 품목은 반드시 체크인 수하물로 보내셔야 합니다.",
  },
  {
    title: "수하물 안전 검사 강화 안내",
    content:
      "2025년 6월부터 수하물 안전 검사가 강화됩니다. 모든 수하물은 X-ray 검사와 추가적인 수동 검사를 거칠 수 있으며, 검사가 완료되기 전에는 출발이 지연될 수 있습니다. 협조 부탁드립니다.",
  },
  {
    title: "수하물 손상 시 보상 절차 안내",
    content:
      "수하물이 손상된 경우, 공항에서 즉시 신고해야 합니다. 손상된 수하물에 대해서는 최대 50만원까지 보상받을 수 있으며, 보상 절차는 고객 서비스 센터를 통해 진행됩니다.",
  },
  {
    title: "수하물 프리미엄 서비스 출시 안내",
    content:
      "2025년 7월부터 프리미엄 수하물 서비스가 제공됩니다. 우선 처리, 전용 수하물 취급, 추가 보험 서비스 등 다양한 혜택이 포함되어 있으며, 사전 예약을 통해 저렴한 가격에 이용 가능합니다.",
  },
  {
    title: "수하물 보관 서비스 확대 안내",
    content:
      "혼잡한 공항에서의 편의를 위해 수하물 보관 서비스가 확대됩니다. 주요 국제공항 내 신규 보관소가 추가 설치되며, 1일 단위로 이용 요금이 부과됩니다. 자세한 정보는 모바일 앱에서 확인하세요.",
  },
  {
    title: "가방 파손 예방 포장 서비스 제공",
    content:
      "2025년 5월부터 수하물 파손을 방지하기 위한 포장 서비스가 도입됩니다. 내구성이 뛰어난 특수 포장재로 가방을 감싸 손상 위험을 줄이며, 포장 서비스는 체크인 카운터에서 신청할 수 있습니다.",
  },
  {
    title: "애완동물 수하물 운송 서비스 안내",
    content:
      "애완동물과의 여행을 위한 수하물 운송 서비스가 개선되었습니다. 전용 이동장과 적정 온도 유지 시스템을 갖춘 화물칸을 제공하며, 출발 24시간 전까지 사전 예약이 필요합니다.",
  },
  {
    title: "국제선 수하물 무료 허용량 변경",
    content:
      "2025년 8월부터 일부 국제선 노선의 수하물 무료 허용량이 변경됩니다. 노선별로 최대 허용 중량 및 크기가 다르므로, 항공권 예약 시 확인해 주세요. 초과 시 요금이 발생할 수 있습니다.",
  },
  {
    title: "수하물 실시간 위치 추적 기능 제공",
    content:
      "고객 편의를 위해 실시간 수하물 위치 추적 기능이 추가됩니다. 모바일 앱에서 수하물의 현재 위치와 상태를 확인할 수 있으며, 등록된 탑승권과 연동하여 자동 추적됩니다.",
  },
]);
const activeIndex = ref(null);
const currentPage = ref(1);
const itemsPerPage = 7;
const totalPages = computed(() =>
  Math.ceil(notices.value.length / itemsPerPage)
);
const paginatedNotices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return notices.value.slice(start, start + itemsPerPage);
});
watch(currentPage, () => {
  activeIndex.value = null;
});
const toggleNotice = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
  <div class="st_wrap">
    <div class="st_title1">
      <div class="title_txt1">
        <h1>공지사항</h1>
      </div>
    </div>

    <!-- ✅ 슬라이더 -->
    <div class="st_slider-container">
      <div
        class="st_slider-wrapper"
        :style="{
          transform: `translateX(${position}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }">
        <div
          v-for="(slide, index) in loopSlides"
          :key="index"
          class="st_slider-slide">
          <img
            :src="slide"
            alt="슬라이드 이미지"
            @click="handleSlideClick(index)" />
        </div>
      </div>
    </div>

    <!-- ✅ 공지사항 -->
    <div class="st_notice-container">
      <table class="st_notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(notice, index) in paginatedNotices" :key="index">
            <tr @click="toggleNotice(index)" class="st_title-row">
              <td class="st_number">
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td>
                {{ notice.title }}
                <span class="st_toggle-icon">{{
                  activeIndex === index ? "▲" : "▼"
                }}</span>
              </td>
            </tr>
            <tr v-if="activeIndex === index" class="st_content-row">
              <td colspan="2">{{ notice.content }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="st_pagination">
        <button @click="prevPage" :disabled="currentPage === 1">이전</button>
        <button
          class="st_number"
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }">
          {{ page }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          다음
        </button>
      </div>
    </div>

    <!-- ✅ 모달 컴포넌트 -->
    <Modal :visible="isModalVisible" @close="closeModal" />
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
.st_title1 {
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
/*슬라이더*/
.st_slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: $margin-L;
}
.st_slider-wrapper {
  display: flex;
  will-change: transform;
}
.st_slider-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto; // 👉 클릭 활성화
}
.st_slider-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  cursor: pointer; // 👉 커서 모양도 변경
  pointer-events: auto;
}
/*공지사항*/
.st_notice-container {
  max-width: 100%;
  text-align: center;
}
.st_notice-table {
  width: 700px;
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
.st_number {
  text-align: center;
}
th {
  color: #4c4c4c;
}
.st_content-row {
  background-color: #f9f9f9;
  cursor: pointer;
}
.st_toggle-icon {
  float: right;
  font-size: 10px;
  margin-right: 50px;
}
.st_title-row,
.st_content-row {
  text-align: left;
}

.st_pagination {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
button {
  font-family: $font-family;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: $sub-color;
  color: #fff;
}
.st_number {
  background-color: #fff;
  color: #000;
}
button.active {
  color: #333;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
@media screen and (max-width: 768px) {
  .st_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_notice-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .st_notice-table {
    max-width: 90%;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    th,
    td {
      padding: 10px 5px;
      word-break: break-word;
    }

    .st_toggle-icon {
      margin-right: 15px;
    }
  }

  .st_slider-container {
    width: 90%;
    margin-bottom: 20px;
  }

  .st_pagination {
    flex-wrap: wrap;
    gap: 6px;

    button {
      font-size: 13px;
      padding: 6px 10px;
    }
  }
}

@media screen and (max-width: 390px) {
  .st_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }
  .st_notice-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .st_notice-table {
    max-width: 90%;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    th,
    td {
      padding: 10px 5px;
      word-break: break-word;
    }

    .st_toggle-icon {
      margin-right: 10px;
    }
  }

  .st_slider-container {
    width: 90%;
  }

  .st_title1 .title_txt1 h1 {
    font-size: 30px;
    font-family: "omyu_pretty";
    text-align: center;
  }

  .st_pagination {
    flex-wrap: wrap;
    gap: 5px;

    button {
      font-size: 12px;
      padding: 4px 8px;
    }
  }
}
</style>
