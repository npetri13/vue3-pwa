<script setup lang="ts">
import IconReload from "@/components/icons/IconReload.vue"
defineProps<{ onClick: () => void }>()
</script>

<template>
    <IconReload class="text-blue-500 cursor-pointer max-h-6 hover:text-blue-600" @click="onClick()"/>
</template>