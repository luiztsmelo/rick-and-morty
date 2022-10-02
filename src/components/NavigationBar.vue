<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template lang="pug">
header(class=" h-20 flex items-center justify-between px-36")
  h1(class="text-white") Logo

  nav(class="flex items-center justify-between gap-x-6")
    button(class="bg-transparent border border-gray-400 focus:outline-none hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 mr-2" type="button") Connect Wallet

    span(class="text-orange-400 font-bold") {{ userStore.user.wallet }} ETH

    div(class="flex items-center justify-between")
      span(class="mr-3") {{ userStore.user.name }}
      img(class="w-9 h-9 rounded-full" :src="userStore.user.image")
</template>

<style lang="scss" scoped>
</style>
