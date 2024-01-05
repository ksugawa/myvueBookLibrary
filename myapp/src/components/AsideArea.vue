<script setup>
// import SearchMyBook from "./SearchMyBook.vue";
import ModalView from "../views/ModalView.vue";
import { ref } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const handleFormSubmitted = (formData) => {
  books.value.push(formData);
  hasBooks.value = true;
};
</script>

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

      <!-- <SearchMyBook /> -->
      <ModalView
        v-if="isModalOpen"
        :isModalOpen="isModalOpen"
        @closeModal="isModalOpen = false"
        @formSubmitted="handleFormSubmitted"
      />
    </div>
  </aside>
</template>

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
</style>
