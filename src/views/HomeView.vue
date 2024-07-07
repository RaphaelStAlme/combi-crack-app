<script setup lang="ts">
import { ref } from 'vue'
import { API } from '@/services'

const combinations = ref([])

const getCombinationList = () => {
  API.combinationService
    .getCombinations()
    .then((response) => {
      console.log(response.data)
      combinations.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
}

const validateCombination = (combination: string, validate: boolean) => {
  return API.combinationService
    .postValidation(combination, validate)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

getCombinationList()
</script>

<template>
  <div>
    <h1>Data List</h1>
    <ul>
      <li v-for="combination in combinations" :key="combination">
        <span>{{ combination }}</span>
        <button @click="validateCombination(combination, true)">Validate</button>
        <button @click="validateCombination(combination, false)">Invalidate</button>
      </li>
    </ul>
  </div>
</template>
