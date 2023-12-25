<script setup>
import FormInput from "./FormInput.vue";

const { isModalOpen } = defineProps(["isModalOpen"]);

const emit = defineEmits();

const closeModal = () => {
  emit("closeModal");
};

const registerForm = "registerForm";

</script>

<template>
  <div :class="{ modalView: true, hidden: !isModalOpen }" class="flex-r">
    <div class="closeModalBtn">
      <button @click="closeModal">
        <img src="../assets/images/icon-close.svg" />
      </button>
    </div>
    <div class="bookImgAttachArea">
      <button><img src="../assets/images/icon-add-b.svg" alt="" /></button>
      <p>本の画像を登録</p>
    </div>
    <FormInput :id="registerForm"/>
  </div>
</template>

<style scoped>
.modalView {
  position: fixed;
  top: -30%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 58%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0px 4px 20px 0px rgba(125, 125, 125, 0.25);
  z-index: 999;
  padding: 2rem;
}

.bookImgAttachArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 418px;
  background: #ccc;
}

.closeModalBtn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
}

#registerForm {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
</style>
