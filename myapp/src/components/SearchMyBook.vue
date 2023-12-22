<script setup></script>

<template>
  <div>
    <form action="" class="searchBar">
        <input type="text" class="searchBar" placeholder="探す" />
        <img src="../assets/images/icon-search.svg" class="icon-search" alt="">
    </form>
  </div>
</template>

<style scoped>
.searchBar {
    position: relative;
    width: 100%;
}
.searchBar input{
  background-color: #dfdfdf;
  border: none;
  padding: 4px 12px 4px 34px;
  border-radius: 16px;
  line-height: 1.5;
}

.icon-search {
  position: absolute;
  content: "";
  display: block;
  background: url("../assets/images/icon-search.svg");
  width: 24px;
  height: 24px;
  top: 6px;
  left:6px;
}
</style>
