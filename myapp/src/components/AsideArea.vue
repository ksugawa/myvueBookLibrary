<template>
  <aside>
    <div>
      <router-link to="/">
        <div class="avator-icon"></div>
      </router-link>
    </div>
    <div class="menu">
      <div class="flex-r space-b">
        <p>本を追加</p>
        <button class="icon-add" @click="openModal">
          <img src="../assets/images/icon-add.svg" alt="" />
        </button>
      </div>

      <ModalView
        v-if="isModalOpen"
        @closeModal="handleModalClose"
        @formSubmitted="handleFormSubmitted"
      />

      <div v-if="isModalOpen" id="overlay" @click="closeModal"></div>
    </div>
  </aside>
</template>

<script setup>
import ModalView from "../views/ModalView.vue";
import { ref } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
}

const handleModalClose = () => {
  isModalOpen.value = false;
}

const handleFormSubmitted = (formData) => {
  books.value.push(formData);
  hasBooks.value = true;
};
</script>
<style scoped>

.menu {
  width: 100%;
  padding: 0 8px;
}

.icon-add img {
  width: 32px;
}

.avator-icon {
  width: 86px;
  height: 86px;
  border-radius: 999px;
  background-color: #dfdfdf;
  margin: 5rem 0;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 薄暗い色 */
  z-index: 1; /* モーダルよりも手前に表示 */
}
</style>
