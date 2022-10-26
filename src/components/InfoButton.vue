<script setup lang="ts">
import IconInfoCircle from "./icons/IconInfoCircle.vue"
import IconXCircleFill from "./icons/IconXCircleFill.vue"
import { ref, reactive, watch } from 'vue'

type IconType = 'blue' | 'red'
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

defineProps<{ type: IconType }>();

const open = ref(false)
let posts = reactive( new Array<Post>())

watch(open, async (nv, ov) => {

  if ( nv === true ) {

    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((json) => {
      posts.values = json
    })

  }

})
</script>

<template>
  <IconInfoCircle
    class="h-6 p-[1px] rounded-full transition-colors hover:text-white cursor-pointer"
    :class="type === 'red' ?'text-red-500 bg-transparent  hover:bg-red-500'
                          :'text-blue-500 bg-transparent hover:bg-blue-500'"
    @click="open = true"
  />
  <Teleport to="#modals">
    <div
      class="
      bg-zinc-100 rounded-tl-xl rounded-tr-xl border border-zinc-200
        fixed -ml-[21rem] left-1/2
        w-[42rem] h-[90%]
        transition-all"
      :class="{'top-[10%]': open, 'top-[100%]': !open}">
      <div class="flex justify-between p-5 border-b border-zinc-200">
        <h1>Information</h1>
        <button @click="open = false"><IconXCircleFill class="h-6 text-red-700 transition-colors hover:text-red-600"/></button>
      </div>
      <div class="h-full">
        <div class="h-[90%] overflow-x-hidden overflow-y-scroll p-5">
          <p v-for="post in posts.values"
              class="mb-3"
          >
            {{ (post as Post).body }}
          </p>
        </div>
      </div>
    </div>
  </Teleport>
  
</template>