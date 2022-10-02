<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const route = useRoute()
</script>

<template lang="pug">
NavigationBar(v-if="route.name !== 'home'")

RouterView
</template>

<style lang="scss" scoped>
</style>
