<script setup>
import MyBookItem from './MyBookItem.vue';
</script>

<template v-if="active">
        <ul class="book-list">
            <MyBookItem />
        </ul>
</template>

<style scoped>
.book-list {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.book-item {
    width: 14%;
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