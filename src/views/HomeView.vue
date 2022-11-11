<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RealoadButton from '@/components/RealoadButton.vue';

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
  <div class="px-2">
    <h1>Welcome Home!</h1>

    <h4 class="has-reload-button">
      Today's Cat Fact!
      <RealoadButton class="h-5" :onClick=fetchCatFact />
    </h4>
    <p>{{ catFact.fact }}</p>

    <h4 class="has-reload-button">
      Today's Learning Goals!
      <RealoadButton class="h-5" :onClick=fetchActivity />
    </h4>
    <p>{{ todaysActivity }}</p>

    <h4 class="has-reload-button">
      Picture Of The Day!
      <RealoadButton class="h-5" :onClick=fetchPicOfTheDay />
    </h4>
    <p class="center"><img class="rounded-xl" :src="uriPicOfTheDay" alt="Picture of the Day"></p>

  </div>
</template>
