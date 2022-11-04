<template>
  <div class="p-4 bg-black/75 rounded-3">
    <div class="flex space-x-2">
      <div class="w-3 h-3 bg-red rounded-full" />
      <div class="w-3 h-3 bg-white/20 rounded-full" />
      <div class="w-3 h-3 bg-green rounded-full" />
    </div>

    <div class="py-5">
      <slot />
    </div>
  </div>
</template>
