<script>
export default {
    name: 'FormInput',
    props: [
        'book'
    ],
    data() {
        return {
            title: '',
            author: '',
            review: ''
        }
    },
    methods: {
        submit() {
            let book = {
                title: this.title,
                author: this.author,
                review: this.review
            };

            if (this.book && this.book.id) {
                book.id = this.book.id
            }

            //this.$store.commit('submit', book)
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <form @submit.prevent="submit" action="">
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
      <button type="submit" class="submitBtn">登録</button>
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