import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    name: 'John Doe',
    image: 'https://i.pravatar.cc/100',
    wallet: 105
  })

  const wishlist = ref([])

  return {
    user,
    wishlist
  }
})
