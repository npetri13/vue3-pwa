<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from "vue-router"
import InfoButton from "./components/InfoButton.vue"

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
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </footer>
  
  </template>