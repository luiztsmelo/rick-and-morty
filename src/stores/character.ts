import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/plugins/apollo'
import gql from 'graphql-tag'

provideApolloClient(apolloClient)

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([])

  const searchFilter = reactive({
    name: '',
    species: 'Human'
  })

  const pagination = reactive({
    page: 1,
    count: null,
    pages: null,
    next: null,
    prev: null
  })

  const loading = reactive({
    getCharacters: false
  })

  function getCharacters () {
    loading.getCharacters = true

    characters.value = []

    const { result, onResult } = useQuery(gql`
      query getCharacters ($filter: FilterCharacter, $page: Int) {
        characters(filter: $filter, page: $page) {
          results {
            type
            image
            id
            gender
            origin {
              id
              name
            }
            name
            status
            species
          }
          info {
            count
            next
            pages
            prev
          }
        }
      }
    `, {
      filter: searchFilter || undefined,
      page: pagination.page
    })

    onResult(() => {
      characters.value = result.value.characters.results

      pagination.count = result.value.characters.info.count
      pagination.pages = result.value.characters.info.pages
      pagination.next = result.value.characters.info.next
      pagination.prev = result.value.characters.info.prev

      if (!result.value.characters.info.prev) pagination.page = 1

      loading.getCharacters = false
    })
  }

  return {
    characters,
    searchFilter,
    pagination,
    loading,
    getCharacters
  }
})
