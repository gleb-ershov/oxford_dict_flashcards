<script lang="ts" setup>
import { NText, NH2, NSelect } from 'naive-ui'
import Pagination from '@/components/Pagination.vue'
import { ref, computed, watch } from 'vue'
import FlashcardItem from '@/components/Flashcard.vue'
import data from '../../oxford_5000_with_translations.json'

const currentIndex = ref(0)
const updateIndex = (index: number) => {
  currentIndex.value = index
}
type FilterOptions = 'All' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'
const filterOptions: { value: FilterOptions; label: FilterOptions }[] = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'a1',
    value: 'a1',
  },
  {
    label: 'a2',
    value: 'a2',
  },
  {
    label: 'b1',
    value: 'b1',
  },
  {
    label: 'b2',
    value: 'b2',
  },
  {
    label: 'c1',
    value: 'c1',
  },
  {
    label: 'c2',
    value: 'c2',
  },
]
const filterBy = ref<FilterOptions>('All')

type Word = {
  word: string
  translation: string
  cefr: string
  definition: string
  example: string
  type: string
}

const words = Object.values(data) as Word[]
const filteredWords = computed(() => {
  if (filterBy.value === 'All') {
    return words
  }
  return words.filter((word) => word.cefr === filterBy.value)
})
const item = computed(() => filteredWords.value[currentIndex.value])

watch(filterBy, (val) => {
  console.log('filterBy:', val)
  currentIndex.value = 0
})
</script>

<template>
  <section class="flashcard-module">
    <div>filterBy: {{ filterBy }}</div>
    <n-h2 prefix="bar">
      <n-text class="flashcard-title">Flashcards</n-text>
    </n-h2>
    <n-select
      v-model:value="filterBy"
      :options="filterOptions"
      class="flashcard-select"
      size="small"
      placeholder="Filter by CEFR level"
      style="width: 200px"
    />
    <FlashcardItem
      :word="item.word"
      :translation="item.translation"
      :cefr="item.cefr"
      :definition="item.definition"
      :example="item.example"
      :type="item.type"
    />
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
