<script setup lang="ts">
import { ref, onMounted } from 'vue';

let homeContent = ref("")

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
      json.forEach((e: Record<string, any>) => {
      homeContent.value += e.body
    });
    console.log(JSON.parse(json))
  })
  .catch((error) => console.log(error))
})

</script>

<template>
  <h1 class="py-4 text-5xl font-bold text-zinc-500">Home View</h1>
  <article>
    {{ homeContent }}
  </article>

  
</template>
