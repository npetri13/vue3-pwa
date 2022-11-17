<template>
    <IconReload
        class="p-1 transition-colors rounded-full cursor-pointer text-slate-900 bg-slate-300 hover:bg-slate-500 hover:text-slate-200 animation" :class="{ 'rotate-[360deg] transition-all duration-500 pointer-events-none': clicked }"
        @click="onClick(); animation()"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconReload from "@/components/icons/IconReload.vue"
defineProps<{ onClick: () => void }>()

const clicked = ref<boolean>(false)

const animation = () => {
    if (clicked.value) { return }
    clicked.value = true
    setTimeout(() => { clicked.value = false }, 1000)
}
</script>