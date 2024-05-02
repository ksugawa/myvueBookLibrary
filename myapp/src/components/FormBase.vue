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
        <form-input
          v-model="title"
          name="title"
          type="text"
          placeholder="題名を入力"
          @update:inputValue="updateTitle"
        />
        <form-input
          v-model="author"
          name="author"
          type="text"
          placeholder="著者名を入力"
          @update:inputValue="updateAuthor"
        />
        <form-rating
          v-model="userRating"
          name="review"
          type="number"
          @update:userRating="updateRating"
        />
        <form-textarea
          v-model="review"
          name="review"
          placeholder="レビューを入力"
          cols="30"
          rows="10"
          @update:textValue="updateReview"
        />
      </div>
    </div>
    <button type="submit" class="submitBtn">登録</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";
import FormRating from "./FormRating.vue";

const emit = defineEmits();
const store = useStore();

const submitAndClose = () => {
  emit("submitAndClose");
};

const title = ref("");
const file = ref("");
const author = ref("");
const userRating = ref(0);
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
  };
};

const updateTitle = (newTitle) => {
  title.value = newTitle;
};

const updateAuthor = (newAuthor) => {
  author.value = newAuthor;
};

const updateRating = (newRating) => {
  userRating.value = newRating;
};

const updateReview = (newReview) => {
  review.value = newReview;
};

const submit = () => {
  let book = {
    file: file.value,
    title: title.value,
    author: author.value,
    rating: userRating.value,
    review: review.value,
  };

  book.id = book.id || null;

  store.commit("save", book);
  if (book) {
    submitAndClose();
  }
};
</script>

<style scoped>
label {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  text-align: left;
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
  padding: 8px 0;
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

/***********
rating css
*/
.text-g {
  margin-right: 0.55rem;
  font-size: 14px;
}

.starIcon {
  position: relative;
  cursor: pointer;
}

.labelRating {
  padding: 8px;
}

.labelRating span {
  width: 38px;
  height: 38px;
}

.labelRating span::before {
  font-size: 32px;
}
</style>
