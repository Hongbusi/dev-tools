import unstyled from 'unstyled-design'
import { type UserModule } from '~/types'
import 'unstyled-design/dist/style.css'

export const install: UserModule = ({ app }) => {
  app.use(unstyled)
}
