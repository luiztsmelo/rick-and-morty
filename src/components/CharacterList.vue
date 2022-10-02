<script setup lang="ts">
import { watchEffect } from 'vue'
import { useCharacterStore } from '@/stores/character'
import CharacterCard from '../components/CharacterCard.vue'
import Pagination from '../components/Pagination.vue'
import { AdjustmentsHorizontalIcon, HeartIcon } from '@heroicons/vue/24/outline/esm'

const characterStore = useCharacterStore()

characterStore.getCharacters()
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

  div(class="grid grid-cols-3 gap-9")
    CharacterCard(v-for="character in characterStore.characters" :key="character.id" :character="character")

  Pagination
</template>

<style lang="scss" scoped>
</style>
