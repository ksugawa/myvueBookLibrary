<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const emit = defineEmits();

const closeModal = () => {
  emit("closeModal");
};

const store = useStore();

const file = ref("");
const title = ref("");
const author = ref("");
const review = ref("");

const uploadImage = (event) => {
  const image = event.target.files[0];
  createImage(image);
};

const createImage = (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = () => {
    file.value = reader.result;
    console.log(image);
  };
};

const submit = () => {
  let book = {
    file: file.value,
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
    <div class="form-contents">
      <div class="form-left">
        <label class="fileAttachArea"
          >本の画像を登録
          <input
            name="uploadImage"
            type="file"
            accept="image/*"
            @change="uploadImage"
            ref="preview"
          />
          <img
            class="uploadImageIcon"
            src="../assets/images/icon-add-b.svg"
            alt=""
          />
        </label>
        <div v-if="file" class="previewImage">
          <img :src="file" alt="選択された画像" />
        </div>
      </div>
      <div class="form-right">
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
      </div>
    </div>
    <button @click="closeModal()" type="submit" class="submitBtn">登録</button>
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

.form-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.form-right {
  width: 50%;
}

.form-left {
  position: relative;
  width: calc(100% - 50% - 2rem);
}

.fileAttachArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 398px;
  background: #ccc;
  text-align: center;
  cursor: pointer;
}
.submitBtn {
  width: 98px;
  padding: 4px 0;
  border: 1px solid #232323;
  border-radius: 40px;
}

.uploadImageIcon {
  margin: 4px;
}

.previewImage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
