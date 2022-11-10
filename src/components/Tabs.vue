<script setup lang="ts">
import { RouterLink } from "vue-router"
import MenuButton from "@/components/MenuButton.vue"
import IconUnsplash from "@/components/icons/IconUnsplash.vue"
import IconHome from "@/components/icons/IconHome.vue"
import IconAbout from "@/components/icons/IconAbout.vue"
</script>

<template>
  <nav class="flex justify-around">
    <RouterLink to="/">
      <MenuButton>
        <template v-slot:icon><IconHome /></template>
        Home
      </MenuButton>
    </RouterLink>
    <RouterLink to="/unsplash">
      <MenuButton>
        <template v-slot:icon><IconUnsplash /></template>
        Unsplash
      </MenuButton>
    </RouterLink>
    <RouterLink to="/about">
      <MenuButton>
        <template v-slot:icon><IconAbout /></template>
        About
      </MenuButton>
    </RouterLink>
  </nav>
</template>