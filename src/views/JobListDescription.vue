<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps({
  description: { type: String, required: true }
})

const show = ref<boolean>(false)
const title = ref<string>("more ...")

watch(title, (title) => {
  title = show ? 'less...' : 'more ...'
})

</script>

<template>
  <div @click="show = !show">
    
    <button class="text-xs text-indigo-500 cursor-pointer">{{ title }}</button>
    <Transition name="jobdesc">
      <p class="mt-1 text-xs"
        v-if="show">{{ description }}
      </p>
    </Transition>

  </div>
</template>

<style>
.jobdesc-enter-active, .jobdesc-leave-active {
  transition: opacity 150ms ease;
}

.jobdesc-enter-from,
.jobdesc-leave-to {
  opacity: 0;
}
</style>