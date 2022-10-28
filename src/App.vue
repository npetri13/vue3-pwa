<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import InfoButton from "./components/InfoButton.vue"
import { useAppStore } from "./stores/app"

const appModel = useAppStore()
</script>

<template>

  <header class="flex justify-between">
    <div>
      <h1>{{ appModel.currentView.title }}</h1>
    </div>
    <div>
      <InfoButton type='blue'/>
    </div>
  </header>

  <main class="py-12">
    <RouterView />
  </main>

  <footer>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </footer>
  
  </template>