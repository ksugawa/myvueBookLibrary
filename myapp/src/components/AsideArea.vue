<template>
  <aside>
    <div>
      <router-link to="/">
        <h1>BookLibrary</h1>
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
      />

      <div v-if="isModalOpen" id="overlay" @click="closeModal"></div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import ModalView from "../views/ModalView.vue";

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

</script>
<style scoped>
h1 {
  padding-top: 2rem;
  margin-bottom: 5rem;
}
.menu {
  width: 100%;
  padding: 0 8px;
}

.icon-add img {
  width: 32px;
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
