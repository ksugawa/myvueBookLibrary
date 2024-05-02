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
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import MyBookItem from "./MyBookItem.vue";

const store = useStore();
const SearchQuery = ref("");

const books = computed(() => {
  return SearchQuery.value ? store.getters.getSearchBooks : store.getters.getAll;
});

const hasBooks = computed(() => {
  return books.value.length > 0;
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
