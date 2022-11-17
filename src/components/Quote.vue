<template>
<div class="w-full px-6 py-4 bg-gray-100 rounded-lg">
    <div class="flex flex-row items-center justify-between">
    <h6 class="font-black uppercase text-slate-600">{{ title }}</h6>
        <RealoadButton class="h-6"  />
    </div>
    <p class="p-8 mt-6 font-serif leading-loose text-center rounded bg-slate-200">{{ quote }}</p>
</div>
</template>

<script setup lang="ts">
import RealoadButton from './RealoadButton.vue';

const props = defineProps<{
    title: string,
    quote: string
}>()



</script>