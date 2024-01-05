<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const keywords = ref("");
const store = useStore();

const handleSearch = () => {
  store.dispatch("updateSearchBooks", keywords.value)
};
</script>

<template>
  <div>
    <form @submit.prevent="handleSearch" class="searchBar">
      <input
        v-model="keywords"
        type="text"
        class="searchBar"
        placeholder="探す"
      />
      <img src="../assets/images/icon-search.svg" class="icon-search" alt="" />
    </form>
  </div>
</template>
