<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

  <header>
    <h1>This is the Header.</h1>
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