<script setup>
import MyBookList from './MyBookList.vue';
</script>

<template>
    <main>
        <div class="title">
            <h1>こんにちは Kumikoさん！</h1>
            <p>あなただけの本棚を作りましょう</p>
        </div>
        <div class="own-library-contents">
            <h2>本棚</h2>
                <router-link to="/mybooks" class="more-link">すべて見る</router-link>
            </div>
            <MyBookList />
        </div>
    </main>
</template>

<style scoped>
main {
    width: calc(100% - 18%);
    height: 100vh;
    padding: 0 2rem;
    background-color: #F5F5F5;
    overflow: hidden;
}

.title {
    padding: 2rem 0;
}

.own-library-contents {
    padding: 2rem 0;
}
</style>