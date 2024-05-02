<template>
  <div>
    <label class="searchBar">
      <input
        v-model="keywords"
        name="keywords"
        type="text"
        placeholder="題名、著者名で検索"
        id="searchInput"
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const keywords = ref("");
const emit = defineEmits(["update:SearchQuery"]);
const store = useStore();

onMounted(() => {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      store.commit("updateSearchQuery", keywords.value);
      console.log(keywords.value);
    }
  });
});

const clearKeywords = () => {
  console.log(keywords.value);
  keywords.value = "";
};
</script>
