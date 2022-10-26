export const useUserStore = defineStore('user', () => {
  const name = ref('starter-vue')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
