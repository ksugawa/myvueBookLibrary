<script setup>
defineProps(['title', 'author', 'review'])
</script>

<template>
  <li class="book-item">
    <img src="" alt="">
    <p class="titleText">{{ title }}</p>
    <p class="authorText">{{ author }}</p>
    <div></div>
    <!-- <p class="reviewText">{{ review }}</p> -->
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
