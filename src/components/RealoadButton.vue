<script setup lang="ts">
import { ref } from 'vue'
import IconReload from "@/components/icons/IconReload.vue"
//defineProps<{ onClick: () => void }>()
const emit = defineEmits<{ (e: 'reload'): void }>()

const clicked = ref<boolean>(false)
const animation = () => {
    if (clicked.value) { return }
    
    emit('reload')
    clicked.value = true
    setTimeout(() => { clicked.value = false }, 1000)
}

</script>

<template>
    <IconReload
        class="p-1 rounded-full cursor-pointer text-slate-900 bg-slate-300 hover:bg-slate-500 hover:text-slate-200 animation" :class="{ 'rotate-[360deg] transition-all duration-500': clicked }"
        @click="animation()"/>
</template>