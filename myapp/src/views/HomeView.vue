<script setup>
import AsideArea from "../components/AsideArea.vue";
import MainArea from "../components/MainArea.vue";

const asideArea = "asideArea";
const mainArea = "mainArea";
</script>

<template>
  <div class="flex-r">
    <AsideArea :id="asideArea" />
    <MainArea :id="mainArea" />
  </div>
</template>

<style scoped></style>
