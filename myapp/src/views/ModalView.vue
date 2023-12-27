<script setup>
import FormInput from "../components/FormInput.vue";

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
