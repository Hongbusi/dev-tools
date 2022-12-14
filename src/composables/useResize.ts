/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Ref } from 'vue'

export interface UseResizeOptions {
  minWidth?: number
  maxWidth?: number
  minHeight?: number
  maxHeight?: number
  direction?: 'row' | 'col'
}

type RefEl = Ref<HTMLElement | null>

export function useResize(target: RefEl, handles: RefEl, options: UseResizeOptions = {}) {
  const isActive = ref(false)
  const pointer = reactive({ startX: 0, startY: 0, currentX: 0, currentY: 0 })
  const targetRect = reactive({ width: 0, height: 0 })

  watch(pointer, handlePointer)

  function onPointerDown(event: PointerEvent) {
    if (!target.value || event.target !== handles.value)
      return

    const { x, y } = event
    pointer.startX = x
    pointer.startY = y
    pointer.currentX = x
    pointer.currentY = y

    const { width, height } = target.value!.getBoundingClientRect()
    targetRect.width = width
    targetRect.height = height

    isActive.value = true
  }

  function onPointerMove(event: PointerEvent) {
    if (!target.value || !isActive.value)
      return

    pointer.currentX = event.x
    pointer.currentY = event.y
  }

  function onPointerUp() {
    if (!target.value)
      return

    isActive.value = false
  }

  function handlePointer() {
    const { startX, startY, currentX, currentY } = pointer
    const {
      minWidth = 1,
      maxWidth = Infinity,
      minHeight = 1,
      maxHeight = Infinity
    } = options

    const width = (Math.min(maxWidth, Math.max(minWidth, Math.floor(targetRect.width + startX - currentX))))
    target.value!.style.width = `${width}px`
  }

  useEventListener(window, 'pointerdown', onPointerDown)
  useEventListener(window, 'pointermove', onPointerMove)
  useEventListener(window, 'pointerup', onPointerUp)
}
