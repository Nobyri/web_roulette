<template>
  <p>項目入力</p>
    <div>
        <input
        type="text"
        v-model="state.inputValue[0]"
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
        placeholder="Regular input"
        />
        <p>{{ state.inputValue[0] }}</p>
    </div>
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

