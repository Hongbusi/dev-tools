<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav class="text-xl mt-6">
    <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
      <div v-if="isDark" class="i-hbs-moon" />
      <div v-else class="i-hbs-sunny" />
    </button>

    <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/starter-vue" target="_blank" title="GitHub">
      <div class="i-hbs-github" />
    </a>
  </nav>
</template>
