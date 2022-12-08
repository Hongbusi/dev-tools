import type { App, Directive } from 'vue'

const MIN_WIDTH = 520
const MAX_WIDTH = 900

export default function setupResizeDirective(app: App) {
  function registerEvent(el: HTMLElement) {
    const parentEl = el.parentElement
    if (!parentEl)
      return

    parentEl.style.width = `${MIN_WIDTH}px`

    document.addEventListener('mousedown', (event) => {
      if (event.target !== el)
        return

      let lastClientX: number = event.clientX

      const handleMove = ({ clientX }: MouseEvent) => {
        const parentClientWidth = parentEl.clientWidth
        const offsetX = clientX - lastClientX
        lastClientX = clientX
        parentEl.style.width = `${Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parentClientWidth - offsetX))}px`
      }

      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleMove)
      })
    })
  }

  const resizeDirective: Directive = {
    mounted(el: HTMLElement) {
      registerEvent(el)
    }
  }

  app.directive('resize', resizeDirective)
}
