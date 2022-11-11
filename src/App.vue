<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from "vue-router"
import TopBar from "@/components/TopBar.vue"
import Tabs from "@/components/BottomBar.vue"

const title = ref<string>('')
const changeTitle = (s: string) => { title.value = s }

</script>

<template>
  <div id="app-container" class="relative overflow-hidden">

    <TopBar :title="title" />

    <main>
      <RouterView @newTitle="changeTitle" />
    </main>

    <footer class="py-4 border-t border-zinc-400">
      <Tabs/>
    </footer>
  </div>  
</template>