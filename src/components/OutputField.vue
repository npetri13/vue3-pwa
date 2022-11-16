<template>
    <div class="flex items-center justify-between p-2 text-base text-white rounded bg-slate-700">
        <div>{{ output }}</div>
        <IconFiles  class="h-5 transition-colors cursor-pointer hover:text-emerald-500"
                    @click="copy" v-if="copyAvailable"/>
        <IconCheck class="h-5" v-if="!copyAvailable"/>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import IconFiles from '@/components/icons/IconFiles.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

const copyAvailable = ref<boolean>(true)
const props = defineProps<{
    output: string
}>()

const copy = () => {
    navigator.clipboard.writeText(props.output)
    .then(() => {
        copyAvailable.value = false
        setTimeout(() => { copyAvailable.value = true }, 2000)
    })
    .catch((err) => {
        console.error('OutputField.vue: couldn\'t write to clipboard: ' + err)
    })

}
</script>