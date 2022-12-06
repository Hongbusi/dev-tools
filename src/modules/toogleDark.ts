import { type UserModule } from '~/types'
import { isDark, toggleDark } from '~/composables/dark'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to) => {
      if (to.meta.dark && !isDark.value)
        toggleDark()
    })
  }
}
