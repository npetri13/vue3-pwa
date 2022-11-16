<template>
    <div class="flex items-center justify-between p-3 mt-5 rounded bg-slate-800">
        <div class="text-sm font-bold text-white uppercase opacity-50">Strength</div>
        <div class="flex items-center">
            <span class="mr-2 text-xs font-bold text-white lowercase">{{ strengthStr }}</span>
            <span class="bar" :class="strength > 0 ? '--fill' : ''"></span>
            <span class="bar" :class="strength > 1 ? '--fill' : ''"></span>
            <span class="bar" :class="strength > 2 ? '--fill' : ''"></span>
            <span class="bar" :class="strength > 3 ? '--fill' : ''"></span>
        </div>
    </div>
</template>

<style scoped>
.bar {
    display: inline-block;
    height: 1.2rem;
    width: 0.5rem;
    border: solid rgba(16, 185, 129, 0.5) 2px;
    border-radius: 10%;
    margin-right: 3px;
}
.bar:last-child { margin-right: 0; }
.bar.--fill {
    background-color: #10b981;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';
// @ts-ignore
import zxcvbn from 'zxcvbn'

const props = defineProps<{
    value: string
}>()

const strengthStr = ref<string>()

const strength = computed(() => {
    let score = zxcvbn(props.value).score
    switch (score) {
        case 1: strengthStr.value = "weak"; break;
        case 2: strengthStr.value = "medium"; break;
        case 3: strengthStr.value = "strong"; break;
        case 4: strengthStr.value = "chucknorris"; break;
        default: strengthStr.value = "weak"; break;
    }
    return zxcvbn(props.value).score
})

</script>