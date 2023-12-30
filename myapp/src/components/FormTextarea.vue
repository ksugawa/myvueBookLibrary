<script setup>
const emit = defineEmits(["update:textValue"]);
</script>

<template>
  <label>
    <textarea
      @input="emit('update:textValue', $event.target.value)"
      class="formTextarea"
      v-bind="$attrs"
    ></textarea>
  </label>
</template>
