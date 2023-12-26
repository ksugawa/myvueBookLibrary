<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MyBookItem from "./MyBookItem.vue";

const store = useStore();

const books = computed(() => {
    return store.getters.getAll
});

const hasBooks = computed(() => {
  return store.getters.getCount
});
</script>

<template>
  <ul v-if="hasBooks" class="book-list">
    <MyBookItem
      v-for="book in books"
      :key="book.id"
      :file= "book.file"
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
  align-items: center;
  gap: 2rem;
}


.book-img {
  height: 255px;
  background-color: #ccc;
}

.author {
  font-size: 9px;
  color: #7d7d7d;
}
</style>
