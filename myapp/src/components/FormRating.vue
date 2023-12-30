<script setup>
import { ref } from 'vue'

const emit = defineEmits();
const userRating = ref(0);

const setRating = (rating) => {
  userRating.value = rating;
  emit('update:userRating', rating);
};

</script>

<template>
  <label>
    <div class="labelRating">
      <p class="inline text-g">スコアを選択</p>
      <span
        v-for="rating in 5"
        :key="rating"
        @click="setRating(rating)"
        :class="{ selected: rating <= userRating }"
        v-bind="$attrs"
      >
      </span>
    </div>
  </label>
</template>

<style scoped>
.text-g {
  margin-right: 0.55rem;
  font-size: 14px;
}

.ratingIcon {
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
