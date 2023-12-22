<script setup>
import SearchMyBook from './SearchMyBook.vue';
import ModalView from './ModalView.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
    <aside>
        <div class="menu">
            <div class="flex-r space-b">
                <p>本を追加</p>
                <button class="icon-add" @click="openModal">
                    <img src="../assets/images/icon-add.svg" alt="">
                </button>
            </div>
        
            <SearchMyBook />
            <ModalView v-if="isModalOpen" :isModalOpen="isModalOpen" @closeModal="closeModal" />
        </div>

    </aside>
</template>

<style scoped>

aside {
    width: 18%;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.menu {
    padding: 0 8px;
}

.icon-add img{
    width: 32px;
}

</style>