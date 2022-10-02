<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline/esm'

const characterStore = useCharacterStore()

const prevPage = () => {
  if (characterStore.pagination.prev) {
    characterStore.pagination.page = characterStore.pagination.prev
    characterStore.getCharacters()
  }
}

const nextPage = () => {
  if (characterStore.pagination.next) {
    characterStore.pagination.page = characterStore.pagination.next
    characterStore.getCharacters()
  }
}
</script>

<template lang="pug">
div(class="flex items-center justify-between w-full my-10" v-if="characterStore.characters.length > 0")
  a Discover all colections

  button(class="flex items-center bg-gray-800 text-white focus:outline-none hover:bg-gray-600 focus:ring-1 focus:ring-gray-200 font-medium rounded-lg text-base px-6 py-3" @click="nextPage")
    span(class="text-bold text-lg") Next page
    ArrowRightIcon(class="h-5 w-5 ml-3")

  div(class="flex items-center gap-2")
    button(class="flex items-center justify-center bg-gray-800 text-white rounded-lg h-12 w-12" @click="prevPage")
      ArrowLeftIcon(class="h-5 w-5")

    button(class="flex items-center justify-center bg-gray-600 text-white rounded-lg h-12 w-12")
      span(class="font-medium") {{ characterStore.pagination.page }}

    button(class="flex items-center justify-center bg-gray-800 text-white rounded-lg h-12 w-12" @click="nextPage")
      ArrowRightIcon(class="h-5 w-5")

    span(class="text-gray-400 ml-1") of {{ characterStore.pagination.pages }}
</template>

<style scoped>
</style>
