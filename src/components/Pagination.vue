<script lang="ts" setup>
import { defineOptions, defineEmits } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import ArrowBack from './icons/ArrowBack.vue'
import ArrowForward from './icons/ArrowForward.vue'
import Shuffle from './icons/Shuffle.vue'
import { getRandomIntWithoutRepeats } from '@/lib/randomizer'
defineOptions({
  name: 'PaginationBlock',
})

const emit = defineEmits<{
  (e: 'update-index', payload: number): void
}>()

const props = defineProps<{
  currentIndex: number
}>()

const maxItems = parseInt(import.meta.env.VITE_MAX_ITEMS)

function handlePrev() {
  emit('update-index', props.currentIndex - 1)
}
function handleNext() {
  emit('update-index', props.currentIndex + 1)
}
function handleShuffle() {
  emit('update-index', getRandomIntWithoutRepeats(0, maxItems))
}
</script>

<template>
  <div class="pagination-wrapper">
    <div class="pagination-arrow-buttons-wrapper">
      <n-button @click="handlePrev" :disabled="props.currentIndex <= 0">
        <n-icon>
          <ArrowForward />
        </n-icon>
      </n-button>
      <n-button @click="handleNext" :disabled="props.currentIndex >= maxItems">
        <n-icon>
          <ArrowBack />
        </n-icon>
      </n-button>
    </div>
    <n-button @click="handleShuffle" class="shuffle-button">
      <n-icon>
        <Shuffle />
      </n-icon>
    </n-button>
  </div>
</template>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.pagination-arrow-buttons-wrapper {
  display: flex;
  gap: 10px;
}

.shuffle-button {
  margin-left: auto;
}
</style>
