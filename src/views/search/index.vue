<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import SearchBar from '../../components/SearchBar.vue'
import CharacterList from '../../components/CharacterList.vue'

const characterStore = useCharacterStore()

characterStore.getCharacters()
</script>

<template lang="pug">
div(class="flex flex-col items-center justify-center w-full my-10")
  h1(class="text-6xl font-light mb-3") Popular NFT Items
  p(class="text-gray-400") High quality Vectors with worry-free licensing for personal and commercial use.

  SearchBar(class="my-10")

CharacterList
</template>

<style scoped>
</style>
