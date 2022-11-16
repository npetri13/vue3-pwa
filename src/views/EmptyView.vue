<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits(['newTitle'])
onMounted(() => {
  emit('newTitle', 'EmptyView')
})
</script>

<template>
  <div>
    <h1>This is an Empty View</h1>
  </div>
</template>