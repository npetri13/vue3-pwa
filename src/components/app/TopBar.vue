<script setup lang="ts">
import { ref } from "vue"
import InfoButton from "@/components/app/InfoButton.vue"
import BurgerButton from "@/components/app/BurgerButton.vue"

const showMenu = ref<boolean>(false)
defineProps<{ title?: string }>()

const clicked = () => { showMenu.value = true }
</script>

<template>
    <div 
      class="absolute top-0 left-0 w-full h-screen p-5 pl-20 pr-4 transition-transform border-r bg-white/60 backdrop-blur border-r-slate-300"
      :class="showMenu? '-translate-x-16' : '-translate-x-full'"
      @click="showMenu = false"
    >
      <div class="flex flex-col items-center justify-center h-full space-y-3 mobile-menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/unsplash">Unsplash</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
    <header>
      <div>
        <BurgerButton @click="clicked" />
      </div>
      <div>
        <span class="font-bold text-zinc-600">{{ title }}</span>
      </div>
      <div>
        <InfoButton type='blue'/>
      </div>
    </header>
</template>