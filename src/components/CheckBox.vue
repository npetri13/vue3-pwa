<template>
<div class="flex flex-row items-center my-1">
    <div class="relative">
        <input class="!border-0 !outline-none form-checkbox !ring-0 focus:ring-offset-0 text-emerald-600 rounded"
        type="checkbox" :name="name" v-model="value"/>
    </div>
    <label class="ml-3 text-sm font-bold text-white" :for="name"><slot /></label>
</div>

</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
    modelValue: boolean,
    name: string
}>()
const emit = defineEmits<{ (e: 'update:modelValue', modelValue: boolean): void }>()
const value = computed<boolean>({
    get () { return props.modelValue },
    set (newValue) { emit('update:modelValue', newValue) }
})
</script>

<style scoped>
</style>