<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import InfoButton from "./components/InfoButton.vue";
</script>

<template>

  <header class="flex justify-between">
    <div>
      <h1>An App Name.</h1>
    </div>
    <div>
      <InfoButton type='blue'/>
    </div>
  </header>

  <main class="py-12 px-4">
    <RouterView />
  </main>

  <footer>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </footer>
  
  </template>