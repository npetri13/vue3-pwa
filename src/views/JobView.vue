<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// @ts-ignore
import { useDebounceFn } from '@vueuse/core';
const emit = defineEmits(['newTitle'])

const query = ref<string>("")
const jobs = ref<{id: number, title: string, salary: string, description: string}[]>([])

onMounted(() => {
  emit('newTitle', 'Jobs')
})

watch(query, () => fetchJobs())

const fetchJobs = useDebounceFn(() => {

  fetch(`http://localhost:3001/jobs?q=${query.value}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      jobs.value = json
    })
    .catch(e => {console.log(e)})

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

    <hr class="my-5" v-if="jobs.length > 0">
    <div v-for="job in jobs" :key="job.id">
      <p>
        {{ job.title }}
        <span class="px-2 py-1 text-xs font-bold text-white bg-indigo-500 rounded-full">{{ job.salary }}</span>
      </p>
    </div>

  </div>
</template>