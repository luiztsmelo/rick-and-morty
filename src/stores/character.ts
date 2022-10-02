import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { apolloClient } from '@/plugins/apollo'
import gql from 'graphql-tag'

provideApolloClient(apolloClient)

export const useCharacterStore = defineStore('character', () => {
  const characters = ref([])

  const pagination = reactive({
    page: 1,
    count: null,
    pages: null,
    next: null,
    prev: null
  })

  async function getCharacters (search?: string) {
    try {
      characters.value = []

      const { result } = useQuery(gql`
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
        filter: search ? { name: search } : undefined,
        page: pagination.page
      })

      watch(result, value => {
        console.log(value.characters.info)
        console.log(value.characters.results)

        characters.value = value.characters.results

        pagination.count = value.characters.info.count
        pagination.pages = value.characters.info.pages
        pagination.next = value.characters.info.next
        pagination.prev = value.characters.info.prev

        if (!value.characters.info.prev) pagination.page = 1

        for (const character of characters.value) {
          console.log(character.species)
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    characters,
    pagination,
    getCharacters
  }
})
