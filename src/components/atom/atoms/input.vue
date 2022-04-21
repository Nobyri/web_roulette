<template>
  <input
    type="text"
    class="
      w-full
      h-10
      px-3
      mb-2
      text-base text-gray-700
      placeholder-gray-600
      border
      rounded-lg
      focus:shadow-outline
    "
  />
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      inputValue: [],
    });
    return {
      state
    }
  },
});
</script>
<style scoped>

</style>>