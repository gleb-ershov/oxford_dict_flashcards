<script lang="ts" setup>
defineOptions({
  name: 'FlashcardItem',
})
defineProps<{
  isVisible: boolean
  value: string
  fieldContainerClass: string
  fieldLabelClass: string
  revealTextClass: string
  revealPlaceholderClass: string
  placeholderText: string
  label: string
}>()

const emit = defineEmits<{
  (e: 'update-visible', payload: boolean): void
}>()
</script>

<template>
  <div :class="fieldContainerClass">
    <div :class="fieldLabelClass">{{ label }}</div>
    <div
      :class="isVisible ? revealTextClass : revealPlaceholderClass"
      @click="emit('update-visible', !isVisible)"
    >
      {{ isVisible ? value : placeholderText }}
    </div>
  </div>
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
