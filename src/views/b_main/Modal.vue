<template>
  <section class="Mamodal" v-if="visible">
    <div class="modal_content">
      <img src="/images/gh/ma_modal/modal.png" alt="모달 이미지" />
      <a class="close_modal" @click="$emit('close')">
        <img src="/images/gh/ma_modal/x.png" alt="닫기 아이콘" />
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  visible: Boolean,
});
defineEmits(["close"]);
</script>

<style scoped>
.Mamodal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
}

.modal_content {
  position: relative;
  max-width: 600px;
  width: 100%;
  padding: 20px;
}

.modal_content img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.close_modal {
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
}

.close_modal img {
  width: 24px;
  height: 24px;
}

/* 📱 반응형 - 768px 이하 (태블릿) */
@media screen and (max-width: 768px) {
  .modal_content {
    position: relative;
    max-width: 600px;
    width: 100%;
    padding: 20px;
  }

  .close_modal {
    top: 50px;
    right: 50px;
  }
  .modal_content img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
  .close_modal img {
    width: 25px;
    height: 25px;
  }
}

/* 📱 반응형 - 390px 이하 (모바일) */
@media screen and (max-width: 390px) {
  .modal_content {
    position: relative;
    max-width: 600px;
    width: 100%;
    padding: 10px;
  }

  .close_modal {
    top: 25px;
    right: 25px;
  }
  .modal_content img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
  .close_modal img {
    width: 18px;
    height: 18px;
  }
}
</style>
