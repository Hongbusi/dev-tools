import type { Ref } from 'vue'
import html2canvas from 'html2canvas'

interface UseClipboardImageOptions {
  scale?: number
}

export interface UseClipboardImageReturn {
  copy: () => void
}

export const useClipboardImage = (el: Ref<HTMLElement | null>, options: UseClipboardImageOptions = { scale: 1.2 }): UseClipboardImageReturn => {
  async function copy() {
    if (!el.value)
      return
    const canvas = await html2canvas(el.value!, options)
    canvas.toBlob(async (blob) => {
      if (!blob)
        return
      const data = [new ClipboardItem({ [blob.type]: blob })]
      navigator.clipboard.write(data)
    })
  }

  return { copy }
}
