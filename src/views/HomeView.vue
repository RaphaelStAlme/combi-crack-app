<script setup lang="ts">
import { ref } from 'vue'

const combinations = ref([])
</script>

<template>
  <template>
    <div>
      <h1>Data List</h1>
      <ul>
        <li v-for="item in combinations" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
</template>
