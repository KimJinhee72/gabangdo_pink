<script setup>
import { ref, computed } from "vue";

// 태그 정보
const tags = ref([{ name: "⭐⭐⭐⭐⭐" }]);

// 상품 목록
const products = ref([
  {
    name: "김철수",
    image: "/images/cr/st_review01.jpg",
    content: "정말 친절하고 빠른 서비스였습니다.",
  },
  {
    name: "이영희",
    image: "/images/cr/st_review02.jpg",
    content: "사용법도 쉬워서 자주 이용할 것 같아요.",
  },
  {
    name: "박지훈",
    image: "/images/cr/st_review03.jpg",
    content: "기대 이상으로 만족스러웠습니다!",
  },
  {
    name: "최민수",
    image: "/images/cr/st_review04.jpg",
    content: "직원분들이 너무 친절했어요.",
  },
  {
    name: "장서연",
    image: "/images/cr/st_review05.jpg",
    content: "처음 이용해봤는데 좋네요.",
  },
  {
    name: "한가은",
    image: "/images/cr/st_review06.jpg",
    content: "배송이 정확하고 빠릅니다.",
  },
  {
    name: "정우성",
    image: "/images/cr/st_review07.jpg",
    content: "매우 만족합니다. 다음에도 또 이용할게요.",
  },
  {
    name: "손예진",
    image: "/images/cr/st_review08.jpg",
    content: "친구에게도 추천하고 싶을 정도예요.",
  },
  {
    name: "유재석",
    image: "/images/cr/st_review09.jpg",
    content: "정확하고 빠른 서비스에 감동받았습니다.",
  },
  {
    name: "강호동",
    image: "/images/cr/st_review10.jpg",
    content: "간편하게 예약할 수 있어서 좋았어요.",
  },
  {
    name: "신동엽",
    image: "/images/cr/st_review11.jpg",
    content: "전체적으로 만족스러운 경험이었습니다.",
  },
  {
    name: "이효리",
    image: "/images/cr/st_review12.jpg",
    content: "정말 편리하게 이용할 수 있었어요.",
  },
  {
    name: "홍길동",
    image: "/images/cr/st_review13.jpg",
    content: "설명도 자세하고 문의도 잘 응대해주셨어요.",
  },
  {
    name: "이수리",
    image: "/images/cr/st_review14.jpg",
    content: "처음엔 걱정했지만 결과적으로 만족!",
  },
  {
    name: "박정식",
    image: "/images/cr/st_review15.jpg",
    content: "원하는 날짜에 정확히 도착했어요.",
  },
  {
    name: "최가을",
    image: "/images/cr/st_review16.jpg",
    content: "예상보다 빠르게 처리돼서 놀랐어요.",
  },
  {
    name: "장성규",
    image: "/images/cr/st_review17.jpg",
    content: "시스템이 잘 되어 있어서 편리합니다.",
  },
  {
    name: "한동준",
    image: "/images/cr/st_review18.jpg",
    content: "예약부터 수령까지 전혀 불편함이 없었어요.",
  },
  {
    name: "정유리",
    image: "/images/cr/st_review19.jpg",
    content: "간단한 절차로 쉽게 완료할 수 있었습니다.",
  },
  {
    name: "손석구",
    image: "/images/cr/st_review20.jpg",
    content: "기대하지 않았는데 서비스 좋아요!",
  },
  {
    name: "이미정",
    image: "/images/cr/st_review21.jpg",
    content: "직관적인 UI 덕분에 쉽게 예약했습니다.",
  },
  {
    name: "강동식",
    image: "/images/cr/st_review22.jpg",
    content: "자세한 설명과 빠른 피드백이 좋았어요.",
  },
  {
    name: "신나라",
    image: "/images/cr/st_review23.jpg",
    content: "서비스가 너무 좋아서 다음에도 이용할 생각입니다.",
  },
  {
    name: "이아정",
    image: "/images/cr/st_review24.jpg",
    content: "배송이 예상보다 빨라서 기분 좋았어요.",
  },
]);

