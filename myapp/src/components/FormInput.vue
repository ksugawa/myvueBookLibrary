<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const emit = defineEmits();

const closeModal = () => {
  emit("closeModal");
};

const store = useStore();

const title = ref("");
const author = ref("");
const review = ref("");

const submit = () => {
  let book = {
    title: title.value,
    author: author.value,
    review: review.value,
  };

  if (book.id) {
    book.id = book.id;
  }

  store.commit("save", book);
};
</script>

<template>
  <form @submit.prevent="submit" action="">
    <input
      name="title"
      v-model="title"
      type="text"
      placeholder="題名を入力"
      class="formInput"
    />
    <input
      name="author"
      v-model="author"
      type="text"
      placeholder="著者を入力"
      class="formInput"
    />
    <input type="text" placeholder="スコア" class="formInput" />
    <textarea
      name="review"
      v-model="review"
      id=""
      cols="30"
      rows="10"
      class="formTextarea"
      placeholder="レビューを入力"
    ></textarea>
    <button @click="closeModal();" type="button" class="submitBtn">登録</button>
  </form>
</template>

<style scoped>
#registerForm input,
textarea {
  width: 100%;
  margin: 1rem 0;
}

input.formInput,
textarea.formTextarea {
  border-bottom: 1px solid #ccc;
}
.submitBtn {
  width: 98px;
  padding: 4px 0;
  border: 1px solid #232323;
  border-radius: 40px;
}
</style>
