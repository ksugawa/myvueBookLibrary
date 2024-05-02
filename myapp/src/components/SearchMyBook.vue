<template>
  <div>
    <label class="searchBar">
      <input
        v-model="keywords"
        name="keywords"
        type="text"
        placeholder="題名、著者名で検索"
        id="searchInput"
        @keydown.enter="searchBooks"
      />
      <img
        src="../assets/images/icon-search.svg"
        class="icon-search"
        alt="search"
      />
      <img
        src="../assets/images/icon-cancel.svg"
        class="icon-cancel_search"
        alt="cancel_search"
        @click="clearKeywords"
      />
    </label>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { keywords } from "../type/index";

const store = useStore();

const searchBooks = () => {
  store.commit("updateSearchQuery", keywords.value);
};

const clearKeywords = () => {
  keywords.value = "";
  store.commit("updateSearchQuery", "")
};
</script>
