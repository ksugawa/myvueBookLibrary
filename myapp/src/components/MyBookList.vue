<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import MyBookItem from "./MyBookItem.vue";

const store = useStore();
const filteredBooks = ref([]);
const searchBooks = ref("");

const books = computed(() => {
  return store.getters.getAll;
});

const hasBooks = computed(() => {
  return store.getters.getCount;
});

watch(searchBooks, (newQuery) => {
  if (!newQuery) {
    // If search query is empty, show all books
    filteredBooks.value = books.value;
  } else {
    // If search query is present, filter books based on the query
    const query = newQuery.toLowerCase();
    filteredBooks.value = books.value.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }
});
</script>

<template>
  <ul v-if="hasBooks" class="book-list">
    <MyBookItem
      v-for="book in filteredBooks"
      :key="book.id"
      :file="book.file"
      :title="book.title"
      :author="book.author"
      :rating="book.rating"
      :review="book.review"
    />
  </ul>
</template>

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