// 이름 마스킹 (ex: 홍길동 → 홍**)
const maskedName = (name) => name.charAt(0) + "*".repeat(name.length - 1);

// 페이지네이션 상태
const currentPage = ref(1);
const itemsPerPage = 8; // 한 페이지당 8개 상품 표시

// 총 페이지 수 계산
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// 현재 페이지에 맞는 상품 목록 반환
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

// 페이지 이동 함수
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const showForm = ref(false);
const newReview = ref({
  name: "",
  content: "",
  image: "",
});
const previewImage = ref("");

// 등록된 후기 목록
const reviews = ref([]);

// 후기 추가
const addReview = () => {
  if (!newReview.value.name || !newReview.value.content) {
    alert("이름과 후기를 작성해주세요.");
    return;
  }
  const newItem = {
    name: newReview.value.name,
    image: newReview.value.image || "/images/default-user.png",
  };
  // products 목록 앞에 추가
  products.value.unshift(newItem);
  cancelForm();
};

// 이미지 업로드 처리
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.value = reader.result;
    newReview.value.image = reader.result;
  };
  reader.readAsDataURL(file);
};

const cancelForm = () => {
  newReview.value = { name: "", content: "", image: "" };
  previewImage.value = "";
  showForm.value = false;
};
//모달
const showModal = ref(false);
const selectedReview = ref(null);

const openModal = (review) => {
  selectedReview.value = review;
  showModal.value = true;
};

const closeModal = () => {
  selectedReview.value = null;
  showModal.value = false;
};
</script>

<template>
  <div class="st_wrap">
    <div class="st_title1">
      <!-- 제목 -->
      <div class="title_txt1">
        <h1>이용후기</h1>
      </div>
    </div>

    <!-- 리뷰 배너 -->
    <div class="st_reviewbanner">
      <img src="/images/cr/st_reviewbanner.jpg" alt="리뷰이벤트" />
    </div>

    <!-- 카드이용후기 -->
    <div class="st_bottom">
      <div class="st_card-container">
        <div
          class="st_card"
          v-for="product in paginatedProducts"
          :key="product.image"
          @click="openModal(product)">
          <div class="st_img-product">
            <img :src="product.image" alt="Product" />
          </div>
          <div class="st_detail">
            <div class="st_title">
              <div class="st_tag">
                <a v-for="tag in tags" :href="tag.link" :key="tag.name">
                  <span>{{ tag.name }}</span>
                </a>
              </div>
              <div class="st_text">
                <h6>{{ maskedName(product.name) }}님의 이용후기입니다</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="write-btn-wrapper">
        <!-- 글쓰기 버튼 -->
        <button @click="showForm = !showForm" class="write-btn">
          {{ showForm ? "취소" : "글쓰기" }}
        </button>

        <!-- 글쓰기 폼 -->
        <form v-if="showForm" class="review-form">
          <input type="text" v-model="newReview.name" placeholder="이름" />
          <textarea
            v-model="newReview.content"
            placeholder="후기내용"></textarea>
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <img v-if="previewImage" :src="previewImage" width="120" />
          <div class="form-buttons">
            <button type="button" @click="addReview">등록</button>
            <button type="button" @click="cancelForm">취소</button>
          </div>
        </form>
      </div>
      <!-- 페이지네이션 버튼 -->
      <div class="st_pagination">
        <button @click="prevPage" :disabled="currentPage === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          다음
        </button>
      </div>
    </div>
  </div>
  <!-- 모달창 내용 -->
  <div class="st_modal">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h3>✨{{ maskedName(selectedReview.name) }}님의 이용후기✨</h3>
        <img :src="selectedReview.image" alt="후기 이미지" />
        <p><strong></strong> {{ selectedReview.content || "내용 없음" }}</p>
        <button @click="closeModal">닫기</button>
      </div>
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

