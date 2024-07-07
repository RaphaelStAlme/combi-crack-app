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

const invalidateAll = () => {
  for (const combination of combinations.value) {
    validateCombination(combination, false)
  }
}

getCombinationList()
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-center text-gray-800">Data List</h1>
    <ul class="space-y-4">
      <li
        v-for="combination in combinations"
        :key="combination"
        class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200"
      >
        <span class="text-lg text-gray-700">{{ combination }}</span>
        <div class="space-x-2">
          <button
            @click="validateCombination(combination, true)"
            class="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Validate
          </button>
          <button
            @click="validateCombination(combination, false)"
            class="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            Invalidate
          </button>
        </div>
      </li>
    </ul>
    <button
      @click="invalidateAll"
      class="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
    >
      Invalidate all
    </button>
  </div>
</template>
