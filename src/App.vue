<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from "vue-router"
import InfoButton from "@/components/InfoButton.vue"
import Tabs from "@/components/Tabs.vue"

let title = ref('')

const changeTitle = (s: string) => { title.value = s }

</script>

<template>
  <div id="app-container">
    <header>
      <div>
        <h1 class="font-bold text-zinc-600">{{ title }}</h1>
      </div>
      <div>
        <InfoButton type='blue'/>
      </div>
    </header>

    <main>
      <RouterView @newTitle="changeTitle" />
    </main>

    <footer class="py-4 border-t border-zinc-400">
      <Tabs/>
    </footer>
  </div>  
</template>