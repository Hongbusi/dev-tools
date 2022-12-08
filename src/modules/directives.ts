import { type UserModule } from '~/types'
import { setupDirectives } from '~/directives'

export const install: UserModule = ({ app }) => {
  setupDirectives(app)
}
