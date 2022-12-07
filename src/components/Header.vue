<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <header class="flex justify-between ">
    <h1 class="text-2xl font-600">
      DevTools
    </h1>

    <div class="flex-center text-xl">
      <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
        <div v-if="isDark" class="i-hbs-moon" />
        <div v-else class="i-hbs-sunny" />
      </button>

      <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/dev-tools" target="_blank" title="GitHub">
        <div class="i-hbs-github" />
      </a>
    </div>
  </header>
</template>
