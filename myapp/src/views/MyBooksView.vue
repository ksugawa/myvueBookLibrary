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
      <div class="title">
        <div class="flex-r end">
          <SearchMyBook />
          <div class="avator-icon"></div>
        </div>
      </div>
      <MyBookList />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f5f5f5;
}

.container {
  padding: 2rem 0;
}

.end {
  justify-content: flex-end;
}
</style>
