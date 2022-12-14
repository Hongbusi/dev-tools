<script setup lang="ts">
import { useClipboardImage, useResize } from '~/composables'

useHead({
  title: 'Create beautiful images of your code',
  meta: [
    { name: 'description', content: 'Create beautiful images of your code.' }
  ]
})

const colorOptions = [
  { value: 'bg-gradient-to-r from-cyan-500 to-blue-500', label: 'Cyan' },
  { value: 'bg-gradient-to-r from-sky-500 to-indigo-500', label: 'Sky' },
  { value: 'bg-gradient-to-r from-violet-500 to-fuchsia-500', label: 'VIolet' },
  { value: 'bg-gradient-to-r from-purple-500 to-pink-500', label: 'Purple' }
]

const color = ref(colorOptions[0].value)

const wrapperEl = ref(null)
const { width } = useElementSize(wrapperEl)
useResize(wrapperEl, { minWidth: 520, maxWidth: 960 })

// copy image
const el = ref(null)
const { copy } = useClipboardImage(el)
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex-center">
      <div ref="wrapperEl" class="relative w-520px">
        <div class="handle absolute-y-center left-0 -translate-x-1/2 flex-center w-5 h-5 cursor-ew-resize after:(content-empty w-2 h-2 bg-white rounded-full transition-all) hover:after:scale-200" />
        <div class="handle absolute-y-center right-0 translate-x-1/2 flex-center w-5 h-5 cursor-ew-resize after:(content-empty w-2 h-2 bg-white rounded-full transition-all) hover:after:scale-200" />

        <div ref="el" class="p-4" :class="color">
          <MacFrame>
            <CodeMirror />
          </MacFrame>
        </div>

        <div class="absolute right-0 -bottom-4 left-0 h-1px bg-gray/50 before:(content-empty absolute-y-center left-0 w-1px h-4 bg-gray) after:(content-empty absolute-y-center right-0 w-1px h-4 bg-gray)">
          <div class="absolute-center px-2 py-0.5 text-xs bg-gray-500 text-white/60">
            {{ width }}px
          </div>
        </div>
      </div>
    </div>

    <div class="fixed-x-center bottom-30 p-4 border border-white/20 rounded-2 bg-#191919 shadow">
      <u-space>
        <u-select v-model="color" :options="colorOptions" />

        <u-button @click="copy">
          Copy Image
        </u-button>
      </u-space>
    </div>

    <div class="pt-20 pb-6 text-center opacity-60">
      Copyright ?? 2022-present Hongbusi, design by <a href="https://ray.so">ray.so</a>.
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  dark: true
</route>
