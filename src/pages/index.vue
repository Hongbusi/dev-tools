<script setup lang="ts">
useHead({
  title: 'Create beautiful images of your code',
  meta: [
    { name: 'description', content: 'Create beautiful images of your code.' }
  ]
})

const colorOptions = [
  { key: 1, value: 'bg-gradient-to-r from-cyan-500 to-blue-500', label: 'Cyan' },
  { key: 2, value: 'bg-gradient-to-r from-sky-500 to-indigo-500', label: 'Sky' },
  { key: 3, value: 'bg-gradient-to-r from-violet-500 to-fuchsia-500', label: 'VIolet' },
  { key: 4, value: 'bg-gradient-to-r from-purple-500 to-pink-500', label: 'Purple' }
]

const color = ref(colorOptions[0].value)

const el = ref(null)
const { width } = useElementSize(el)
</script>

<template>
  <div class="relative flex flex-col h-full">
    <div class="flex-1 flex-center">
      <div ref="el" class="relative p-4 mx-auto w-full max-w-4xl" :class="color">
        <MacFrame>
          <CodeMirror />
        </MacFrame>
        <div class="absolute-y-center left-0 -translate-x-1/2 flex-center w-5 h-5 cursor-ew-resize after:(content-empty w-2 h-2 bg-white rounded-full transition-all) hover:after:scale-200" />
        <div class="absolute-y-center right-0 translate-x-1/2 flex-center w-5 h-5 cursor-ew-resize after:(content-empty w-2 h-2 bg-white rounded-full transition-all) hover:after:scale-200" />
        <div class="absolute right-0 -bottom-4 left-0 h-1px bg-gray/50 before:(content-empty absolute-y-center left-0 w-1px h-4 bg-gray) after:(content-empty absolute-y-center right-0 w-1px h-4 bg-gray)">
          <div class="absolute-center px-2 py-0.5 text-xs bg-gray-500 text-white/60">
            {{ width }}px
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-30 left-50% -translate-50% p-4 border border-white/20 rounded-2 bg-#191919 shadow">
      <div>
        <div>
          Colors
        </div>
        <div class="relative">
          <div class="px-2 py-1 cursor-pointer border border-white/10 rounded">
            <div class="w-4 h-4 rounded-full" :class="color" />
          </div>
          <div class="absolute left-0 bottom-full p-2 mb-1 text-sm text-white/40 bg-#191919 border border-white/10 rounded space-y-1">
            <div
              v-for="item in colorOptions"
              :key="item.key"
              class="flex items-center p-1 cursor-pointer rounded space-x-2"
              :class="item.value === color ? 'bg-white/10 text-white/90' : ''"
              @click="color = item.value"
            >
              <span class="inline-block w-4 h-4 rounded-full" :class="item.value" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-20 pb-6 text-center opacity-60">
      Copyright © 2022-present Hongbusi, design by <a href="https://ray.so">ray.so</a>.
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  dark: true
</route>
