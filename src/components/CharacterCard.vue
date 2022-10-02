<script setup lang="ts">
const props = defineProps({
  character: Object
})
</script>

<template lang="pug">
div(class="flex flex-col items-center justify-center bg-gray-800 rounded-lg px-4 py-4 gap-3" )
  img(class="w-full rounded-lg" :src="props.character?.image")

  span(class="text-bold text-3xl text-gray-300 text-center") {{ props.character?.name }}

  button(class="bg-transparent text-orange-400 border border-orange-400 focus:outline-none hover:bg-gray-700 font-medium rounded-lg text-sm px-3 py-1 mt-2" type="button") BUY
</template>

<style scoped>
</style>
