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
            <div class="flex-r space">
                <h2>本棚</h2>
                <router-link to="/mybooks" class="more-link">すべて見る</router-link>
            </div>
            <MyBookList />
        </div>
    </main>
</template>

<style scoped>
.title {
    padding: 2rem 0;
}

.own-library-contents {
    padding: 2rem 0;
}

.more-link {
    position: relative;
    display: inline-block;
    padding-right: 2rem;
}

.more-link::after {
    content: "";
    position: absolute;
    background: url(../assets/images/icon-arrow-r.svg) no-repeat center;
    width: 32px;
    height: 32px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>