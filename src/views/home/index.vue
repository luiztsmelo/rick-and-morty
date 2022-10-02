<script setup lang="ts">
</script>

<template lang="pug">
div(class="flex flex-col items-center justify-center w-full min-h-screen gap-10")
  h1(class="text-bold text-6xl") Rick and Morty Characters

  RouterLink(to="search")
    button(class="bg-orange-400 text-white focus:outline-none hover:bg-orange-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-12 py-3" type="button") Let's search!
</template>

<style lang="scss" scoped>
</style>
