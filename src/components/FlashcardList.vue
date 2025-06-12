<script lang="ts" setup>
import { computed } from 'vue'
import Flashcard from './Flashcard.vue'
import data from '../../oxford_5000_with_translations.json'

type Word = {
  word: string
  translation: string
  cefr: string
  definition: string
  example: string
  type: string
}

const props = defineProps<{
  currentIndex: number
}>()
const words = Object.values(data) as Word[]
const item = computed(() => words[props.currentIndex])
</script>

<template>
  <Flashcard
    :word="item.word"
    :translation="item.translation"
    :cefr="item.cefr"
    :definition="item.definition"
    :example="item.example"
    :type="item.type"
  />
</template>

<style scoped></style>
