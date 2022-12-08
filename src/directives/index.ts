import type { App } from 'vue'
import setupResizeDirective from './resize'

export function setupDirectives(app: App) {
  setupResizeDirective(app)
}