.st_title1 {
  display: flex;
  gap: 10px;
  line-height: 40px;
  flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  padding-bottom: 10px;
  .st_titleLine {
    width: 3px;
    height: 25px;
    background-color: $main-color;
  }
  .title_txt1 h1 {
    font-size: 25px;
  }
}
// 리뷰 배너
.st_reviewbanner {
  justify-content: center;
  margin-bottom: $margin-L;
}

img {
  width: 90%;
  height: 90%;
}

// 리뷰 카드
.st_card-container {
  width: 800px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  font-family: none;
}

.st_card {
  width: 180px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.st_card:hover {
  transform: scale(1.08);
}

.st_card .st_img-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
}

.st_card .st_img-product img {
  height: 90%;
  width: 90%;
  border-radius: 10px;
}

.st_detail {
  height: 30%;
  padding-left: 5px;
}

.st_title {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  flex-direction: column;
}
.st_text {
  display: flex;
  align-items: baseline;
}

h6 {
  margin-top: 5px;
  font-size: 13px;
}
.st_tag a {
  padding: 5px auto;
  font-size: 10px;
  color: black;

  border-radius: 20px;
  text-decoration: none;
}

/* 페이지네이션 스타일 */
.st_pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.st_pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: $sub-color;
  color: #fff;
}

.st_pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
/* 글쓰기 버튼 */
.write-btn-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
  margin-bottom: 20px;
}

.write-btn {
  padding: 8px 16px;
  margin: 10px;
  background-color: $main-color;
  width: 100px;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
}

.review-form input,
.review-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.st_modal {
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    text-align: center;

    img {
      width: 100%;
      border-radius: 10px;
      margin: 10px 0;
    }

    button {
      margin-top: 10px;
      background-color: $sub-color;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}
@media (max-width: 768px) {
  .st_wrap {
    width: 100%;
    padding: 0 24px;
  }

  .title_txt1 h1 {
    font-size: 22px;
  }

  .st_reviewbanner img {
    width: 100%;
    height: auto;
  }

  .st_card-container {
    width: 100%;
    gap: 16px;
    justify-content: center;
  }

  .st_card {
    width: 280px;
    height: 400px;
  }

  .st_card .st_img-product img {
    width: 100%;
    height: 100%;
  }

  .write-btn {
    width: 90px;
    font-size: 15px;
  }

  .review-form {
    width: 100%;
  }

  .review-form input,
  .review-form textarea {
    font-size: 15px;
  }

  .form-buttons {
    gap: 8px;
  }

  .st_pagination {
    flex-wrap: wrap;
    gap: 10px;

    button {
      font-size: 14px;
      padding: 6px 10px;
    }
  }

  .modal-content {
    width: 90%;
    font-size: 15px;

    img {
      max-height: 240px;
      object-fit: contain;
    }

    button {
      font-size: 15px;
    }
  }
}

@media (max-width: 390px) {
  .st_wrap {
    width: 100%;
    margin: 100px auto;
    padding: 0 16px;
  }

  .st_card-container {
    width: 100%;
    gap: 12px;
    justify-content: center;
  }

  .st_card {
    width: 45%;
    height: 260px;
  }

  .st_card .st_img-product img {
    width: 100%;
    height: 100%;
  }

  .title_txt1 h1 {
    font-size: 25px;
  }

  .write-btn {
    width: 80px;
    font-size: 14px;
    padding: 6px 12px;
  }

  .review-form {
    width: 100%;
  }

  .review-form input,
  .review-form textarea {
    font-size: 14px;
  }

  .st_pagination {
    gap: 6px;
  }

  .modal-content {
    width: 90%;
    font-size: 14px;

    img {
      max-height: 200px;
      object-fit: contain;
    }

    button {
      font-size: 14px;
      padding: 6px 12px;
    }
  }
}
</style>
