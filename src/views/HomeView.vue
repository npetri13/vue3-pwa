<script setup lang="ts">
import { ref, onMounted } from 'vue';
type Article = {
  id: Number,
  title: String,
  body: String
}
let homeContent = ref<Article>()

onMounted(() => {
  fetch("http://localhost:3001/articles/1")
  .then((res) => res.json())
  .then((json) => { homeContent.value = json })
  .catch((error) => console.log(error))
})

</script>

<template>
  <div class="h-full px-3 overflow-x-hidden overflow-y-auto">
    <h1 class="py-4 text-5xl font-bold text-zinc-500">{{ homeContent?.title }}</h1>
    <article class="article" v-html="homeContent?.body"></article>
  </div>
</template>
