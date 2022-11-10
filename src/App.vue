<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from "vue-router"
import InfoButton from "@/components/InfoButton.vue"
import Tabs from "@/components/Tabs.vue"

let title = ref('')

const changeTitle = (s: string) => { title.value = s }

</script>

<template>

  <header class="flex justify-between">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <InfoButton type='blue'/>
    </div>
  </header>

  <main class="py-12">
    <RouterView @newTitle="changeTitle" />
  </main>

  <footer>
    <Tabs/>
  </footer>
  
  </template>