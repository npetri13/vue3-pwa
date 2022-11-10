<script setup lang="ts">
import { ref, onMounted } from 'vue';
const emit = defineEmits(['newTitle'])
let urls = ref<string[]>([]);

function sleep(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }
async function fetchPictures(urls: string[]) {

  for ( let i:number = 0; i < 20; i++) {
    await sleep(100)
    fetch("https://source.unsplash.com/collection/9945669/250x250")
    .then((res) => { 
        urls.push(res.url)
      })
  }
  
}

onMounted(() => {
  emit('newTitle', "Unsplash")
  fetchPictures(urls.value)
})

</script>

<template>
  <div class="mb-20">
    <h1 class="text-lg">This is the Unsplash View.</h1>
    <div class="flex flex-wrap justify-around py-3">
      <span v-for="url in urls"
        class="m-5 overflow-hidden rounded-lg"
      >
        <img :src="url" />
      </span>
    </div>
    
  </div>
</template>