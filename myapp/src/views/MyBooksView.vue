<script setup>
import AsideArea from "@/components/AsideArea.vue";
import MyBookList from "../components/MyBookList.vue";
import SearchMyBook from "@/components/SearchMyBook.vue";

const asideArea = "asideArea";
const myBooksArea = "myBooksArea";

</script>

<template>
  <div class="flex-r start">
    <AsideArea :id="asideArea" />
    <div :id="myBooksArea">
      <SearchMyBook />
      <MyBookList />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f5f5f5;
}
</style>
