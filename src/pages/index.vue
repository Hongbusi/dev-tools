<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()

const handleClickSetName = () => {
  user.setName('new name')
}
</script>

<template>
  <div>
    <h2>{{ user.name }}</h2>
    <button @click="handleClickSetName">
      setName
    </button>
  </div>
</template>
