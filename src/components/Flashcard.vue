<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { NCard } from 'naive-ui'
import FlashcardField from './FlashcardField.vue'
defineOptions({
  name: 'FlashcardItem',
})

const props = defineProps<{
  word: string
  translation: string
  cefr: string
  definition: string
  example: string
  type: string
}>()

type VisibleFields = {
  translation: boolean
  definition: boolean
  example: boolean
  type: boolean
}

const visibleFields = ref<VisibleFields>({
  translation: false,
  definition: false,
  example: false,
  type: false,
})

watch(
  () => [props.word, props.translation, props.definition, props.example, props.type],
  () => {
    visibleFields.value = {
      translation: false,
      definition: false,
      example: false,
      type: false,
    }
  }
)

const wordCerf = computed(() => {
  return props.cefr ? `CERF: ${props.cefr}` : ''
})
</script>

<template>
  <n-card :title="wordCerf">
    <FlashcardField
      :is-visible="visibleFields.translation"
      :value="translation"
      field-container-class="field-container"
      field-label-class="field-label"
      reveal-text-class="reveal-text"
      reveal-placeholder-class="reveal-placeholder"
      :placeholder-text="word"
      @update-visible="visibleFields.translation = $event"
      label="Translation"
    />

    <FlashcardField
      :is-visible="visibleFields.definition"
      :value="definition"
      field-container-class="field-container"
      field-label-class="field-label"
      reveal-text-class="reveal-text"
      reveal-placeholder-class="reveal-placeholder"
      placeholder-text="Click here to see this word definition"
      @update-visible="visibleFields.definition = $event"
      label="Definition"
    />

    <FlashcardField
      :is-visible="visibleFields.example"
      :value="example"
      field-container-class="field-container"
      field-label-class="field-label"
      reveal-text-class="reveal-text"
      reveal-placeholder-class="reveal-placeholder"
      placeholder-text="Click here to see how this word can be used in sentence"
      @update-visible="visibleFields.example = $event"
      label="Example"
    />

    <FlashcardField
      :is-visible="visibleFields.type"
      :value="type"
      field-container-class="field-container"
      field-label-class="field-label"
      reveal-text-class="reveal-text"
      reveal-placeholder-class="reveal-placeholder"
      placeholder-text="Click here to see type of this word"
      @update-visible="visibleFields.type = $event"
      label="Type"
    />
  </n-card>
</template>

<style scoped></style>
