<script lang="ts" setup>
import { NText, NH2 } from 'naive-ui'
import FlashcardList from '@/components/FlashcardList.vue'
import Pagination from '@/components/Pagination.vue'
import { ref } from 'vue'

const currentIndex = ref(0)
const updateIndex = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <section class="flashcard-module">
    <n-h2 prefix="bar">
      <n-text class="flashcard-title">Flashcards</n-text>
    </n-h2>
    <FlashcardList :current-index="currentIndex" />
    <Pagination @update-index="updateIndex" :current-index="currentIndex" />
  </section>
</template>

<style scoped>
.flashcard-module {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}
</style>
