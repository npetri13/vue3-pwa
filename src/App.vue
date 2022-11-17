<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from "vue-router"
import TopBar from "@/components/app/TopBar.vue"
import Tabs from "@/components/app/BottomBar.vue"

const title = ref<string>('')
const changeTitle = (s: string) => { title.value = s }

</script>

<template>
  <div id="app-container" class="relative overflow-hidden">

    <TopBar :title="title" />

    <main>
      <RouterView @newTitle="changeTitle" />
    </main>

    <footer>
      <Tabs/>
    </footer>
  </div>  
</template>