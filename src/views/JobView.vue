<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// @ts-ignore
import { useDebounceFn } from '@vueuse/core';
import JobListDescriptionVue from './JobListDescription.vue';

const emit = defineEmits(['newTitle'])

const query = ref<string>("")
const jobs = ref<{id: number, title: string, salary: string, description: string}[]>([])

onMounted(() => {
  fetchJobs()
  emit('newTitle', 'Jobs')
})

watch(query, () => fetchJobs())

const fetchJobs = useDebounceFn(() => {

  let url: string  = "http://localhost:3001/jobs"
  if (query.value.length > 0) {
    url = url + `?q=${query.value}`
  }
  fetch(url)
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
    <div class="pl-3" v-for="job in jobs" :key="job.id">
      <div class="py-4">

        <div class="flex items-center gap-x-2">
          <span>{{ job.title }}</span>
          <span class="px-2 py-1 text-xs font-bold text-indigo-900 bg-indigo-200 rounded-full">{{ job.salary }}</span>
        </div>
        <div>
          <JobListDescriptionVue :description="job.description"/>
        </div>
      </div>
    
      <hr/>
    </div>
  </div>
</template>