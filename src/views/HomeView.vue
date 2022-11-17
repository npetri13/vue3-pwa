<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RealoadButton from '@/components/RealoadButton.vue';
import Quote from '@/components/Quote.vue'

const catFact = ref<{ fact: string, length: number }>({fact: "", length: 0})
const todaysActivity = ref<string>("")
const uriPicOfTheDay = ref<string>("")

const emit = defineEmits(['newTitle'])

const fetchActivity = () => {
  fetch("http://www.boredapi.com/api/activity?type=education")
  .then(res => res.json())
  .then((json) => { todaysActivity.value = json.activity })
  .catch(err => {})
}

const fetchCatFact = () => {
  fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then((json) => { catFact.value = json })
  .catch(err => {})
}

const fetchPicOfTheDay = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(json => uriPicOfTheDay.value = (<string> json.message))
  .catch(err => {})
}

onMounted(() => {

  fetchCatFact()
  fetchActivity()
  fetchPicOfTheDay()

  emit('newTitle', "Home")
})

</script>

<template>
  <div class="px-6">
    <h1>Welcome Home!</h1>

    <div class="space-y-5">
      <Quote title="Todays Cat Fact!" :quote=catFact.fact :onClick="fetchCatFact" />
      <Quote title="Today's Learning Goals!" :quote=todaysActivity :onClick="fetchActivity" />
    </div>
    
    <div class="relative my-6 rounded-lg h-1/4">
      <div class="absolute w-full top-5">
        <div class="flex items-center justify-between px-6">
          <h4 class="px-4 py-2 rounded-full bg-white/80">Picture Of The Day!</h4>
          <RealoadButton class="h-6 ring-4 ring-white/70" :onClick=fetchPicOfTheDay />
        </div>
      </div>
      <div class="relative top-0 bottom-0 -z-10">
        <img class="object-cover w-full rounded-lg" :src="uriPicOfTheDay" alt="Picture of the Day">
      </div>
    </div>

  </div>
</template>
