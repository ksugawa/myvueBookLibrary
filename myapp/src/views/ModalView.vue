<template>
  <div>
    <div :class="{ modalView: true, hidden: !isModalOpen }" class="flex-r">
      <div class="closeModalBtn">
        <button @click="closeModal">
          <img src="../assets/images/icon-close.svg" />
        </button>
      </div>
      <FormBase :id="registerForm" @submitAndClose = "handleModalClose"/>
    </div>
  </div>
</template>

<script setup>
import FormBase from "../components/FormBase.vue";

const isModalOpen = defineProps(["isModalOpen"]);

const emit = defineEmits();

const closeModal = () => {
  emit("closeModal");
};

const handleModalClose = () => {
  closeModal();
}

const registerForm = "registerForm";
</script>

<style scoped>
.modalView {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 58%;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(125, 125, 125, 0.25);
  z-index: 999;
  padding: 2rem;
}

.closeModalBtn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
}

#registerForm {
  width: 100%;
  text-align: right;
}
</style>
