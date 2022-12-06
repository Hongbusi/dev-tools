import { resolve } from 'path'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetHbs } from 'unocss-preset-hbs'

export default defineConfig({
  presets: [
    presetUno(),
    presetHbs(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom'
      },
      collections: {
        hbs: FileSystemIconLoader(resolve(__dirname, './node_modules/@hongbusi/icons-svg'))
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
