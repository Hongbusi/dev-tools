<script setup lang="ts">
useHead({
  title: 'DevTools',
  meta: [
    { name: 'description', content: 'A collection of development tools.' }
  ]
})
</script>

<template>
  <div class="px-4 py-10 mx-auto max-w-48rem">
    <Header />

    <u-space direction="vertical" class="mt-10">
      <router-link to="/create-image-for-code">
        <div class="border border-gray/50 px-4 py-2">
          Create Image For Code
        </div>
      </router-link>
    </u-space>

    <Footer />
  </div>
</template>
