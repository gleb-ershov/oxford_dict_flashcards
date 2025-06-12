<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { NCard } from 'naive-ui'
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
    <div class="field-container">
      <div class="field-label">Translation</div>
      <div
        style="color: black; font-style: normal"
        :class="visibleFields.translation ? 'reveal-text' : 'reveal-placeholder'"
        @click="visibleFields.translation = !visibleFields.translation"
      >
        {{ visibleFields.translation ? translation : word }}
      </div>
    </div>

    <div class="field-container">
      <div class="field-label">Definition</div>
      <div
        :class="visibleFields.definition ? 'reveal-text' : 'reveal-placeholder'"
        @click="visibleFields.definition = !visibleFields.definition"
      >
        {{ visibleFields.definition ? definition : 'Click here to see word definition' }}
      </div>
    </div>

    <div class="field-container">
      <div class="field-label">Example</div>
      <div
        :class="visibleFields.example ? 'reveal-text' : 'reveal-placeholder'"
        @click="visibleFields.example = !visibleFields.example"
      >
        {{
          visibleFields.example
            ? example
            : 'Click here to see how this word can be used in sentence'
        }}
      </div>
    </div>

    <div class="field-container">
      <div class="field-label">Type</div>
      <div
        :class="visibleFields.type ? 'reveal-text' : 'reveal-placeholder'"
        @click="visibleFields.type = !visibleFields.type"
      >
        {{ visibleFields.type ? type : 'Click here to see type of this word' }}
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.field-container {
  margin-bottom: 16px;
  font-size: 16px;
}

.field-label {
  font-size: 14px;
  font-weight: 600;
  color: darkgray;
  margin-bottom: 4px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
}

.reveal-placeholder {
  color: #aaa;
  font-style: italic;
  cursor: pointer;
  transition: color 0.2s ease;
}

.reveal-placeholder:hover {
  color: #18a058;
}

.reveal-text {
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.reveal-text:hover {
  color: #18a058;
}
</style>
