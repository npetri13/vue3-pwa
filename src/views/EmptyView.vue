<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore } from '@/stores/app';

let appModel = useAppStore()

onMounted(() => {
  appModel.viewName = "Empty View"
})
</script>


<template>
  <div>
    <h1>This is an Empty View</h1>
  </div>
</template>