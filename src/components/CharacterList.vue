<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import CharacterCard from '../components/CharacterCard.vue'
import Pagination from '../components/Pagination.vue'
import { AdjustmentsHorizontalIcon, HeartIcon } from '@heroicons/vue/24/outline/esm'

const characterStore = useCharacterStore()
</script>

<template lang="pug">
div(class="flex flex-col items-center justify-center mt-10 px-36")
  div(class="flex items-center justify-between w-full mb-5")
    div(class="flex items-center gap-7")
      button(class="text-xl text-bold") Latest
      button(class="text-xl text-bold") Popular
    div(class="flex items-center gap-4")
      button
        AdjustmentsHorizontalIcon(class="h-6 w-6 text-gray-300")
      RouterLink(to="wishlist")
        HeartIcon(class="h-6 w-6 text-gray-300")

  div(v-if="characterStore.loading.getCharacters && characterStore.characters.length === 0")
    span Loading...

  div(v-if="!characterStore.loading.getCharacters && characterStore.characters.length === 0")
    span Characters not found 😔

  div(class="grid grid-cols-3 gap-9" v-if="!characterStore.loading.getCharacters && characterStore.characters.length > 0")
    CharacterCard(v-for="character in characterStore.characters" :character="character")

  Pagination
</template>

<style scoped>
</style>
