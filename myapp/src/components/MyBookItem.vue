<script setup>
const { props } = defineProps(['title', 'author', 'review'])
</script>

<template>
  <li>
    <img src="" alt="">
    <p>{{ title }}</p>
    <p>{{ author }}</p>
    <div></div>
    <p>{{ review }}</p>
  </li>
</template>

<style scoped></style>
