<script setup>
const emit = defineEmits(["update:inputValue"]);
</script>

<template>
  <label>
    <input
      @input="emit('update:inputValue', $event.target.value)"
      class="formInput"
      v-bind="$attrs"      
    />
  </label>
</template>
