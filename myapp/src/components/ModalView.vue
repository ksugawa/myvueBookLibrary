<script setup>
import { ref } from "vue";
const { props, emit } = defineProps(["isModalOpen"]);

const closeModal = () => {
  emit("closeModal", formData());
};

const registerForm = "registerForm";

const title = ref("");
const author = ref("");
const review = ref("");

const formData = () => {
  return { title: title.value, author: author.value, review: review.value };
};

const submit =(event) => {
  event.preventDefault();
  closeModal();
};
</script>

<template>
  <div :class="{ modalView: true, hidden: !isModalOpen }" class="flex-r">
    <div class="closeModalBtn">
      <button @click="closeModal">
        <img src="../assets/images/icon-close.svg" />
      </button>
    </div>
    <div class="bookImgAttachArea">
      <button><img src="../assets/images/icon-add-b.svg" alt="" /></button>
      <p>本の画像を登録</p>
    </div>
    <form :id="registerForm" action="">
      <input
        v-model="title"
        type="text"
        placeholder="題名を入力"
        class="formInput"
      />
      <input
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
      <button @click="submit" type="submit" class="submitBtn">登録</button>
    </form>
  </div>
</template>

<style scoped>
.modalView {
  position: fixed;
  top: -30%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 58%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0px 4px 20px 0px rgba(125, 125, 125, 0.25);
  z-index: 999;
  padding: 2rem;
}

#registerForm {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

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
  width: 132px;
  padding: 4px 0;
  border-radius: 40px;
  border: 1px solid #232323;
  border-radius: 40px;
}

.bookImgAttachArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 418px;
  background: #ccc;
}

.closeModalBtn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}
</style>
