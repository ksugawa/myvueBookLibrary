<template>
  <ul v-if="hasBooks" class="book-list">
    <MyBookItem
      v-for="book in books"
      :key="book.id"
      :file="book.file"
      :title="book.title"
      :author="book.author"
      :rating="book.rating"
      :review="book.review"
    />
  </ul>
  <p v-else>登録されている本はありません</p>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MyBookItem from "./MyBookItem.vue";

const store = useStore();
const SearchQuery = computed(() =>store.state.SearchQuery);

const hasBooks = computed(() => {
  return books.value.length > 0;
});

const books = computed(() => {
  return SearchQuery.value !== ""
    ? store.getters.getSearchBooks.length > 0
      ? store.getters.getSearchBooks
      : []
    : store.getters.getAll;
});
</script>

<style scoped>
.book-list {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
}
</style>
