<script setup>
import { ref } from 'vue';
import MyBookItem from './MyBookItem.vue';

const books = ref([]);
const hasBooks = ref(false);


</script>

<template>
        <ul v-if="hasBooks" class="book-list">
            <MyBookItem v-for="book in books" :key="book.id" :title="book.title" :author="book.author" :review="book.review"/>
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