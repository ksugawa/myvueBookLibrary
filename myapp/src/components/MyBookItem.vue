<script setup>
defineProps(["file", "title", "author", "rating", "review"]);
</script>

<template>
  <li class="book-item">
    <!-- <router-link :to="{ name: 'mybookpage', params:{ id: book.id }}"> -->
      <img :src="file" alt="本の画像" class="book-image" />
      <div class="book-info">
        <p class="titleText">{{ title }}</p>
        <p class="authorText">{{ author }}</p>
        <div class="labelRating">
          <span
            v-for="star in 5"
            :key="star"
            :class="{ selected: star <= rating }"
          ></span>
        </div>
      </div>
    <!-- </router-link> -->
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

.book-image {
  width: 100%;
  height: 196px;
  margin-bottom: 8px;
  box-shadow: 0 5px 10px #7d7d7d;
}

.labelRating span {
  width: 22px;
  height: 22px;
}

.labelRating span::before {
  font-size: 20px;
}
</style>
