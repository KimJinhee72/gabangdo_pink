<template>
  <section class="Mamodal" id="MaModalid" v-if="isModalVisible">
    <div class="modal_content">
      <!-- <img src="/public/images/ma/ma_modal/modal.png" alt="모달이미지" /> -->
      <img src="/public/images/gh/ma_modal/modal.png" alt="모달이미지" />
      <a class="close_modal" @click="close_modall">
        <!-- <img src="/public/images/ma/ma_modal/x.png" alt="모달 x아이콘" /> -->
        <img src="/public/images/gh/ma_modal/x.png" alt="모달 x아이콘" />
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";

// 모달 상태를 반응형으로 관리
const isModalVisible = ref(false);

// 모달 열기
const openModal = () => {
  isModalVisible.value = true;
};

// 모달 닫기
const close_modall = () => {
  isModalVisible.value = false;
};

// 페이지 로드 시 모달을 열어둘 경우 (예: 테스트용으로)
onMounted(() => {
  openModal();
});
</script>
<style scoped>
/* 모달 background */
.Mamodal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 99999;
  display: none;
}
/* 모달창 */
.modal_content {
  /* background: white; */
  padding: 20px;
  text-align: center;
  position: relative;
}
.modal_content img {
  display: block; /* 이미지의 하단 여백 제거 */
  margin: 0;
}
/* 모달-닫기버튼 */
.close_modal {
  position: absolute;
  top: 48px;
  right: 55px;
  cursor: pointer;
  margin-top: 0;
}
/* 반응형 - 타블렛 (700px) */
@media screen and (max-width: 700px) {
  /* 모달이미지 */
  .modal_content {
    width: 480px;
  }
  .modal_content img {
    width: 100%;
  }
}
/* 반응형 - (500px) */
@media screen and (max-width: 500px) {
  /* 모달이미지 */
  .modal_content {
    width: 370px;
  }
  .modal_content img {
    width: 100%;
  }
}
</style>
