<template>
  
  <div class="inline-flex flex-col space-y-1 text-blue-600 transition-colors hover:text-blue-500 max-h-10">
    <slot name="icon" />
    <div class="text-[0.6rem]">
      <slot />
    </div>
  </div>

</template>