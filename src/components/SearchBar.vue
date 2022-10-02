<script setup lang="ts">
import { useCharacterStore } from '@/stores/character'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline/esm'

const characterStore = useCharacterStore()

const species = ['Human', 'Alien', 'Animal', 'Humanoid', 'Disease', 'Robot']

const search = () => {
  characterStore.getCharacters()
}
</script>

<template lang="pug">
div(class="bg-gray-800 flex items-center justify-between rounded-lg px-2 py-2")
  select(class="form-select bg-orange-400 text-white focus:outline-none hover:bg-orange-300 font-medium rounded-lg text-base px-6 py-3" v-model="characterStore.searchFilter.species")
    option(v-for="specie in species" :value="specie") {{ specie }}

  input(class="bg-transparent focus:outline-none mx-5 w-72" placeholder="Search Rick and Morty Characters" v-model="characterStore.searchFilter.name" @keyup.enter="search")

  button(class="mr-2" @click="search")
    MagnifyingGlassIcon(class="h-6 w-6 text-gray-200")
</template>

<style scoped>
</style>
