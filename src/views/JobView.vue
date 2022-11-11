<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// @ts-ignore
import { useDebounceFn } from '@vueuse/core';
const emit = defineEmits(['newTitle'])

const query = ref<string>("")
const jobs = ref<string[]>([])

onMounted(() => {
  emit('newTitle', 'Jobs')
})

watch(query, () => fetchJobs())

const fetchJobs = useDebounceFn(() => {
  console.log(query.value)
}, 1000)

</script>

<template>
  <div class="px-2">
    <h1>Let's Find a Job!</h1>

    <form class="px-1"
      @submit.prevent="" action="#">
      <input
        v-model="query"
        class="w-full p-[0.5rem] text-lg transition-all border outline-none border-slate-200 bg-slate-50 rounded-xl ring-2 ring-transparent focus:ring-blue-500"
        type="text"
        name="job-search"
      >
    </form>

  </div>
</template>