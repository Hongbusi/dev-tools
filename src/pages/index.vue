<script setup lang="ts">
useHead({
  title: 'Create beautiful images of your code',
  meta: [
    { name: 'description', content: 'Create beautiful images of your code.' }
  ]
})
</script>

<template>
  <div class="relative flex flex-col h-full">
    <h1 class="absolute top-25 right-0 left-0 text-4xl text-center text-rose-400" />
    <div class="flex-1 flex justify-center items-center">
      <div class="p-4 mx-auto w-full max-w-4xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="relative p-4 bg-black/75 rounded-3">
          <div>
            <div class="flex space-x-2">
              <div class="w-3 h-3 bg-red rounded-full" />
              <div class="w-3 h-3 bg-white/20 rounded-full" />
              <div class="w-3 h-3 bg-green rounded-full" />
            </div>
          </div>

          <div class="py-5">
            <CodeMirror />
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-30 left-50% -translate-50% p-4 border border-white/20 rounded-2 bg-#191919 shadow">
      <div>
        <div>
          Colors
        </div>
      </div>
    </div>

    <div class="pt-20 pb-6 text-center opacity-60">
      Copyright © 2022-present Hongbusi, design by <a href="https://ray.so/">ray.so</a>.
    </div>
  </div>
</template>
