<template>
  <p class="text-3xl font-bold underline">Hello world!</p>
  <div>
    <input
      type="button"
      value="Start"
      @click="showInput"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    />
  </div>
  <div>
    <input
      type="button"
      value="histry"
      @click="showHistry"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Main',
  methods: {
    showInput: function() {
      this.$router.push({
        name: 'Input'
      })
    },
    showHistry: function() {
      this.$router.push({
        name: 'Histry'
      })
    }
  }
}
</script>
