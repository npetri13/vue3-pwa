<template>
    <div class="relative">
        <input
            type="range"
            :style="{'background-size' : `${(modelValue-_min)/(_max-_min) * 100}% 100%`}"
            v-model="value" :min="_min" :max="_max"/>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
    modelValue: number,
    min?: number,
    max?: number
}>()

const _min: number = props.min ?? 0
const _max: number = props.max ?? 18

const emit = defineEmits<{ (e: 'update:modelValue', modelValue: number): void }>()
const value = computed<string>({
    get () { return "" + props.modelValue },
    set (value) { emit('update:modelValue', parseInt(value)) }
})
</script>

<style scoped>
input[type="range"] {
    appearance: none; -webkit-appearance: none;
    width: 100%; height: 5px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    background-image: linear-gradient(to right, #10b981, #10b981);
    background-size: 0% 0%; background-repeat: no-repeat;
    cursor: pointer;
}
</style>