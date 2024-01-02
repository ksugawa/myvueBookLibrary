<script setup>
defineProps(["file", "title", "author", "rating", "review"]);

//const starString = '★'.repeat(Math.round(Number(props.rating)));
</script>

<template>
  <li class="book-item">
    <router-link to="/mybooks/:id">
    <img :src="file" alt="本の画像" class="book-image" />
    <p class="titleText">{{ title }}</p>
    <p class="authorText">{{ author }}</p>
    </router-link>
  </li>
</template>

<style scoped>
.authorText {
  font-size: 12px;
  color: #7d7d7d;
}

.book-item {
  width: 14%;
}
</style>
