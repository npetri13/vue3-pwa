<script setup lang="ts">
import { onMounted } from 'vue';
const emit = defineEmits(['newTitle'])
onMounted(() => {
  emit('newTitle', 'About')
})
</script>

<template>
  <div>
    <h1 class="text-5xl">Who we are.</h1>
  </div>
</template>